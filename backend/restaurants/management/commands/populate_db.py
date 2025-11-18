# restaurants/management/commands/populate_db.py

import secrets
from django.core.management.base import BaseCommand
from faker import Faker
from faker_food import FoodProvider

from restaurants.models import Restaurant, Table, StaffUser, DishCategory, Tag, Dish, Option

fake = Faker()
fake.add_provider(FoodProvider)

class Command(BaseCommand):
    help = "Populate the database with test restaurants, tables, staff—and now dishes."

    def add_arguments(self, parser):
        parser.add_argument(
            "--restaurants",
            type=int,
            default=2,
            help="Number of restaurants to create",
        )
        parser.add_argument(
            "--max-tables",
            type=int,
            default=10,
            help="Number of tables per restaurant",
        )
        parser.add_argument(
            "--staff-per-restaurant",
            type=int,
            default=9,
            help="Number of non‑admin staff users per restaurant",
        )
        parser.add_argument(
            "--categories-per-restaurant",
            type=int,
            default=3,
            help="Number of dish categories per restaurant",
        )
        parser.add_argument(
            "--dishes-per-category",
            type=int,
            default=5,
            help="Number of dishes per category",
        )
        parser.add_argument(
            "--tags-per-restaurant",
            type=int,
            default=8,
            help="Total number of global tags to create",
        )
        parser.add_argument(
            "--options-per-restaurant",
            type=int,
            default=6,
            help="Number of extra options to create per restaurant",
        )

    def handle(self, *args, **options):
        n_restaurants  = options["restaurants"]
        max_tables     = options["max_tables"]
        staff_per_rest = options["staff_per_restaurant"]
        cats_per_rest  = options["categories_per_restaurant"]
        dishes_per_cat = options["dishes_per_category"]
        n_tags_per_rest  = options["tags_per_restaurant"]
        n_options_per_rest = options["options_per_restaurant"]

        for _ in range(n_restaurants):
            # 1) Create restaurant
            name = fake.company()
            restaurant = Restaurant.objects.create(
                name={
                    "nl": f"{name}_nl",
                    "zh": f"{name}_zh",
                    "en": f"{name}_en",
                },
                address=fake.address(),
                phone=fake.phone_number(),
            )
            self.stdout.write(f"\n🏘️  Restaurant {restaurant.code} – {name}")

            # 2) Tables
            for tnum in range(1, max_tables + 1):
                table = Table.objects.create(
                    restaurant=restaurant,
                    table_number=tnum,
                )
            self.stdout.write(f"  • {max_tables} tables created")

            # 3) Staff users
            admin_username = f"{restaurant.code}_admin"
            StaffUser.objects.create_user(
                username=admin_username,
                password="password123",
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                restaurant=restaurant,
                is_admin=True,
            )
            for _ in range(staff_per_rest):
                StaffUser.objects.create_user(
                    username=fake.unique.user_name(),
                    password="password123",
                    first_name=fake.first_name(),
                    last_name=fake.last_name(),
                    restaurant=restaurant,
                    is_admin=False,
                )
            self.stdout.write(f"  • 1 admin + {staff_per_rest} staff users")

            # 4) Tags (tenant-scoped)
            restaurant_tags = []
            for _ in range(n_tags_per_rest):
                tag_name = fake.unique.word().capitalize()
                tag = Tag.objects.create(
                    restaurant=restaurant,
                    name={
                        "nl": f"{tag_name}_nl",
                        "zh": f"{tag_name}_zh",
                        "en": f"{tag_name}_en",
                    }
                )
                restaurant_tags.append(tag)
            self.stdout.write(f"  • {len(restaurant_tags)} tags created")

            # 5) Options (tenant-scoped)
            restaurant_options = []
            for _ in range(n_options_per_rest):
                opt_name = fake.word().capitalize()
                opt = Option.objects.create(
                    restaurant=restaurant,
                    name={
                        "nl": f"{opt_name}_nl",
                        "zh": f"{opt_name}_zh",
                        "en": f"{opt_name}_en",
                    },
                    description={
                        "nl": f"{fake.sentence(nb_words=6)}_nl",
                        "zh": f"{fake.sentence(nb_words=6)}_zh",
                        "en": f"{fake.sentence(nb_words=6)}_en",
                    },
                    price=round(fake.pydecimal(left_digits=1, right_digits=2, positive=True), 2),
                )
                restaurant_options.append(opt)
            self.stdout.write(f"  • {len(restaurant_options)} options created")

            # 4) Dish categories & dishes
            for _ in range(cats_per_rest):
                cat_name = fake.word().capitalize()
                category = DishCategory.objects.create(
                    restaurant=restaurant,
                    name={
                        "nl": f"{cat_name}_nl",
                        "zh": f"{cat_name}_zh",
                        "en": f"{cat_name}_en",
                    }
                )
                dishes = []
                for _ in range(dishes_per_cat):
                    dish_name = fake.unique.dish().title()
                    dish_desc = fake.sentence(nb_words=12)
                    dish = Dish.objects.create(
                        category=category,
                        name={
                            "nl": f"{dish_name}_nl",
                            "zh": f"{dish_name}_zh",
                            "en": f"{dish_name}_en",
                        },
                        description={
                            "nl": f"{dish_desc}_nl",
                            "zh": f"{dish_desc}_zh",
                            "en": f"{dish_desc}_en",
                        },
                        price=round(fake.pydecimal(left_digits=2, right_digits=2, positive=True), 2),
                    )
                    # assign 0–3 random tags
                    for tag in fake.random_elements(
                            elements=restaurant_tags,
                            length=fake.random_int(0, 3),
                            unique=True
                    ):
                        dish.tags.add(tag)
                    # assign 0–2 random options
                    for opt in fake.random_elements(
                            elements=restaurant_options,
                            length=fake.random_int(0, 2),
                            unique=True
                    ):
                        dish.options.add(opt)
                    dishes.append(dish)
                self.stdout.write(f"  • Category “{cat_name}”: {len(dishes)} dishes")

        self.stdout.write(self.style.SUCCESS(
            f"\nDone! {n_restaurants} restaurants populated with tables, staff, categories & dishes."
        ))

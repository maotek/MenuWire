## Get into a shell
```
docker exec -it menuwire-backend-prod sh
```

## Migrate on clean start
```
sudo docker compose exec backend uv run python manage.py makemigrations
```
```
sudo docker compose exec backend uv run python manage.py migrate
```

## Create Superuser
```
docker compose exec backend uv run python manage.py createsuperuser
```

## Mock data
```
docker compose exec backend uv run python manage.py populate_db
```
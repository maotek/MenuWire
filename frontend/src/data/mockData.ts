import { DishCategory } from "@/app/lib/types";
export async function fetchCategories(): Promise<DishCategory[]> {
  return [
{
  "id": 1,
  "category_name": {
    "en": "Grilled Meats",
    "nl": "Gegrild vlees",
    "zh": "烤肉类"
  },
  "dishes": [
    {
      "id": 1,
      "name": {
        "en": "Samgyeopsal (Pork Belly)",
        "nl": "Samgyeopsal (varkensbuik)",
        "zh": "韩式五花肉（Samgyeopsal）"
      },
      "description": {
        "en": "Samgyeopsal (Pork Belly) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Samgyeopsal (varkensbuik) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式五花肉（Samgyeopsal）。现点现烤，非常适合分享。"
      },
      "price": "16.62",
      "image": "https://api.openverse.org/v1/images?q=Samgyeopsal%20(Pork%20Belly)",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 2,
      "name": {
        "en": "Bulgogi (Marinated Beef)",
        "nl": "Bulgogi (gemarineerd rundvlees)",
        "zh": "韩式烤牛肉（Bulgogi）"
      },
      "description": {
        "en": "Bulgogi (Marinated Beef) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Bulgogi (gemarineerd rundvlees) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式烤牛肉（Bulgogi）。现点现烤，非常适合分享。"
      },
      "price": "15.10",
      "image": "https://api.openverse.org/v1/images?q=Bulgogi%20(Marinated%20Beef)",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 3,
      "name": {
        "en": "Galbi (Beef Short Ribs)",
        "nl": "Galbi (runderribstuk)",
        "zh": "韩式牛小排（Galbi）"
      },
      "description": {
        "en": "Galbi (Beef Short Ribs) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Galbi (runderribstuk) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式牛小排（Galbi）。现点现烤，非常适合分享。"
      },
      "price": "20.70",
      "image": "https://api.openverse.org/v1/images?q=Galbi%20(Beef%20Short%20Ribs)",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 4,
      "name": {
        "en": "Chadolbagi (Beef Brisket)",
        "nl": "Chadolbagi (runderribborst)",
        "zh": "韩式胸腹牛肉（Chadolbagi）"
      },
      "description": {
        "en": "Chadolbagi (Beef Brisket) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Chadolbagi (runderribborst) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式胸腹牛肉（Chadolbagi）。现点现烤，非常适合分享。"
      },
      "price": "17.29",
      "image": "https://api.openverse.org/v1/images?q=Chadolbagi%20(Beef%20Brisket)",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 5,
      "name": {
        "en": "Hangjeongsal (Pork Neck)",
        "nl": "Hangjeongsal (varkensnek)",
        "zh": "韩式猪颈肉（Hangjeongsal）"
      },
      "description": {
        "en": "Hangjeongsal (Pork Neck) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Hangjeongsal (varkensnek) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式猪颈肉（Hangjeongsal）。现点现烤，非常适合分享。"
      },
      "price": "19.79",
      "image": "https://api.openverse.org/v1/images?q=Pork%20Neck&page=4",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 6,
      "name": {
        "en": "Moksal (Pork Shoulder)",
        "nl": "Moksal (varkensschouder)",
        "zh": "韩式猪肩肉（Moksal）"
      },
      "description": {
        "en": "Moksal (Pork Shoulder) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Moksal (varkensschouder) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式猪肩肉（Moksal）。现点现烤，非常适合分享。"
      },
      "price": "18.31",
      "image": "https://api.openverse.org/v1/images?q=Moksal%20(Pork%20Shoulder)",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 7,
      "name": {
        "en": "LA Galbi (Cross‑cut Ribs)",
        "nl": "LA Galbi (dwarsgesneden ribben)",
        "zh": "LA 排骨（横切牛肋）"
      },
      "description": {
        "en": "LA Galbi (Cross‑cut Ribs) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "LA Galbi (dwarsgesneden ribben) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的LA 排骨（横切牛肋）。现点现烤，非常适合分享。"
      },
      "price": "25.04",
      "image": "https://api.openverse.org/v1/images?q=(Cross‑cut%20Ribs)&page=4&page_size=1",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 8,
      "name": {
        "en": "Beef Tongue",
        "nl": "Rundertong",
        "zh": "牛舌"
      },
      "description": {
        "en": "Beef Tongue prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Rundertong bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的牛舌。现点现烤，非常适合分享。"
      },
      "price": "17.20",
      "image": "https://api.openverse.org/v1/images?q=Beef%20Tongue",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 9,
      "name": {
        "en": "Pork Jowl",
        "nl": "Varkenswang",
        "zh": "猪脸颊肉"
      },
      "description": {
        "en": "Pork Jowl prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Varkenswang bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的猪脸颊肉。现点现烤，非常适合分享。"
      },
      "price": "16.58",
      "image": "https://api.openverse.org/v1/images?q=Pork%20Jowl",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 10,
      "name": {
        "en": "Skirt Steak",
        "nl": "Skirt steak",
        "zh": "横膈膜牛排（Skirt Steak）"
      },
      "description": {
        "en": "Skirt Steak prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Skirt steak bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的横膈膜牛排（Skirt Steak）。现点现烤，非常适合分享。"
      },
      "price": "17.24",
      "image": "https://api.openverse.org/v1/images?q=Skirt%20Steak",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 11,
      "name": {
        "en": "Ribeye Slices",
        "nl": "Ribeyeplakjes",
        "zh": "肉眼牛排薄片"
      },
      "description": {
        "en": "Ribeye Slices prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Ribeyeplakjes bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的肉眼牛排薄片。现点现烤，非常适合分享。"
      },
      "price": "20.75",
      "image": "https://api.openverse.org/v1/images?q=Ribeye%20Slices",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 12,
      "name": {
        "en": "Short Plate",
        "nl": "Short plate",
        "zh": "牛腹肉（Short Plate）"
      },
      "description": {
        "en": "Short Plate prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Short plate bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的牛腹肉（Short Plate）。现点现烤，非常适合分享。"
      },
      "price": "18.74",
      "image": "https://api.openverse.org/v1/images?q=Short%20Plate",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 13,
      "name": {
        "en": "Tri‑Tip",
        "nl": "Tri‑tip",
        "zh": "三角牛排（Tri‑Tip）"
      },
      "description": {
        "en": "Tri‑Tip prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tri‑tip bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的三角牛排（Tri‑Tip）。现点现烤，非常适合分享。"
      },
      "price": "16.11",
      "image": "https://api.openverse.org/v1/images?q=Tri‑Tip",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 14,
      "name": {
        "en": "Top Blade",
        "nl": "Top blade",
        "zh": "板腱牛排（Top Blade）"
      },
      "description": {
        "en": "Top Blade prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Top blade bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的板腱牛排（Top Blade）。现点现烤，非常适合分享。"
      },
      "price": "15.99",
      "image": "https://api.openverse.org/v1/images?q=Top%20Blade",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 15,
      "name": {
        "en": "Chuck Flap",
        "nl": "Chuck flap",
        "zh": "肩胛牛排（Chuck Flap）"
      },
      "description": {
        "en": "Chuck Flap prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Chuck flap bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的肩胛牛排（Chuck Flap）。现点现烤，非常适合分享。"
      },
      "price": "20.40",
      "image": "https://api.openverse.org/v1/images?q=Chuck%20Flap",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 16,
      "name": {
        "en": "Marinated Pork Ribs",
        "nl": "Gemarineerde varkensribben",
        "zh": "腌制猪肋排"
      },
      "description": {
        "en": "Marinated Pork Ribs prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gemarineerde varkensribben bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的腌制猪肋排。现点现烤，非常适合分享。"
      },
      "price": "18.16",
      "image": "https://api.openverse.org/v1/images?q=Marinated%20Pork%20Ribs",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 17,
      "name": {
        "en": "Spicy Pork Belly",
        "nl": "Pittige buikspek",
        "zh": "辣味五花肉"
      },
      "description": {
        "en": "Spicy Pork Belly prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Pittige buikspek bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣味五花肉。现点现烤，非常适合分享。"
      },
      "price": "14.56",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Pork%20Belly",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 18,
      "name": {
        "en": "Soy Garlic Chicken Thigh",
        "nl": "Kipdij in sojasaus-knoflook",
        "zh": "酱油蒜香鸡腿肉"
      },
      "description": {
        "en": "Soy Garlic Chicken Thigh prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kipdij in sojasaus-knoflook bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的酱油蒜香鸡腿肉。现点现烤，非常适合分享。"
      },
      "price": "16.51",
      "image": "https://api.openverse.org/v1/images?q=Soy%20Garlic%20Chicken%20Thigh",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 19,
      "name": {
        "en": "Dak Galbi (Spicy Chicken)",
        "nl": "Dak galbi (pikante kip)",
        "zh": "辣炒鸡排（Dak Galbi）"
      },
      "description": {
        "en": "Dak Galbi (Spicy Chicken) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Dak galbi (pikante kip) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣炒鸡排（Dak Galbi）。现点现烤，非常适合分享。"
      },
      "price": "18.88",
      "image": "https://api.openverse.org/v1/images?q=Dak%20Galbi%20(Spicy%20Chicken)",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 20,
      "name": {
        "en": "Smoked Sausage Platter",
        "nl": "Gerookte worstschotel",
        "zh": "熏香肠拼盘"
      },
      "description": {
        "en": "Smoked Sausage Platter prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gerookte worstschotel bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的熏香肠拼盘。现点现烤，非常适合分享。"
      },
      "price": "10.55",
      "image": "https://api.openverse.org/v1/images?q=Smoked%20Sausage%20Platter",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 21,
      "name": {
        "en": "Wagyu Sampler",
        "nl": "Wagyu-proeverij",
        "zh": "和牛拼盘"
      },
      "description": {
        "en": "Wagyu Sampler prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Wagyu-proeverij bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的和牛拼盘。现点现烤，非常适合分享。"
      },
      "price": "36.45",
      "image": "https://api.openverse.org/v1/images?q=A5%20Wagyu",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    }
  ]
},
{
  "id": 2,
  "category_name": {
    "en": "Marinated Beef Cuts",
    "nl": "Gemarineerde runderstukken",
    "zh": "腌制牛肉精选"
  },
  "dishes": [
    {
      "id": 22,
      "name": {
        "en": "Yangnyeom Galbi",
        "nl": "Yangnyeom galbi",
        "zh": "韩式调味牛排骨（Yangnyeom Galbi）"
      },
      "description": {
        "en": "Yangnyeom Galbi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Yangnyeom galbi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式调味牛排骨（Yangnyeom Galbi）。现点现烤，非常适合分享。"
      },
      "price": "25.09",
      "image": "https://api.openverse.org/v1/images?q=Yangnyeom%20Galbi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 23,
      "name": {
        "en": "Gochujang Bulgogi",
        "nl": "Gochujang bulgogi",
        "zh": "辣椒酱烤牛肉（Gochujang Bulgogi）"
      },
      "description": {
        "en": "Gochujang Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gochujang bulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣椒酱烤牛肉（Gochujang Bulgogi）。现点现烤，非常适合分享。"
      },
      "price": "18.22",
      "image": "https://api.openverse.org/v1/images?q=Gochujang%20Bulgogi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 24,
      "name": {
        "en": "Soy‑Garlic Sirloin",
        "nl": "Soja-knoflook entrecote",
        "zh": "酱油蒜香西冷牛排"
      },
      "description": {
        "en": "Soy‑Garlic Sirloin prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Soja-knoflook entrecote bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的酱油蒜香西冷牛排。现点现烤，非常适合分享。"
      },
      "price": "17.74",
      "image": "https://api.openverse.org/v1/images?q=Soy‑Garlic%20Sirloin",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 25,
      "name": {
        "en": "Black Pepper Ribeye",
        "nl": "Zwarte peper ribeye",
        "zh": "黑椒肉眼牛排"
      },
      "description": {
        "en": "Black Pepper Ribeye prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Zwarte peper ribeye bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的黑椒肉眼牛排。现点现烤，非常适合分享。"
      },
      "price": "27.66",
      "image": "https://api.openverse.org/v1/images?q=Ribeye",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 26,
      "name": {
        "en": "Sweet Pear Bulgogi",
        "nl": "Zoete perenbulgogi",
        "zh": "香梨烤牛肉"
      },
      "description": {
        "en": "Sweet Pear Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Zoete perenbulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的香梨烤牛肉。现点现烤，非常适合分享。"
      },
      "price": "17.89",
      "image": "https://api.openverse.org/v1/images?q=Bulgogi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 27,
      "name": {
        "en": "Sesame Ginger Short Rib",
        "nl": "Sesam-gember short rib",
        "zh": "芝麻姜味牛小排"
      },
      "description": {
        "en": "Sesame Ginger Short Rib prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Sesam-gember short rib bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的芝麻姜味牛小排。现点现烤，非常适合分享。"
      },
      "price": "19.64",
      "image": "https://api.openverse.org/v1/images?q=Sesame%20Ginger%20Short%20Rib",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 28,
      "name": {
        "en": "Galbi Finger Meat",
        "nl": "Galbi finger meat",
        "zh": "排骨条肉（Galbi Finger Meat）"
      },
      "description": {
        "en": "Galbi Finger Meat prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Galbi finger meat bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的排骨条肉（Galbi Finger Meat）。现点现烤，非常适合分享。"
      },
      "price": "18.17",
      "image": "https://api.openverse.org/v1/images?q=Galbi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 29,
      "name": {
        "en": "Chili Honey Flank",
        "nl": "Chili-honing flank",
        "zh": "辣蜂蜜牛腹肉"
      },
      "description": {
        "en": "Chili Honey Flank prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Chili-honing flank bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣蜂蜜牛腹肉。现点现烤，非常适合分享。"
      },
      "price": "22.88",
      "image": "https://api.openverse.org/v1/images?q=Chili%20Honey%20Flank",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 30,
      "name": {
        "en": "Garlic Butter Striploin",
        "nl": "Knoflook-boter lendestuk",
        "zh": "蒜香黄油西冷牛排"
      },
      "description": {
        "en": "Garlic Butter Striploin prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Knoflook-boter lendestuk bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的蒜香黄油西冷牛排。现点现烤，非常适合分享。"
      },
      "price": "23.03",
      "image": "https://api.openverse.org/v1/images?q=Striploin",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 31,
      "name": {
        "en": "Herb Soy Brisket",
        "nl": "Kruidige sojabrisket",
        "zh": "香草酱油牛胸肉"
      },
      "description": {
        "en": "Herb Soy Brisket prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kruidige sojabrisket bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的香草酱油牛胸肉。现点现烤，非常适合分享。"
      },
      "price": "21.06",
      "image": "https://api.openverse.org/v1/images?q=Brisket",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 32,
      "name": {
        "en": "Kkalbi (Thin Cut Ribs)",
        "nl": "Kkalbi (dun gesneden ribben)",
        "zh": "Kkalbi（薄切牛排骨）"
      },
      "description": {
        "en": "Kkalbi (Thin Cut Ribs) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kkalbi (dun gesneden ribben) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Kkalbi（薄切牛排骨）。现点现烤，非常适合分享。"
      },
      "price": "23.64",
      "image": "https://api.openverse.org/v1/images?q=Ribs",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 33,
      "name": {
        "en": "Miso Bulgogi",
        "nl": "Miso bulgogi",
        "zh": "味噌烤牛肉"
      },
      "description": {
        "en": "Miso Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Miso bulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的味噌烤牛肉。现点现烤，非常适合分享。"
      },
      "price": "19.29",
      "image": "https://api.openverse.org/v1/images?q=Miso%20Bulgogi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 34,
      "name": {
        "en": "Citrus Marinade Rib Tips",
        "nl": "Citrus-gemarineerde ribpuntjes",
        "zh": "柑橘腌汁牛肋尖"
      },
      "description": {
        "en": "Citrus Marinade Rib Tips prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Citrus-gemarineerde ribpuntjes bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的柑橘腌汁牛肋尖。现点现烤，非常适合分享。"
      },
      "price": "24.48",
      "image": "https://api.openverse.org/v1/images?q=Rib%20Tips",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 35,
      "name": {
        "en": "Truffle Bulgogi",
        "nl": "Truffelbulgogi",
        "zh": "松露烤牛肉"
      },
      "description": {
        "en": "Truffle Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Truffelbulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的松露烤牛肉。现点现烤，非常适合分享。"
      },
      "price": "25.03",
      "image": "https://api.openverse.org/v1/images?q=Truffle%20Bulgogi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 36,
      "name": {
        "en": "Char‑Siq Fusion",
        "nl": "Char-siq fusion",
        "zh": "叉烧风味融合牛肉"
      },
      "description": {
        "en": "Char‑Siq Fusion prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Char-siq fusion bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的叉烧风味融合牛肉。现点现烤，非常适合分享。"
      },
      "price": "20.32",
      "image": "https://api.openverse.org/v1/images?q=Char%20Siu",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 37,
      "name": {
        "en": "Five‑Spice Bulgogi",
        "nl": "Vijfkruidenbulgogi",
        "zh": "五香烤牛肉"
      },
      "description": {
        "en": "Five‑Spice Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Vijfkruidenbulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的五香烤牛肉。现点现烤，非常适合分享。"
      },
      "price": "21.94",
      "image": "https://api.openverse.org/v1/images?q=Five‑Spice%20Bulgogi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 38,
      "name": {
        "en": "Korean BBQ Brisket Ends",
        "nl": "Koreaanse BBQ brisket ends",
        "zh": "韩式烤牛胸角料"
      },
      "description": {
        "en": "Korean BBQ Brisket Ends prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Koreaanse BBQ brisket ends bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的韩式烤牛胸角料。现点现烤，非常适合分享。"
      },
      "price": "19.85",
      "image": "https://api.openverse.org/v1/images?q=Korean%20BBQ",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 39,
      "name": {
        "en": "Garlic Scallion Chuck",
        "nl": "Knoflook-bieslook chuck",
        "zh": "蒜香葱油肩胛牛肉"
      },
      "description": {
        "en": "Garlic Scallion Chuck prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Knoflook-bieslook chuck bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的蒜香葱油肩胛牛肉。现点现烤，非常适合分享。"
      },
      "price": "21.99",
      "image": "https://api.openverse.org/v1/images?q=Beef%20Chuck",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 40,
      "name": {
        "en": "Soy‑Yuzu Ribeye",
        "nl": "Soja-yuzu ribeye",
        "zh": "柚子酱油肉眼牛排"
      },
      "description": {
        "en": "Soy‑Yuzu Ribeye prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Soja-yuzu ribeye bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的柚子酱油肉眼牛排。现点现烤，非常适合分享。"
      },
      "price": "25.12",
      "image": "https://api.openverse.org/v1/images?q=Soy‑Yuzu%20Ribeye",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 41,
      "name": {
        "en": "Pear‑Apple Bulgogi",
        "nl": "Peer-appel bulgogi",
        "zh": "梨苹果烤牛肉"
      },
      "description": {
        "en": "Pear‑Apple Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Peer-appel bulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的梨苹果烤牛肉。现点现烤，非常适合分享。"
      },
      "price": "21.04",
      "image": "https://api.openverse.org/v1/images?q=Pear‑Apple%20Bulgogi",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 42,
      "name": {
        "en": "Double Marinade Sampler",
        "nl": "Dubbele marinadeproeverij",
        "zh": "双重腌制拼盘"
      },
      "description": {
        "en": "Double Marinade Sampler prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Dubbele marinadeproeverij bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的双重腌制拼盘。现点现烤，非常适合分享。"
      },
      "price": "21.37",
      "image": "https://api.openverse.org/v1/images?q=Beef%20Sampler",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    }
  ]
},
{
  "id": 3,
  "category_name": {
    "en": "Pork & Poultry",
    "nl": "Varkensvlees en gevogelte",
    "zh": "猪肉和禽肉"
  },
  "dishes": [
    {
      "id": 43,
      "name": {
        "en": "Honey Garlic Samgyeopsal",
        "nl": "Honey-garlic samgyeopsal",
        "zh": "蜂蜜蒜香五花肉（Samgyeopsal）"
      },
      "description": {
        "en": "Honey Garlic Samgyeopsal prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Honey-garlic samgyeopsal bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的蜂蜜蒜香五花肉（Samgyeopsal）。现点现烤，非常适合分享。"
      },
      "price": "14.72",
      "image": "https://api.openverse.org/v1/images?q=Honey%20Garlic%20Samgyeopsal",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 44,
      "name": {
        "en": "Herb Salt Pork Neck",
        "nl": "Varkensnek met kruidenzout",
        "zh": "香草盐猪颈肉"
      },
      "description": {
        "en": "Herb Salt Pork Neck prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Varkensnek met kruidenzout bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的香草盐猪颈肉。现点现烤，非常适合分享。"
      },
      "price": "15.52",
      "image": "https://api.openverse.org/v1/images?q=Herb%20Salt%20Pork%20Neck",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 45,
      "name": {
        "en": "Gochujang Pork Shoulder",
        "nl": "Gochujang varkensschouder",
        "zh": "辣椒酱猪肩肉"
      },
      "description": {
        "en": "Gochujang Pork Shoulder prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gochujang varkensschouder bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣椒酱猪肩肉。现点现烤，非常适合分享。"
      },
      "price": "13.44",
      "image": "https://api.openverse.org/v1/images?q=Gochujang%20Pork%20Shoulder",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 46,
      "name": {
        "en": "Soy-Miso Pork Ribs",
        "nl": "Soja-miso varkensribben",
        "zh": "酱油味噌猪肋排"
      },
      "description": {
        "en": "Soy-Miso Pork Ribs prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Soja-miso varkensribben bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的酱油味噌猪肋排。现点现烤，非常适合分享。"
      },
      "price": "16.26",
      "image": "https://api.openverse.org/v1/images?q=Soy%E2%80%91Miso%20Pork%20Ribs",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 47,
      "name": {
        "en": "Spicy Chicken Bulgogi",
        "nl": "Pittige kipbulgogi",
        "zh": "辣味鸡肉烤肉（Bulgogi）"
      },
      "description": {
        "en": "Spicy Chicken Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Pittige kipbulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣味鸡肉烤肉（Bulgogi）。现点现烤，非常适合分享。"
      },
      "price": "12.71",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Chicken%20Bulgogi",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 48,
      "name": {
        "en": "Soy Garlic Chicken Bulgogi",
        "nl": "Soja-knoflook kipbulgogi",
        "zh": "酱油蒜香鸡肉烤肉（Bulgogi）"
      },
      "description": {
        "en": "Soy Garlic Chicken Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Soja-knoflook kipbulgogi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的酱油蒜香鸡肉烤肉（Bulgogi）。现点现烤，非常适合分享。"
      },
      "price": "13.92",
      "image": "https://api.openverse.org/v1/images?q=Soy%20Garlic%20Chicken%20Bulgogi",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 49,
      "name": {
        "en": "Crispy Chicken Skin",
        "nl": "Krokante kippenskin",
        "zh": "香脆鸡皮"
      },
      "description": {
        "en": "Crispy Chicken Skin prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Krokante kippenskin bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的香脆鸡皮。现点现烤，非常适合分享。"
      },
      "price": "13.59",
      "image": "https://api.openverse.org/v1/images?q=Crispy%20Chicken%20Skin",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 50,
      "name": {
        "en": "Teriyaki Chicken Thigh",
        "nl": "Teriyaki kipdij",
        "zh": "照烧鸡腿肉"
      },
      "description": {
        "en": "Teriyaki Chicken Thigh prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Teriyaki kipdij bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的照烧鸡腿肉。现点现烤，非常适合分享。"
      },
      "price": "14.12",
      "image": "https://api.openverse.org/v1/images?q=Teriyaki%20Chicken%20Thigh",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 51,
      "name": {
        "en": "Katsu-Style Chicken Bites",
        "nl": "Katsu-stijl kipstukjes",
        "zh": "日式炸鸡块（Katsu 风格）"
      },
      "description": {
        "en": "Katsu-Style Chicken Bites prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Katsu-stijl kipstukjes bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的日式炸鸡块（Katsu 风格）。现点现烤，非常适合分享。"
      },
      "price": "12.46",
      "image": "https://api.openverse.org/v1/images?q=Katsu%E2%80%91Style%20Chicken%20Bites",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 52,
      "name": {
        "en": "Lemon Pepper Chicken",
        "nl": "Citroen-peper kip",
        "zh": "柠檬黑椒鸡"
      },
      "description": {
        "en": "Lemon Pepper Chicken prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Citroen-peper kip bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的柠檬黑椒鸡。现点现烤，非常适合分享。"
      },
      "price": "13.28",
      "image": "https://api.openverse.org/v1/images?q=Lemon%20Pepper%20Chicken",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 53,
      "name": {
        "en": "Herb-Butter Chicken",
        "nl": "Kip met kruidenboter",
        "zh": "香草黄油鸡"
      },
      "description": {
        "en": "Herb-Butter Chicken prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kip met kruidenboter bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的香草黄油鸡。现点现烤，非常适合分享。"
      },
      "price": "14.14",
      "image": "https://api.openverse.org/v1/images?q=Herb%E2%80%91Butter%20Chicken",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 54,
      "name": {
        "en": "Spicy Pork Jowl",
        "nl": "Pittige varkenswang",
        "zh": "辣味猪脸颊肉"
      },
      "description": {
        "en": "Spicy Pork Jowl prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Pittige varkenswang bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣味猪脸颊肉。现点现烤，非常适合分享。"
      },
      "price": "20.59",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Pork%20Jowl",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 55,
      "name": {
        "en": "Sweet Soy Pork Belly",
        "nl": "Zoete sojabuikspek",
        "zh": "甜酱油五花肉"
      },
      "description": {
        "en": "Sweet Soy Pork Belly prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Zoete sojabuikspek bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的甜酱油五花肉。现点现烤，非常适合分享。"
      },
      "price": "17.28",
      "image": "https://api.openverse.org/v1/images?q=Sweet%20Soy%20Pork%20Belly",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 56,
      "name": {
        "en": "Dak Galbi with Rice Cakes",
        "nl": "Dak galbi met rijstcakes",
        "zh": "辣炒鸡排配年糕（Dak Galbi）"
      },
      "description": {
        "en": "Dak Galbi with Rice Cakes prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Dak galbi met rijstcakes bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的辣炒鸡排配年糕（Dak Galbi）。现点现烤，非常适合分享。"
      },
      "price": "17.77",
      "image": "https://api.openverse.org/v1/images?q=Dak%20Galbi%20with%20Rice%20Cakes",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 57,
      "name": {
        "en": "Garlic Sesame Chicken Wings",
        "nl": "Knoflook-sesam kippenvleugels",
        "zh": "蒜香芝麻鸡翅"
      },
      "description": {
        "en": "Garlic Sesame Chicken Wings prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Knoflook-sesam kippenvleugels bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的蒜香芝麻鸡翅。现点现烤，非常适合分享。"
      },
      "price": "11.27",
      "image": "https://api.openverse.org/v1/images?q=Garlic%20Sesame%20Chicken%20Wings",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 58,
      "name": {
        "en": "Cheese Dak Galbi",
        "nl": "Cheese dak galbi",
        "zh": "芝士辣炒鸡排（Dak Galbi）"
      },
      "description": {
        "en": "Cheese Dak Galbi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Cheese dak galbi bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的芝士辣炒鸡排（Dak Galbi）。现点现烤，非常适合分享。"
      },
      "price": "19.63",
      "image": "https://api.openverse.org/v1/images?q=Cheese%20Dak%20Galbi",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 59,
      "name": {
        "en": "Curry Pork Belly",
        "nl": "Currybuikspek",
        "zh": "咖喱五花肉"
      },
      "description": {
        "en": "Curry Pork Belly prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Currybuikspek bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的咖喱五花肉。现点现烤，非常适合分享。"
      },
      "price": "13.61",
      "image": "https://api.openverse.org/v1/images?q=Curry%20Pork%20Belly",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 60,
      "name": {
        "en": "Smoky Chicken Sausage",
        "nl": "Gerookte kippensaucijs",
        "zh": "烟熏鸡肉香肠"
      },
      "description": {
        "en": "Smoky Chicken Sausage prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gerookte kippensaucijs bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的烟熏鸡肉香肠。现点现烤，非常适合分享。"
      },
      "price": "12.84",
      "image": "https://api.openverse.org/v1/images?q=Smoky%20Chicken%20Sausage",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 61,
      "name": {
        "en": "Lemongrass Chicken",
        "nl": "Citroengras kip",
        "zh": "香茅鸡"
      },
      "description": {
        "en": "Lemongrass Chicken prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Citroengras kip bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的香茅鸡。现点现烤，非常适合分享。"
      },
      "price": "19.32",
      "image": "https://api.openverse.org/v1/images?q=Lemongrass%20Chicken",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 62,
      "name": {
        "en": "Bulldak (Fire Chicken)",
        "nl": "Bulldak (vuurkip)",
        "zh": "火鸡排（Bulldak）"
      },
      "description": {
        "en": "Bulldak (Fire Chicken) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Bulldak (vuurkip) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的火鸡排（Bulldak）。现点现烤，非常适合分享。"
      },
      "price": "18.12",
      "image": "https://api.openverse.org/v1/images?q=Bulldak%20(Fire%20Chicken)",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 63,
      "name": {
        "en": "Triple Pork Trio",
        "nl": "Triple pork trio",
        "zh": "三味猪肉拼盘"
      },
      "description": {
        "en": "Triple Pork Trio prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Triple pork trio bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的三味猪肉拼盘。现点现烤，非常适合分享。"
      },
      "price": "22.46",
      "image": "https://api.openverse.org/v1/images?q=Triple%20Pork%20Trio",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    }
  ]
},
{
  "id": 4,
  "category_name": {
    "en": "Seafood Grill",
    "nl": "Gegrilde zeevruchten",
    "zh": "海鲜烧烤"
  },
  "dishes": [
    {
      "id": 64,
      "name": {
        "en": "Grilled Squid",
        "nl": "Grilled Squid",
        "zh": "Grilled 鱿鱼"
      },
      "description": {
        "en": "Grilled Squid prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Grilled Squid bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Grilled 鱿鱼。现点现烤，非常适合分享。"
      },
      "price": "18.48",
      "image": "https://api.openverse.org/v1/images?q=Grilled%20Squid",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 65,
      "name": {
        "en": "Grilled Mackerel",
        "nl": "Grilled Mackerel",
        "zh": "烤青花鱼"
      },
      "description": {
        "en": "Grilled Mackerel prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Grilled Mackerel bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的烤青花鱼。现点现烤，非常适合分享。"
      },
      "price": "17.24",
      "image": "https://api.openverse.org/v1/images?q=Grilled%20Mackerel",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 66,
      "name": {
        "en": "Spicy Shrimp Skewers",
        "nl": "Spicy Shrimp Skewers",
        "zh": "Spicy 虾 Skewers"
      },
      "description": {
        "en": "Spicy Shrimp Skewers prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Spicy Shrimp Skewers bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Spicy 虾 Skewers。现点现烤，非常适合分享。"
      },
      "price": "20.21",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Shrimp%20Skewers",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 67,
      "name": {
        "en": "Butter Garlic Scallops",
        "nl": "Butter Garlic Scallops",
        "zh": "Butter Garlic Scallops"
      },
      "description": {
        "en": "Butter Garlic Scallops prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Butter Garlic Scallops bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Butter Garlic Scallops。现点现烤，非常适合分享。"
      },
      "price": "19.83",
      "image": "https://api.openverse.org/v1/images?q=Butter%20Garlic%20Scallops",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 68,
      "name": {
        "en": "Miso Glazed Salmon",
        "nl": "Miso Glazed Salmon",
        "zh": "Miso Glazed 三文鱼"
      },
      "description": {
        "en": "Miso Glazed Salmon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Miso Glazed Salmon bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Miso Glazed 三文鱼。现点现烤，非常适合分享。"
      },
      "price": "17.26",
      "image": "https://api.openverse.org/v1/images?q=Miso%20Glazed%20Salmon",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 69,
      "name": {
        "en": "Octopus with Sesame Oil",
        "nl": "Octopus with Sesame Oil",
        "zh": "Octopus with Sesame Oil"
      },
      "description": {
        "en": "Octopus with Sesame Oil prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Octopus with Sesame Oil bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Octopus with Sesame Oil。现点现烤，非常适合分享。"
      },
      "price": "21.52",
      "image": "https://api.openverse.org/v1/images?q=Octopus%20with%20Sesame%20Oil",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 70,
      "name": {
        "en": "Clam Foil Packet",
        "nl": "Clam Foil Packet",
        "zh": "Clam Foil Packet"
      },
      "description": {
        "en": "Clam Foil Packet prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Clam Foil Packet bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Clam Foil Packet。现点现烤，非常适合分享。"
      },
      "price": "14.64",
      "image": "https://api.openverse.org/v1/images?q=Clam%20Foil%20Packet",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 71,
      "name": {
        "en": "BBQ Eel Fillet",
        "nl": "BBQ Eel Fillet",
        "zh": "BBQ Eel Fillet"
      },
      "description": {
        "en": "BBQ Eel Fillet prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "BBQ Eel Fillet bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的BBQ Eel Fillet。现点现烤，非常适合分享。"
      },
      "price": "22.19",
      "image": "https://api.openverse.org/v1/images?q=BBQ%20Eel%20Fillet",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 72,
      "name": {
        "en": "Spicy Mussels",
        "nl": "Spicy Mussels",
        "zh": "Spicy Mussels"
      },
      "description": {
        "en": "Spicy Mussels prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Spicy Mussels bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Spicy Mussels。现点现烤，非常适合分享。"
      },
      "price": "18.54",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Mussels",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 73,
      "name": {
        "en": "Lemon Herb Prawns",
        "nl": "Lemon Herb Prawns",
        "zh": "Lemon Herb 大虾"
      },
      "description": {
        "en": "Lemon Herb Prawns prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Lemon Herb Prawns bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Lemon Herb 大虾。现点现烤，非常适合分享。"
      },
      "price": "22.51",
      "image": "https://api.openverse.org/v1/images?q=Lemon%20Herb%20Prawns",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 74,
      "name": {
        "en": "Soy Ginger Sea Bream",
        "nl": "Soy Ginger Sea Bream",
        "zh": "Soy Ginger Sea Bream"
      },
      "description": {
        "en": "Soy Ginger Sea Bream prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Soy Ginger Sea Bream bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Soy Ginger Sea Bream。现点现烤，非常适合分享。"
      },
      "price": "18.72",
      "image": "https://api.openverse.org/v1/images?q=Soy%20Ginger%20Sea%20Bream",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 75,
      "name": {
        "en": "Chili Crab Legs",
        "nl": "Chili Crab Legs",
        "zh": "Chili Crab Legs"
      },
      "description": {
        "en": "Chili Crab Legs prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Chili Crab Legs bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Chili Crab Legs。现点现烤，非常适合分享。"
      },
      "price": "28.24",
      "image": "https://api.openverse.org/v1/images?q=Chili%20Crab%20Legs",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 76,
      "name": {
        "en": "Garlic Butter Lobster Tail",
        "nl": "Garlic Butter Lobster Tail",
        "zh": "蒜香黄油龙虾尾"
      },
      "description": {
        "en": "Garlic Butter Lobster Tail prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Garlic Butter Lobster Tail bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的蒜香黄油龙虾尾。现点现烤，非常适合分享。"
      },
      "price": "31.17",
      "image": "https://api.openverse.org/v1/images?q=Garlic%20Butter%20Lobster%20Tail",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 77,
      "name": {
        "en": "Teriyaki Swordfish",
        "nl": "Teriyaki Swordfish",
        "zh": "Teriyaki Swordfish"
      },
      "description": {
        "en": "Teriyaki Swordfish prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Teriyaki Swordfish bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Teriyaki Swordfish。现点现烤，非常适合分享。"
      },
      "price": "25.62",
      "image": "https://api.openverse.org/v1/images?q=Teriyaki%20Swordfish",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 78,
      "name": {
        "en": "Gochujang Squid Rings",
        "nl": "Gochujang Squid Rings",
        "zh": "Gochujang 鱿鱼 Rings"
      },
      "description": {
        "en": "Gochujang Squid Rings prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gochujang Squid Rings bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Gochujang 鱿鱼 Rings。现点现烤，非常适合分享。"
      },
      "price": "17.47",
      "image": "https://api.openverse.org/v1/images?q=Gochujang%20Squid%20Rings",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 79,
      "name": {
        "en": "Sesame Tuna Steaks",
        "nl": "Sesame Tuna Steaks",
        "zh": "Sesame Tuna Steaks"
      },
      "description": {
        "en": "Sesame Tuna Steaks prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Sesame Tuna Steaks bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Sesame Tuna Steaks。现点现烤，非常适合分享。"
      },
      "price": "22.12",
      "image": "https://api.openverse.org/v1/images?q=Sesame%20Tuna%20Steaks",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 80,
      "name": {
        "en": "Soy‑Yuzu Salmon Collar",
        "nl": "Soy‑Yuzu Salmon Collar",
        "zh": "Soy‑Yuzu 三文鱼 Collar"
      },
      "description": {
        "en": "Soy‑Yuzu Salmon Collar prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Soy‑Yuzu Salmon Collar bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Soy‑Yuzu 三文鱼 Collar。现点现烤，非常适合分享。"
      },
      "price": "17.77",
      "image": "https://api.openverse.org/v1/images?q=Soy‑Yuzu%20Salmon%20Collar",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 81,
      "name": {
        "en": "Shrimp & Scallop Duo",
        "nl": "Shrimp & Scallop Duo",
        "zh": "虾 & Scallop Duo"
      },
      "description": {
        "en": "Shrimp & Scallop Duo prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Shrimp & Scallop Duo bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的虾 & Scallop Duo。现点现烤，非常适合分享。"
      },
      "price": "25.99",
      "image": "https://api.openverse.org/v1/images?q=Shrimp%20&%20Scallop%20Duo",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 82,
      "name": {
        "en": "Seafood Sampler Platter",
        "nl": "Seafood Sampler Platter",
        "zh": "海鲜 Sampler Platter"
      },
      "description": {
        "en": "Seafood Sampler Platter prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seafood Sampler Platter bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的海鲜 Sampler Platter。现点现烤，非常适合分享。"
      },
      "price": "27.10",
      "image": "https://api.openverse.org/v1/images?q=Seafood%20Sampler%20Platter",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 83,
      "name": {
        "en": "Charred Sea Bass",
        "nl": "Charred Sea Bass",
        "zh": "Charred Sea Bass"
      },
      "description": {
        "en": "Charred Sea Bass prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Charred Sea Bass bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Charred Sea Bass。现点现烤，非常适合分享。"
      },
      "price": "25.08",
      "image": "https://api.openverse.org/v1/images?q=Charred%20Sea%20Bass",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 84,
      "name": {
        "en": "Anchovy Skewers",
        "nl": "Anchovy Skewers",
        "zh": "Anchovy Skewers"
      },
      "description": {
        "en": "Anchovy Skewers prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Anchovy Skewers bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Anchovy Skewers。现点现烤，非常适合分享。"
      },
      "price": "15.18",
      "image": "https://api.openverse.org/v1/images?q=Anchovy%20Skewers",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grill",
            "zh": "烧烤"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 1,
          "name": {
            "en": "Extra Garlic Sauce",
            "nl": "Extra knoflooksaus",
            "zh": "额外蒜蓉蘸酱"
          },
          "description": {
            "en": "Add our roasted garlic dipping sauce.",
            "nl": "Voeg onze geroosterde knoflookdip toe.",
            "zh": "加一份本店烤蒜蘸酱。"
          },
          "price": "1.50"
        },
        {
          "id": 2,
          "name": {
            "en": "Extra Lettuce Wraps",
            "nl": "Extra slablaadjes",
            "zh": "额外生菜包"
          },
          "description": {
            "en": "More fresh lettuce for wrapping.",
            "nl": "Meer verse sla om in te rollen.",
            "zh": "多一份包肉用的新鲜生菜。"
          },
          "price": "2.00"
        },
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "额外泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Voeg een portie pittige kimchi toe.",
            "zh": "加一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    }
  ]
},
{
  "id": 5,
  "category_name": {
    "en": "Stews & Soups",
    "nl": "Stoofgerechten en soepen",
    "zh": "炖菜和汤品"
  },
  "dishes": [
    {
      "id": 85,
      "name": {
        "en": "Kimchi Jjigae",
        "nl": "Kimchi Jjigae",
        "zh": "泡菜 Jjigae"
      },
      "description": {
        "en": "Kimchi Jjigae prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi Jjigae bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的泡菜 Jjigae。现点现烤，非常适合分享。"
      },
      "price": "11.20",
      "image": "https://api.openverse.org/v1/images?q=Kimchi%20Jjigae",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "暖身"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 86,
      "name": {
        "en": "Sundubu Jjigae (Soft Tofu Stew)",
        "nl": "Sundubu Jjigae (Soft Tofu Stew)",
        "zh": "Sundubu Jjigae (Soft 豆腐 Stew)"
      },
      "description": {
        "en": "Sundubu Jjigae (Soft Tofu Stew) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Sundubu Jjigae (Soft Tofu Stew) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Sundubu Jjigae (Soft 豆腐 Stew)。现点现烤，非常适合分享。"
      },
      "price": "10.25",
      "image": "https://api.openverse.org/v1/images?q=Sundubu%20Jjigae%20(Soft%20Tofu%20Stew)",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 87,
      "name": {
        "en": "Doenjang Jjigae (Soybean Stew)",
        "nl": "Doenjang Jjigae (Soybean Stew)",
        "zh": "Doenjang Jjigae (Soybean Stew)"
      },
      "description": {
        "en": "Doenjang Jjigae (Soybean Stew) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Doenjang Jjigae (Soybean Stew) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Doenjang Jjigae (Soybean Stew)。现点现烤，非常适合分享。"
      },
      "price": "15.78",
      "image": "https://api.openverse.org/v1/images?q=Doenjang%20Jjigae%20(Soybean%20Stew)",
      "tags": [
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "暖身"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 88,
      "name": {
        "en": "Yukgaejang (Spicy Beef Soup)",
        "nl": "Yukgaejang (Spicy Beef Soup)",
        "zh": "Yukgaejang (Spicy Beef 汤)"
      },
      "description": {
        "en": "Yukgaejang (Spicy Beef Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Yukgaejang (Spicy Beef Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Yukgaejang (Spicy Beef 汤)。现点现烤，非常适合分享。"
      },
      "price": "13.58",
      "image": "https://api.openverse.org/v1/images?q=Yukgaejang%20(Spicy%20Beef%20Soup)",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 89,
      "name": {
        "en": "Galbitang (Short Rib Soup)",
        "nl": "Galbitang (Short Rib Soup)",
        "zh": "Galbitang (Short Rib 汤)"
      },
      "description": {
        "en": "Galbitang (Short Rib Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Galbitang (Short Rib Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Galbitang (Short Rib 汤)。现点现烤，非常适合分享。"
      },
      "price": "11.73",
      "image": "https://api.openverse.org/v1/images?q=Galbitang%20(Short%20Rib%20Soup)",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 90,
      "name": {
        "en": "Seolleongtang (Ox Bone Soup)",
        "nl": "Seolleongtang (Ox Bone Soup)",
        "zh": "Seolleongtang (Ox Bone 汤)"
      },
      "description": {
        "en": "Seolleongtang (Ox Bone Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seolleongtang (Ox Bone Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Seolleongtang (Ox Bone 汤)。现点现烤，非常适合分享。"
      },
      "price": "9.28",
      "image": "https://api.openverse.org/v1/images?q=Seolleongtang%20(Ox%20Bone%20Soup)",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 91,
      "name": {
        "en": "Army Stew (Budae Jjigae)",
        "nl": "Army Stew (Budae Jjigae)",
        "zh": "Army Stew (Budae Jjigae)"
      },
      "description": {
        "en": "Army Stew (Budae Jjigae) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Army Stew (Budae Jjigae) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Army Stew (Budae Jjigae)。现点现烤，非常适合分享。"
      },
      "price": "10.88",
      "image": "https://api.openverse.org/v1/images?q=Army%20Stew%20(Budae%20Jjigae)",
      "tags": [
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "适合分享"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 92,
      "name": {
        "en": "Mandu Guk (Dumpling Soup)",
        "nl": "Mandu Guk (Dumpling Soup)",
        "zh": "Mandu Guk (Dumpling 汤)"
      },
      "description": {
        "en": "Mandu Guk (Dumpling Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Mandu Guk (Dumpling Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Mandu Guk (Dumpling 汤)。现点现烤，非常适合分享。"
      },
      "price": "12.92",
      "image": "https://api.openverse.org/v1/images?q=Mandu%20Guk%20(Dumpling%20Soup)",
      "tags": [
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "暖身"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 93,
      "name": {
        "en": "Miyeok Guk (Seaweed Soup)",
        "nl": "Miyeok Guk (Seaweed Soup)",
        "zh": "Miyeok Guk (Seaweed 汤)"
      },
      "description": {
        "en": "Miyeok Guk (Seaweed Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Miyeok Guk (Seaweed Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Miyeok Guk (Seaweed 汤)。现点现烤，非常适合分享。"
      },
      "price": "12.84",
      "image": "https://api.openverse.org/v1/images?q=Miyeok%20Guk%20(Seaweed%20Soup)",
      "tags": [
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 94,
      "name": {
        "en": "Samgyetang (Ginseng Chicken Soup)",
        "nl": "Samgyetang (Ginseng Chicken Soup)",
        "zh": "Samgyetang (Ginseng Chicken 汤)"
      },
      "description": {
        "en": "Samgyetang (Ginseng Chicken Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Samgyetang (Ginseng Chicken Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Samgyetang (Ginseng Chicken 汤)。现点现烤，非常适合分享。"
      },
      "price": "16.88",
      "image": "https://api.openverse.org/v1/images?q=Samgyetang%20(Ginseng%20Chicken%20Soup)",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌菜"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 95,
      "name": {
        "en": "Tteokguk (Rice Cake Soup)",
        "nl": "Tteokguk (Rice Cake Soup)",
        "zh": "Tteokguk (Rice Cake 汤)"
      },
      "description": {
        "en": "Tteokguk (Rice Cake Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tteokguk (Rice Cake Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Tteokguk (Rice Cake 汤)。现点现烤，非常适合分享。"
      },
      "price": "7.81",
      "image": "https://api.openverse.org/v1/images?q=Tteokguk%20(Rice%20Cake%20Soup)",
      "tags": [
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "暖身"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 96,
      "name": {
        "en": "Spicy Seafood Jjigae",
        "nl": "Spicy Seafood Jjigae",
        "zh": "Spicy 海鲜 Jjigae"
      },
      "description": {
        "en": "Spicy Seafood Jjigae prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Spicy Seafood Jjigae bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Spicy 海鲜 Jjigae。现点现烤，非常适合分享。"
      },
      "price": "14.25",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Seafood%20Jjigae",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 97,
      "name": {
        "en": "Beef Radish Soup",
        "nl": "Beef Radish Soup",
        "zh": "Beef Radish 汤"
      },
      "description": {
        "en": "Beef Radish Soup prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Beef Radish Soup bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Beef Radish 汤。现点现烤，非常适合分享。"
      },
      "price": "15.67",
      "image": "https://api.openverse.org/v1/images?q=Beef%20Radish%20Soup",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 98,
      "name": {
        "en": "Oxtail Soup",
        "nl": "Oxtail Soup",
        "zh": "Oxtail 汤"
      },
      "description": {
        "en": "Oxtail Soup prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Oxtail Soup bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Oxtail 汤。现点现烤，非常适合分享。"
      },
      "price": "18.73",
      "image": "https://api.openverse.org/v1/images?q=Oxtail%20Soup",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 99,
      "name": {
        "en": "Ugeoji Tang (Cabbage Soup)",
        "nl": "Ugeoji Tang (Cabbage Soup)",
        "zh": "Ugeoji Tang (Cabbage 汤)"
      },
      "description": {
        "en": "Ugeoji Tang (Cabbage Soup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Ugeoji Tang (Cabbage Soup) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Ugeoji Tang (Cabbage 汤)。现点现烤，非常适合分享。"
      },
      "price": "14.67",
      "image": "https://api.openverse.org/v1/images?q=Ugeoji%20Tang%20(Cabbage%20Soup)",
      "tags": [
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 100,
      "name": {
        "en": "Pork Bone Gamjatang",
        "nl": "Pork Bone Gamjatang",
        "zh": "Pork Bone Gamjatang"
      },
      "description": {
        "en": "Pork Bone Gamjatang prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Pork Bone Gamjatang bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Pork Bone Gamjatang。现点现烤，非常适合分享。"
      },
      "price": "17.69",
      "image": "https://api.openverse.org/v1/images?q=Pork%20Bone%20Gamjatang",
      "tags": [
        {
          "id": 1,
          "name": {
            "en": "Pork",
            "nl": "Varkensvlees",
            "zh": "猪肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 101,
      "name": {
        "en": "Clam Doenjang Stew",
        "nl": "Clam Doenjang Stew",
        "zh": "Clam Doenjang Stew"
      },
      "description": {
        "en": "Clam Doenjang Stew prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Clam Doenjang Stew bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Clam Doenjang Stew。现点现烤，非常适合分享。"
      },
      "price": "9.29",
      "image": "https://api.openverse.org/v1/images?q=Clam%20Doenjang%20Stew",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 102,
      "name": {
        "en": "Mushroom Jjigae",
        "nl": "Mushroom Jjigae",
        "zh": "Mushroom Jjigae"
      },
      "description": {
        "en": "Mushroom Jjigae prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Mushroom Jjigae bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Mushroom Jjigae。现点现烤，非常适合分享。"
      },
      "price": "13.37",
      "image": "https://api.openverse.org/v1/images?q=Mushroom%20Jjigae",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "暖身"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 103,
      "name": {
        "en": "Spicy Tofu & Kimchi Soup",
        "nl": "Spicy Tofu & Kimchi Soup",
        "zh": "Spicy 豆腐 & Kimchi 汤"
      },
      "description": {
        "en": "Spicy Tofu & Kimchi Soup prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Spicy Tofu & Kimchi Soup bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Spicy 豆腐 & Kimchi 汤。现点现烤，非常适合分享。"
      },
      "price": "13.65",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Tofu%20&%20Kimchi%20Soup",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 104,
      "name": {
        "en": "Ox Knee Soup",
        "nl": "Ox Knee Soup",
        "zh": "Ox Knee 汤"
      },
      "description": {
        "en": "Ox Knee Soup prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Ox Knee Soup bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Ox Knee 汤。现点现烤，非常适合分享。"
      },
      "price": "17.20",
      "image": "https://api.openverse.org/v1/images?q=Ox%20Knee%20Soup",
      "tags": [
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        },
        {
          "id": 7,
          "name": {
            "en": "Premium",
            "nl": "Premium",
            "zh": "精选"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 105,
      "name": {
        "en": "Cold Naengmyeon Broth (Mul)",
        "nl": "Cold Naengmyeon Broth (Mul)",
        "zh": "Cold Naengmyeon Broth (Mul)"
      },
      "description": {
        "en": "Cold Naengmyeon Broth (Mul) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Cold Naengmyeon Broth (Mul) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers gegrild op bestelling en ideaal om te delen.",
        "zh": "采用韩式风味、店内秘制腌料和经典配菜制作的Cold Naengmyeon Broth (Mul)。现点现烤，非常适合分享。"
      },
      "price": "9.93",
      "image": "https://api.openverse.org/v1/images?q=Cold%20Naengmyeon%20Broth%20(Mul)",
      "tags": [
        {
          "id": 18,
          "name": {
            "en": "Cold",
            "nl": "Koud",
            "zh": "冷食"
          }
        },
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤"
          }
        }
      ],
      "options": [
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "额外白米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗白米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "额外鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "再提高一点辣度。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "清淡"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    }
  ]
},
{
  "id": 7,
  "category_name": {
    "en": "Sides (Banchan)",
    "nl": "Bijgerechten (Banchan)",
    "zh": "小菜（拌菜）"
  },
  "dishes": [
    {
      "id": 127,
      "name": {
        "en": "Kimchi",
        "nl": "Kimchi",
        "zh": "Kimchi"
      },
      "description": {
        "en": "Kimchi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Kimchi，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Kimchi",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 128,
      "name": {
        "en": "Cucumber Kimchi",
        "nl": "Cucumber Kimchi",
        "zh": "Cucumber Kimchi"
      },
      "description": {
        "en": "Cucumber Kimchi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Cucumber Kimchi in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Cucumber Kimchi，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "6.93",
      "image": "https://api.openverse.org/v1/images?q=Cucumber%20Kimchi",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 129,
      "name": {
        "en": "Kongnamul (Soy Sprouts)",
        "nl": "Kongnamul (Soy Sprouts)",
        "zh": "Kongnamul (Soy Sprouts)"
      },
      "description": {
        "en": "Kongnamul (Soy Sprouts) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kongnamul (Soy Sprouts) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Kongnamul (Soy Sprouts)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "6.03",
      "image": "https://api.openverse.org/v1/images?q=Kongnamul%20(Soy%20Sprouts)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 130,
      "name": {
        "en": "Gamja Jorim (Potatoes)",
        "nl": "Gamja Jorim (Potatoes)",
        "zh": "Gamja Jorim (Potatoes)"
      },
      "description": {
        "en": "Gamja Jorim (Potatoes) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gamja Jorim (Potatoes) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Gamja Jorim (Potatoes)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "5.85",
      "image": "https://api.openverse.org/v1/images?q=Gamja%20Jorim%20(Potatoes)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 131,
      "name": {
        "en": "Sigumchi Namul (Spinach)",
        "nl": "Sigumchi Namul (Spinach)",
        "zh": "Sigumchi Namul (Spinach)"
      },
      "description": {
        "en": "Sigumchi Namul (Spinach) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Sigumchi Namul (Spinach) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Sigumchi Namul (Spinach)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Sigumchi%20Namul%20(Spinach)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 132,
      "name": {
        "en": "Ojingeochae Muchim (Spicy Squid)",
        "nl": "Ojingeochae Muchim (Spicy Squid)",
        "zh": "Ojingeochae Muchim (Spicy Squid)"
      },
      "description": {
        "en": "Ojingeochae Muchim (Spicy Squid) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Ojingeochae Muchim (Spicy Squid) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Ojingeochae Muchim (Spicy Squid)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Ojingeochae%20Muchim%20(Spicy%20Squid)",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 133,
      "name": {
        "en": "Musaengchae (Radish Salad)",
        "nl": "Musaengchae (Radish Salad)",
        "zh": "Musaengchae (Radish Salad)"
      },
      "description": {
        "en": "Musaengchae (Radish Salad) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Musaengchae (Radish Salad) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Musaengchae (Radish Salad)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "6.12",
      "image": "https://api.openverse.org/v1/images?q=Musaengchae%20(Radish%20Salad)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 134,
      "name": {
        "en": "Pajeori (Green Onion Salad)",
        "nl": "Pajeori (Green Onion Salad)",
        "zh": "Pajeori (Green Onion Salad)"
      },
      "description": {
        "en": "Pajeori (Green Onion Salad) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Pajeori (Green Onion Salad) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Pajeori (Green Onion Salad)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "6.88",
      "image": "https://api.openverse.org/v1/images?q=Pajeori%20(Green%20Onion%20Salad)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 135,
      "name": {
        "en": "Gyeran Jjim (Steamed Egg)",
        "nl": "Gyeran Jjim (Steamed Egg)",
        "zh": "Gyeran Jjim (Steamed Egg)"
      },
      "description": {
        "en": "Gyeran Jjim (Steamed Egg) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gyeran Jjim (Steamed Egg) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Gyeran Jjim (Steamed Egg)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Gyeran%20Jjim%20(Steamed%20Egg)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "热食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 136,
      "name": {
        "en": "Kimchi Pancake Bites",
        "nl": "Kimchi Pancake Bites",
        "zh": "Kimchi Pancake Bites"
      },
      "description": {
        "en": "Kimchi Pancake Bites prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi Pancake Bites in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Kimchi Pancake Bites，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.89",
      "image": "https://api.openverse.org/v1/images?q=Kimchi%20Pancake%20Bites",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 137,
      "name": {
        "en": "Seaweed Salad",
        "nl": "Seaweed Salad",
        "zh": "Seaweed Salad"
      },
      "description": {
        "en": "Seaweed Salad prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seaweed Salad in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Seaweed Salad，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Seaweed%20Salad",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 138,
      "name": {
        "en": "Pickled Radish",
        "nl": "Pickled Radish",
        "zh": "Pickled Radish"
      },
      "description": {
        "en": "Pickled Radish prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Pickled Radish in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Pickled Radish，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "5.08",
      "image": "https://api.openverse.org/v1/images?q=Pickled%20Radish",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 139,
      "name": {
        "en": "Braised Lotus Root",
        "nl": "Braised Lotus Root",
        "zh": "Braised Lotus Root"
      },
      "description": {
        "en": "Braised Lotus Root prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Braised Lotus Root in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Braised Lotus Root，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "5.93",
      "image": "https://api.openverse.org/v1/images?q=Braised%20Lotus%20Root",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 140,
      "name": {
        "en": "Chapssal Twigim (Rice Cake Fritters)",
        "nl": "Chapssal Twigim (Rice Cake Fritters)",
        "zh": "Chapssal Twigim (Rice Cake Fritters)"
      },
      "description": {
        "en": "Chapssal Twigim (Rice Cake Fritters) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Chapssal Twigim (Rice Cake Fritters) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Chapssal Twigim (Rice Cake Fritters)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Chapssal%20Twigim%20(Rice%20Cake%20Fritters)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 141,
      "name": {
        "en": "Tofu Steak Bites",
        "nl": "Tofu Steak Bites",
        "zh": "Tofu Steak Bites"
      },
      "description": {
        "en": "Tofu Steak Bites prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tofu Steak Bites in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Tofu Steak Bites，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "4.40",
      "image": "https://api.openverse.org/v1/images?q=Tofu%20Steak%20Bites",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 142,
      "name": {
        "en": "Kkakdugi (Radish Kimchi)",
        "nl": "Kkakdugi (Radish Kimchi)",
        "zh": "Kkakdugi (Radish Kimchi)"
      },
      "description": {
        "en": "Kkakdugi (Radish Kimchi) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kkakdugi (Radish Kimchi) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Kkakdugi (Radish Kimchi)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.90",
      "image": "https://api.openverse.org/v1/images?q=Kkakdugi%20(Radish%20Kimchi)",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 143,
      "name": {
        "en": "Gochujang Slaw",
        "nl": "Gochujang Slaw",
        "zh": "Gochujang Slaw"
      },
      "description": {
        "en": "Gochujang Slaw prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gochujang Slaw in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Gochujang Slaw，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Gochujang%20Slaw",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 144,
      "name": {
        "en": "Seasoned Perilla Leaves",
        "nl": "Seasoned Perilla Leaves",
        "zh": "Seasoned Perilla Leaves"
      },
      "description": {
        "en": "Seasoned Perilla Leaves prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seasoned Perilla Leaves in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Seasoned Perilla Leaves，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "6.58",
      "image": "https://api.openverse.org/v1/images?q=Seasoned%20Perilla%20Leaves",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 145,
      "name": {
        "en": "Stir‑fried Fish Cake",
        "nl": "Stir‑fried Fish Cake",
        "zh": "Stir‑fried Fish Cake"
      },
      "description": {
        "en": "Stir‑fried Fish Cake prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Stir‑fried Fish Cake in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Stir‑fried Fish Cake，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.29",
      "image": "https://api.openverse.org/v1/images?q=Stir‑fried%20Fish%20Cake",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 146,
      "name": {
        "en": "Sweet Black Beans",
        "nl": "Sweet Black Beans",
        "zh": "Sweet Black Beans"
      },
      "description": {
        "en": "Sweet Black Beans prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Sweet Black Beans in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Sweet Black Beans，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "3.00",
      "image": "https://api.openverse.org/v1/images?q=Sweet%20Black%20Beans",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 147,
      "name": {
        "en": "Crunchy Kimchi Trio",
        "nl": "Crunchy Kimchi Trio",
        "zh": "Crunchy Kimchi Trio"
      },
      "description": {
        "en": "Crunchy Kimchi Trio prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Crunchy Kimchi Trio in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Crunchy Kimchi Trio，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "5.81",
      "image": "https://api.openverse.org/v1/images?q=Crunchy%20Kimchi%20Trio",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 15,
          "name": {
            "en": "Sharing",
            "nl": "Om te delen",
            "zh": "分享"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "加一份辣味泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        }
      ]
    }
  ]
},
{
  "id": 6,
  "category_name": {
    "en": "Rice & Noodles",
    "nl": "Rijst & Noedels",
    "zh": "饭类与面食"
  },
  "dishes": [
    {
      "id": 106,
      "name": {
        "en": "Bibimbap",
        "nl": "Bibimbap",
        "zh": "Bibimbap"
      },
      "description": {
        "en": "Bibimbap prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Bibimbap in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Bibimbap，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "14.63",
      "image": "https://api.openverse.org/v1/images?q=Bibimbap",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 107,
      "name": {
        "en": "Dolsot Bibimbap (Hot Stone)",
        "nl": "Dolsot Bibimbap (Hot Stone)",
        "zh": "Dolsot Bibimbap (Hot Stone)"
      },
      "description": {
        "en": "Dolsot Bibimbap (Hot Stone) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Dolsot Bibimbap (Hot Stone) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Dolsot Bibimbap (Hot Stone)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "11.79",
      "image": "https://api.openverse.org/v1/images?q=Dolsot%20Bibimbap%20(Hot%20Stone)",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Huisspecialiteit",
            "zh": "招牌"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "热食"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 108,
      "name": {
        "en": "Kimchi Fried Rice",
        "nl": "Kimchi Fried Rice",
        "zh": "Kimchi Fried Rice"
      },
      "description": {
        "en": "Kimchi Fried Rice prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi Fried Rice in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Kimchi Fried Rice，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "10.98",
      "image": "https://api.openverse.org/v1/images?q=Kimchi%20Fried%20Rice",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 109,
      "name": {
        "en": "Beef Fried Rice",
        "nl": "Beef Fried Rice",
        "zh": "Beef Fried Rice"
      },
      "description": {
        "en": "Beef Fried Rice prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Beef Fried Rice in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Beef Fried Rice，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "12.33",
      "image": "https://api.openverse.org/v1/images?q=Beef%20Fried%20Rice",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 110,
      "name": {
        "en": "Seafood Fried Rice",
        "nl": "Seafood Fried Rice",
        "zh": "Seafood Fried Rice"
      },
      "description": {
        "en": "Seafood Fried Rice prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seafood Fried Rice in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Seafood Fried Rice，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "16.83",
      "image": "https://api.openverse.org/v1/images?q=Seafood%20Fried%20Rice",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 111,
      "name": {
        "en": "Jajangmyeon (Black Bean Noodles)",
        "nl": "Jajangmyeon (Black Bean Noodles)",
        "zh": "Jajangmyeon (Black Bean Noodles)"
      },
      "description": {
        "en": "Jajangmyeon (Black Bean Noodles) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Jajangmyeon (Black Bean Noodles) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Jajangmyeon (Black Bean Noodles)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "15.41",
      "image": "https://api.openverse.org/v1/images?q=Jajangmyeon%20(Black%20Bean%20Noodles)",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 112,
      "name": {
        "en": "Jjamppong (Spicy Seafood Noodles)",
        "nl": "Jjamppong (Spicy Seafood Noodles)",
        "zh": "Jjamppong (Spicy Seafood Noodles)"
      },
      "description": {
        "en": "Jjamppong (Spicy Seafood Noodles) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Jjamppong (Spicy Seafood Noodles) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Jjamppong (Spicy Seafood Noodles)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "12.41",
      "image": "https://api.openverse.org/v1/images?q=Jjamppong%20(Spicy%20Seafood%20Noodles)",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 113,
      "name": {
        "en": "Cold Naengmyeon (Mul)",
        "nl": "Cold Naengmyeon (Mul)",
        "zh": "Cold Naengmyeon (Mul)"
      },
      "description": {
        "en": "Cold Naengmyeon (Mul) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Cold Naengmyeon (Mul) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Cold Naengmyeon (Mul)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "12.00",
      "image": "https://api.openverse.org/v1/images?q=Cold%20Naengmyeon%20(Mul)",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 18,
          "name": {
            "en": "Cold",
            "nl": "Koud",
            "zh": "冷食"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Huisspecialiteit",
            "zh": "招牌"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 114,
      "name": {
        "en": "Spicy Bibim Naengmyeon",
        "nl": "Spicy Bibim Naengmyeon",
        "zh": "Spicy Bibim Naengmyeon"
      },
      "description": {
        "en": "Spicy Bibim Naengmyeon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Spicy Bibim Naengmyeon in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Spicy Bibim Naengmyeon，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "9.63",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Bibim%20Naengmyeon",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 18,
          "name": {
            "en": "Cold",
            "nl": "Koud",
            "zh": "冷食"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 115,
      "name": {
        "en": "Rabokki (Ramen + Tteokbokki)",
        "nl": "Rabokki (Ramen + Tteokbokki)",
        "zh": "Rabokki (Ramen + Tteokbokki)"
      },
      "description": {
        "en": "Rabokki (Ramen + Tteokbokki) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Rabokki (Ramen + Tteokbokki) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Rabokki (Ramen + Tteokbokki)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "15.20",
      "image": "https://api.openverse.org/v1/images?q=Rabokki%20(Ramen%20+%20Tteokbokki)",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 116,
      "name": {
        "en": "Bulgogi Udon",
        "nl": "Bulgogi Udon",
        "zh": "Bulgogi Udon"
      },
      "description": {
        "en": "Bulgogi Udon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Bulgogi Udon in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Bulgogi Udon，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "16.76",
      "image": "https://api.openverse.org/v1/images?q=Bulgogi%20Udon",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 117,
      "name": {
        "en": "Chicken Udon",
        "nl": "Chicken Udon",
        "zh": "Chicken Udon"
      },
      "description": {
        "en": "Chicken Udon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Chicken Udon in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Chicken Udon，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "11.19",
      "image": "https://api.openverse.org/v1/images?q=Chicken%20Udon",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 118,
      "name": {
        "en": "Seafood Udon",
        "nl": "Seafood Udon",
        "zh": "Seafood Udon"
      },
      "description": {
        "en": "Seafood Udon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seafood Udon in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Seafood Udon，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "15.01",
      "image": "https://api.openverse.org/v1/images?q=Seafood%20Udon",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 119,
      "name": {
        "en": "Japchae (Glass Noodles)",
        "nl": "Japchae (Glass Noodles)",
        "zh": "Japchae (Glass Noodles)"
      },
      "description": {
        "en": "Japchae (Glass Noodles) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Japchae (Glass Noodles) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Japchae (Glass Noodles)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "13.47",
      "image": "https://api.openverse.org/v1/images?q=Japchae%20(Glass%20Noodles)",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 120,
      "name": {
        "en": "Kimbap (Assorted Rolls)",
        "nl": "Kimbap (Assorted Rolls)",
        "zh": "Kimbap (Assorted Rolls)"
      },
      "description": {
        "en": "Kimbap (Assorted Rolls) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimbap (Assorted Rolls) in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Kimbap (Assorted Rolls)，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "8.02",
      "image": "https://api.openverse.org/v1/images?q=Kimbap%20(Assorted%20Rolls)",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 121,
      "name": {
        "en": "Kimchi Udon",
        "nl": "Kimchi Udon",
        "zh": "Kimchi Udon"
      },
      "description": {
        "en": "Kimchi Udon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi Udon in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Kimchi Udon，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "14.80",
      "image": "https://api.openverse.org/v1/images?q=Kimchi%20Udon",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 122,
      "name": {
        "en": "Curry Udon",
        "nl": "Curry Udon",
        "zh": "Curry Udon"
      },
      "description": {
        "en": "Curry Udon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Curry Udon in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Curry Udon，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "13.22",
      "image": "https://api.openverse.org/v1/images?q=Curry%20Udon",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedels",
            "zh": "面条"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 123,
      "name": {
        "en": "Tuna Kimbap",
        "nl": "Tuna Kimbap",
        "zh": "Tuna Kimbap"
      },
      "description": {
        "en": "Tuna Kimbap prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tuna Kimbap in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Tuna Kimbap，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "13.43",
      "image": "https://api.openverse.org/v1/images?q=Tuna%20Kimbap",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 124,
      "name": {
        "en": "Bulgogi Kimbap",
        "nl": "Bulgogi Kimbap",
        "zh": "Bulgogi Kimbap"
      },
      "description": {
        "en": "Bulgogi Kimbap prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Bulgogi Kimbap in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Bulgogi Kimbap，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "11.94",
      "image": "https://api.openverse.org/v1/images?q=Bulgogi%20Kimbap",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 2,
          "name": {
            "en": "Beef",
            "nl": "Rundvlees",
            "zh": "牛肉"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 125,
      "name": {
        "en": "Vegetable Kimbap",
        "nl": "Vegetable Kimbap",
        "zh": "Vegetable Kimbap"
      },
      "description": {
        "en": "Vegetable Kimbap prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Vegetable Kimbap in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Vegetable Kimbap，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "6.50",
      "image": "https://api.openverse.org/v1/images?q=Vegetable%20Kimbap",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 9,
          "name": {
            "en": "Vegan",
            "nl": "Veganistisch",
            "zh": "纯素"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 126,
      "name": {
        "en": "Cheese Kimchi Fried Rice",
        "nl": "Cheese Kimchi Fried Rice",
        "zh": "Cheese Kimchi Fried Rice"
      },
      "description": {
        "en": "Cheese Kimchi Fried Rice prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Cheese Kimchi Fried Rice in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "Cheese Kimchi Fried Rice，韩式风味，搭配本店腌制酱汁和经典配菜。现点现做，适合分享。"
      },
      "price": "10.89",
      "image": "https://api.openverse.org/v1/images?q=Cheese%20Kimchi%20Fried%20Rice",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijst",
            "zh": "米饭"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣味"
          }
        }
      ],
      "options": [
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas apart geserveerd.",
            "zh": "旁边配一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kom gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 6,
          "name": {
            "en": "Extra Egg",
            "nl": "Extra ei",
            "zh": "加鸡蛋"
          },
          "description": {
            "en": "Fried egg on top.",
            "nl": "Spiegelei bovenop.",
            "zh": "上面加一颗煎蛋。"
          },
          "price": "1.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "辣度再提升一点。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "少辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Verlaag het pittigheidsniveau.",
            "zh": "降低辣度。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    }
  ]
},
{
  "id": 8,
  "category_name": {
    "en": "Street Food & Snacks",
    "nl": "Streetfood & Snacks",
    "zh": "街头小吃与点心"
  },
  "dishes": [
    {
      "id": 148,
      "name": {
        "en": "Tteokbokki",
        "nl": "Tteokbokki",
        "zh": "Tteokbokki"
      },
      "description": {
        "en": "Tteokbokki prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tteokbokki bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Tteokbokki，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "10.74",
      "image": "https://api.openverse.org/v1/images?q=Tteokbokki",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 149,
      "name": {
        "en": "Cheese Tteokbokki",
        "nl": "Cheese Tteokbokki",
        "zh": "Cheese Tteokbokki"
      },
      "description": {
        "en": "Cheese Tteokbokki prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Cheese Tteokbokki bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Cheese Tteokbokki，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.51",
      "image": "https://api.openverse.org/v1/images?q=Cheese%20Tteokbokki",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 150,
      "name": {
        "en": "Corn Cheese",
        "nl": "Corn Cheese",
        "zh": "Corn Cheese"
      },
      "description": {
        "en": "Corn Cheese prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Corn Cheese bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Corn Cheese，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "5.99",
      "image": "https://api.openverse.org/v1/images?q=Corn%20Cheese",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 151,
      "name": {
        "en": "Hotteok (Sweet Pancake)",
        "nl": "Hotteok (Sweet Pancake)",
        "zh": "Hotteok (Sweet Pancake)"
      },
      "description": {
        "en": "Hotteok (Sweet Pancake) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Hotteok (Sweet Pancake) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Hotteok (Sweet Pancake)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "8.96",
      "image": "https://api.openverse.org/v1/images?q=Hotteok%20(Sweet%20Pancake)",
      "tags": [
        {
          "id": 17,
          "name": {
            "en": "Sweet",
            "nl": "Zoet",
            "zh": "甜"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 152,
      "name": {
        "en": "Korean Fried Chicken (Soy Garlic)",
        "nl": "Korean Fried Chicken (Soy Garlic)",
        "zh": "Korean Fried Chicken (Soy Garlic)"
      },
      "description": {
        "en": "Korean Fried Chicken (Soy Garlic) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Korean Fried Chicken (Soy Garlic) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Korean Fried Chicken (Soy Garlic)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "12.70",
      "image": "https://api.openverse.org/v1/images?q=Korean%20Fried%20Chicken%20(Soy%20Garlic)",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 153,
      "name": {
        "en": "Korean Fried Chicken (Spicy Yangnyeom)",
        "nl": "Korean Fried Chicken (Spicy Yangnyeom)",
        "zh": "Korean Fried Chicken (Spicy Yangnyeom)"
      },
      "description": {
        "en": "Korean Fried Chicken (Spicy Yangnyeom) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Korean Fried Chicken (Spicy Yangnyeom) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Korean Fried Chicken (Spicy Yangnyeom)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "11.40",
      "image": "https://api.openverse.org/v1/images?q=Korean%20Fried%20Chicken%20(Spicy%20Yangnyeom)",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 154,
      "name": {
        "en": "Seafood Pancake",
        "nl": "Seafood Pancake",
        "zh": "Seafood Pancake"
      },
      "description": {
        "en": "Seafood Pancake prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seafood Pancake bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Seafood Pancake，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "10.64",
      "image": "https://api.openverse.org/v1/images?q=Seafood%20Pancake",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 155,
      "name": {
        "en": "Kimchi Pancake",
        "nl": "Kimchi Pancake",
        "zh": "Kimchi Pancake"
      },
      "description": {
        "en": "Kimchi Pancake prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi Pancake bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Kimchi Pancake，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "6.77",
      "image": "https://api.openverse.org/v1/images?q=Kimchi%20Pancake",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 156,
      "name": {
        "en": "Mandu (Fried Dumplings)",
        "nl": "Mandu (Fried Dumplings)",
        "zh": "Mandu (Fried Dumplings)"
      },
      "description": {
        "en": "Mandu (Fried Dumplings) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Mandu (Fried Dumplings) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Mandu (Fried Dumplings)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "5.60",
      "image": "https://api.openverse.org/v1/images?q=Mandu%20(Fried%20Dumplings)",
      "tags": [
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 157,
      "name": {
        "en": "Steamed Mandu",
        "nl": "Steamed Mandu",
        "zh": "Steamed Mandu"
      },
      "description": {
        "en": "Steamed Mandu prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Steamed Mandu bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Steamed Mandu，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "6.30",
      "image": "https://api.openverse.org/v1/images?q=Steamed%20Mandu",
      "tags": [
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 158,
      "name": {
        "en": "Gimmari (Seaweed Rolls)",
        "nl": "Gimmari (Seaweed Rolls)",
        "zh": "Gimmari (Seaweed Rolls)"
      },
      "description": {
        "en": "Gimmari (Seaweed Rolls) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gimmari (Seaweed Rolls) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Gimmari (Seaweed Rolls)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.61",
      "image": "https://api.openverse.org/v1/images?q=Gimmari%20(Seaweed%20Rolls)",
      "tags": [
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 159,
      "name": {
        "en": "Korean Corn Dog",
        "nl": "Korean Corn Dog",
        "zh": "Korean Corn Dog"
      },
      "description": {
        "en": "Korean Corn Dog prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Korean Corn Dog bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Korean Corn Dog，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "4.34",
      "image": "https://api.openverse.org/v1/images?q=Korean%20Corn%20Dog",
      "tags": [
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 160,
      "name": {
        "en": "Egg Bread (Gyeranppang)",
        "nl": "Egg Bread (Gyeranppang)",
        "zh": "Egg Bread (Gyeranppang)"
      },
      "description": {
        "en": "Egg Bread (Gyeranppang) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Egg Bread (Gyeranppang) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Egg Bread (Gyeranppang)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "3.26",
      "image": "https://api.openverse.org/v1/images?q=Egg%20Bread%20(Gyeranppang)",
      "tags": [
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 161,
      "name": {
        "en": "Soondae (Blood Sausage)",
        "nl": "Soondae (Blood Sausage)",
        "zh": "Soondae (Blood Sausage)"
      },
      "description": {
        "en": "Soondae (Blood Sausage) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Soondae (Blood Sausage) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Soondae (Blood Sausage)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "4.77",
      "image": "https://api.openverse.org/v1/images?q=Soondae%20(Blood%20Sausage)",
      "tags": [
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 162,
      "name": {
        "en": "Eomuk Tang (Fish Cake Soup Cup)",
        "nl": "Eomuk Tang (Fish Cake Soup Cup)",
        "zh": "Eomuk Tang (Fish Cake Soup Cup)"
      },
      "description": {
        "en": "Eomuk Tang (Fish Cake Soup Cup) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Eomuk Tang (Fish Cake Soup Cup) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Eomuk Tang (Fish Cake Soup Cup)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.85",
      "image": "https://api.openverse.org/v1/images?q=Eomuk%20Tang%20(Fish%20Cake%20Soup%20Cup)",
      "tags": [
        {
          "id": 4,
          "name": {
            "en": "Seafood",
            "nl": "Zeevruchten",
            "zh": "海鲜"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤品"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 163,
      "name": {
        "en": "Mayak Kimbap",
        "nl": "Mayak Kimbap",
        "zh": "Mayak Kimbap"
      },
      "description": {
        "en": "Mayak Kimbap prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Mayak Kimbap bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Mayak Kimbap，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "4.73",
      "image": "https://api.openverse.org/v1/images?q=Mayak%20Kimbap",
      "tags": [
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijstgerechten",
            "zh": "米饭"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 164,
      "name": {
        "en": "Rabokki Cup",
        "nl": "Rabokki Cup",
        "zh": "Rabokki Cup"
      },
      "description": {
        "en": "Rabokki Cup prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Rabokki Cup bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Rabokki Cup，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "11.14",
      "image": "https://api.openverse.org/v1/images?q=Rabokki%20Cup",
      "tags": [
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedelgerechten",
            "zh": "面条"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 165,
      "name": {
        "en": "Kimchi Fries",
        "nl": "Kimchi Fries",
        "zh": "Kimchi Fries"
      },
      "description": {
        "en": "Kimchi Fries prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi Fries bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Kimchi Fries，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "11.18",
      "image": "https://api.openverse.org/v1/images?q=Kimchi%20Fries",
      "tags": [
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 166,
      "name": {
        "en": "Skewered Rice Cakes",
        "nl": "Skewered Rice Cakes",
        "zh": "Skewered Rice Cakes"
      },
      "description": {
        "en": "Skewered Rice Cakes prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Skewered Rice Cakes bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Skewered Rice Cakes，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "3.27",
      "image": "https://api.openverse.org/v1/images?q=Skewered%20Rice%20Cakes",
      "tags": [
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        },
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 167,
      "name": {
        "en": "Chicken Skewers",
        "nl": "Chicken Skewers",
        "zh": "Chicken Skewers"
      },
      "description": {
        "en": "Chicken Skewers prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Chicken Skewers bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Chicken Skewers，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "5.30",
      "image": "https://api.openverse.org/v1/images?q=Chicken%20Skewers",
      "tags": [
        {
          "id": 3,
          "name": {
            "en": "Chicken",
            "nl": "Kip",
            "zh": "鸡肉"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    },
    {
      "id": 168,
      "name": {
        "en": "Sweet Potato Sticks",
        "nl": "Sweet Potato Sticks",
        "zh": "Sweet Potato Sticks"
      },
      "description": {
        "en": "Sweet Potato Sticks prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Sweet Potato Sticks bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Sweet Potato Sticks，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.25",
      "image": "https://api.openverse.org/v1/images?q=Sweet%20Potato%20Sticks",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 4,
          "name": {
            "en": "Add Cheese",
            "nl": "Extra kaas",
            "zh": "加芝士"
          },
          "description": {
            "en": "Melted cheese on the side.",
            "nl": "Gesmolten kaas erbij geserveerd.",
            "zh": "旁附一份融化芝士。"
          },
          "price": "1.20"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        }
      ]
    }
  ]
},
{
  "id": 9,
  "category_name": {
    "en": "Vegetarian & Tofu",
    "nl": "Vegetarisch & Tofu",
    "zh": "素食与豆腐"
  },
  "dishes": [
    {
      "id": 169,
      "name": {
        "en": "Tofu Steak",
        "nl": "Tofu Steak",
        "zh": "Tofu Steak"
      },
      "description": {
        "en": "Tofu Steak prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tofu Steak bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Tofu Steak，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "8.71",
      "image": "https://api.openverse.org/v1/images?q=Tofu%20Steak",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grillgerechten",
            "zh": "烤制"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 170,
      "name": {
        "en": "Spicy Tofu Stir‑Fry",
        "nl": "Spicy Tofu Stir‑Fry",
        "zh": "Spicy Tofu Stir‑Fry"
      },
      "description": {
        "en": "Spicy Tofu Stir‑Fry prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Spicy Tofu Stir‑Fry bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Spicy Tofu Stir‑Fry，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.86",
      "image": "https://api.openverse.org/v1/images?q=Spicy%20Tofu%20Stir‑Fry",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 171,
      "name": {
        "en": "Mushroom Bulgogi",
        "nl": "Mushroom Bulgogi",
        "zh": "Mushroom Bulgogi"
      },
      "description": {
        "en": "Mushroom Bulgogi prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Mushroom Bulgogi bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Mushroom Bulgogi，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "15.88",
      "image": "https://api.openverse.org/v1/images?q=Mushroom%20Bulgogi",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grillgerechten",
            "zh": "烤制"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 172,
      "name": {
        "en": "Vegetable Bibimbap",
        "nl": "Vegetable Bibimbap",
        "zh": "Vegetable Bibimbap"
      },
      "description": {
        "en": "Vegetable Bibimbap prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Vegetable Bibimbap bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Vegetable Bibimbap，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "12.57",
      "image": "https://api.openverse.org/v1/images?q=Vegetable%20Bibimbap",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijstgerechten",
            "zh": "米饭"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 173,
      "name": {
        "en": "Tofu Kimchi (Mild)",
        "nl": "Tofu Kimchi (Mild)",
        "zh": "Tofu Kimchi (Mild)"
      },
      "description": {
        "en": "Tofu Kimchi (Mild) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tofu Kimchi (Mild) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Tofu Kimchi (Mild)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "10.28",
      "image": "https://api.openverse.org/v1/images?q=Tofu%20Kimchi%20(Mild)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 174,
      "name": {
        "en": "Braised Tofu",
        "nl": "Braised Tofu",
        "zh": "Braised Tofu"
      },
      "description": {
        "en": "Braised Tofu prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Braised Tofu bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Braised Tofu，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "13.18",
      "image": "https://api.openverse.org/v1/images?q=Braised%20Tofu",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "热"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 175,
      "name": {
        "en": "Stir‑fried Glass Noodles",
        "nl": "Stir‑fried Glass Noodles",
        "zh": "Stir‑fried Glass Noodles"
      },
      "description": {
        "en": "Stir‑fried Glass Noodles prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Stir‑fried Glass Noodles bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Stir‑fried Glass Noodles，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "13.66",
      "image": "https://api.openverse.org/v1/images?q=Stir‑fried%20Glass%20Noodles",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedelgerechten",
            "zh": "面条"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 176,
      "name": {
        "en": "Crispy Tofu Bites",
        "nl": "Crispy Tofu Bites",
        "zh": "Crispy Tofu Bites"
      },
      "description": {
        "en": "Crispy Tofu Bites prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Crispy Tofu Bites bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Crispy Tofu Bites，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.32",
      "image": "https://api.openverse.org/v1/images?q=Crispy%20Tofu%20Bites",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 177,
      "name": {
        "en": "Gochujang Eggplant",
        "nl": "Gochujang Eggplant",
        "zh": "Gochujang Eggplant"
      },
      "description": {
        "en": "Gochujang Eggplant prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Gochujang Eggplant bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Gochujang Eggplant，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.78",
      "image": "https://api.openverse.org/v1/images?q=Gochujang%20Eggplant",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 5,
          "name": {
            "en": "Spicy",
            "nl": "Pittig",
            "zh": "辣"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 178,
      "name": {
        "en": "Miso Glazed Mushrooms",
        "nl": "Miso Glazed Mushrooms",
        "zh": "Miso Glazed Mushrooms"
      },
      "description": {
        "en": "Miso Glazed Mushrooms prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Miso Glazed Mushrooms bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Miso Glazed Mushrooms，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "10.95",
      "image": "https://api.openverse.org/v1/images?q=Miso%20Glazed%20Mushrooms",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grillgerechten",
            "zh": "烤制"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 179,
      "name": {
        "en": "Spinach & Tofu Soup",
        "nl": "Spinach & Tofu Soup",
        "zh": "Spinach & Tofu Soup"
      },
      "description": {
        "en": "Spinach & Tofu Soup prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Spinach & Tofu Soup bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Spinach & Tofu Soup，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "9.29",
      "image": "https://api.openverse.org/v1/images?q=Spinach%20&%20Tofu%20Soup",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤品"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 180,
      "name": {
        "en": "Tofu Lettuce Wraps",
        "nl": "Tofu Lettuce Wraps",
        "zh": "Tofu Lettuce Wraps"
      },
      "description": {
        "en": "Tofu Lettuce Wraps prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tofu Lettuce Wraps bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Tofu Lettuce Wraps，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "9.94",
      "image": "https://api.openverse.org/v1/images?q=Tofu%20Lettuce%20Wraps",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Specialiteit van het huis",
            "zh": "招牌"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 181,
      "name": {
        "en": "Kimchi Fried Rice (Egg‑free)",
        "nl": "Kimchi Fried Rice (Egg‑free)",
        "zh": "Kimchi Fried Rice (Egg‑free)"
      },
      "description": {
        "en": "Kimchi Fried Rice (Egg‑free) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kimchi Fried Rice (Egg‑free) bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Kimchi Fried Rice (Egg‑free)，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "13.13",
      "image": "https://api.openverse.org/v1/images?q=Kimchi%20Fried%20Rice%20(Egg‑free)",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 11,
          "name": {
            "en": "Rice",
            "nl": "Rijstgerechten",
            "zh": "米饭"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 182,
      "name": {
        "en": "Kale & Sesame Salad",
        "nl": "Kale & Sesame Salad",
        "zh": "Kale & Sesame Salad"
      },
      "description": {
        "en": "Kale & Sesame Salad prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Kale & Sesame Salad bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Kale & Sesame Salad，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "11.09",
      "image": "https://api.openverse.org/v1/images?q=Kale%20&%20Sesame%20Salad",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 183,
      "name": {
        "en": "Korean Potato Noodles",
        "nl": "Korean Potato Noodles",
        "zh": "Korean Potato Noodles"
      },
      "description": {
        "en": "Korean Potato Noodles prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Korean Potato Noodles bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Korean Potato Noodles，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "14.77",
      "image": "https://api.openverse.org/v1/images?q=Korean%20Potato%20Noodles",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedelgerechten",
            "zh": "面条"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 184,
      "name": {
        "en": "Tofu Hot Pot",
        "nl": "Tofu Hot Pot",
        "zh": "Tofu Hot Pot"
      },
      "description": {
        "en": "Tofu Hot Pot prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tofu Hot Pot bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Tofu Hot Pot，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "9.59",
      "image": "https://api.openverse.org/v1/images?q=Tofu%20Hot%20Pot",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 13,
          "name": {
            "en": "Soup",
            "nl": "Soep",
            "zh": "汤品"
          }
        },
        {
          "id": 19,
          "name": {
            "en": "Warm",
            "nl": "Warm",
            "zh": "热"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 185,
      "name": {
        "en": "Seasonal Veggie Grill",
        "nl": "Seasonal Veggie Grill",
        "zh": "Seasonal Veggie Grill"
      },
      "description": {
        "en": "Seasonal Veggie Grill prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Seasonal Veggie Grill bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Seasonal Veggie Grill，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "11.52",
      "image": "https://api.openverse.org/v1/images?q=Seasonal%20Veggie%20Grill",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 14,
          "name": {
            "en": "Grill",
            "nl": "Grillgerechten",
            "zh": "烤制"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 186,
      "name": {
        "en": "Tofu Bibim Naengmyeon",
        "nl": "Tofu Bibim Naengmyeon",
        "zh": "Tofu Bibim Naengmyeon"
      },
      "description": {
        "en": "Tofu Bibim Naengmyeon prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tofu Bibim Naengmyeon bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Tofu Bibim Naengmyeon，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "10.41",
      "image": "https://api.openverse.org/v1/images?q=Tofu%20Bibim%20Naengmyeon",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedelgerechten",
            "zh": "面条"
          }
        },
        {
          "id": 18,
          "name": {
            "en": "Cold",
            "nl": "Koud",
            "zh": "冷"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 187,
      "name": {
        "en": "Broccoli & Garlic Stir‑fry",
        "nl": "Broccoli & Garlic Stir‑fry",
        "zh": "Broccoli & Garlic Stir‑fry"
      },
      "description": {
        "en": "Broccoli & Garlic Stir‑fry prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Broccoli & Garlic Stir‑fry bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Broccoli & Garlic Stir‑fry，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "12.69",
      "image": "https://api.openverse.org/v1/images?q=Broccoli%20&%20Garlic%20Stir‑fry",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 188,
      "name": {
        "en": "Tofu Japchae",
        "nl": "Tofu Japchae",
        "zh": "Tofu Japchae"
      },
      "description": {
        "en": "Tofu Japchae prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Tofu Japchae bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Tofu Japchae，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "9.89",
      "image": "https://api.openverse.org/v1/images?q=Tofu%20Japchae",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 12,
          "name": {
            "en": "Noodles",
            "nl": "Noedelgerechten",
            "zh": "面条"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    },
    {
      "id": 189,
      "name": {
        "en": "Cabbage Pancake",
        "nl": "Cabbage Pancake",
        "zh": "Cabbage Pancake"
      },
      "description": {
        "en": "Cabbage Pancake prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Cabbage Pancake bereid in Koreaanse stijl met huismarinades en klassieke garnituren. Vers gegrild op bestelling en perfect om te delen.",
        "zh": "Cabbage Pancake，采用韩国风味腌制，搭配经典配菜，现点现烤，非常适合分享。"
      },
      "price": "7.12",
      "image": "https://api.openverse.org/v1/images?q=Cabbage%20Pancake",
      "tags": [
        {
          "id": 8,
          "name": {
            "en": "Vegetarian",
            "nl": "Vegetarisch",
            "zh": "素食"
          }
        },
        {
          "id": 20,
          "name": {
            "en": "Street Food",
            "nl": "Streetfood",
            "zh": "街头小吃"
          }
        }
      ],
      "options": [
        {
          "id": 3,
          "name": {
            "en": "Extra Kimchi",
            "nl": "Extra kimchi",
            "zh": "加泡菜"
          },
          "description": {
            "en": "Add a portion of spicy kimchi.",
            "nl": "Een extra portie pittige kimchi.",
            "zh": "再来一份辣泡菜。"
          },
          "price": "2.50"
        },
        {
          "id": 5,
          "name": {
            "en": "Extra Rice",
            "nl": "Extra rijst",
            "zh": "加米饭"
          },
          "description": {
            "en": "A bowl of steamed rice.",
            "nl": "Een kommetje gestoomde rijst.",
            "zh": "一碗蒸米饭。"
          },
          "price": "2.00"
        },
        {
          "id": 7,
          "name": {
            "en": "No Sesame",
            "nl": "Zonder sesam",
            "zh": "不加芝麻"
          },
          "description": {
            "en": "Prepared without sesame.",
            "nl": "Bereid zonder sesam.",
            "zh": "制作时不使用芝麻。"
          },
          "price": "0.00"
        },
        {
          "id": 8,
          "name": {
            "en": "Spicy+",
            "nl": "Extra pittig",
            "zh": "加辣"
          },
          "description": {
            "en": "Make it a notch spicier.",
            "nl": "Maak het een tikje pittiger.",
            "zh": "让辣度再提升一档。"
          },
          "price": "0.50"
        },
        {
          "id": 9,
          "name": {
            "en": "Mild",
            "nl": "Mild",
            "zh": "微辣/不辣"
          },
          "description": {
            "en": "Lower the heat level.",
            "nl": "Lager pittigheidsniveau.",
            "zh": "降低辣度，更加温和。"
          },
          "price": "0.00"
        },
        {
          "id": 10,
          "name": {
            "en": "GF Soy Sauce",
            "nl": "Glutenvrije sojasaus",
            "zh": "无麸质酱油"
          },
          "description": {
            "en": "Gluten‑free soy sauce.",
            "nl": "Glutenvrije sojasaus.",
            "zh": "更换为无麸质酱油。"
          },
          "price": "0.50"
        }
      ]
    }
  ]
},
{
  "id": 10,
  "category_name": {
    "en": "Desserts & Drinks",
    "nl": "Desserts & Dranken",
    "zh": "甜点与饮品"
  },
  "dishes": [
    {
      "id": 190,
      "name": {
        "en": "Bingsu (Red Bean)",
        "nl": "Bingsu (Rode Bonen)",
        "zh": "红豆刨冰"
      },
      "description": {
        "en": "Bingsu (Red Bean) prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Bingsu (Rode Bonen) bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "红豆刨冰采用韩国风味腌制，配以自制酱料和经典配菜，现点现做，适合分享。"
      },
      "price": "8.09",
      "image": "https://api.openverse.org/v1/images?q=Bingsu%20(Red%20Bean)",
      "tags": [
        {
          "id": 17,
          "name": {
            "en": "Sweet",
            "nl": "Zoet",
            "zh": "甜味"
          }
        },
        {
          "id": 18,
          "name": {
            "en": "Cold",
            "nl": "Koud",
            "zh": "冷"
          }
        },
        {
          "id": 6,
          "name": {
            "en": "Signature",
            "nl": "Signature",
            "zh": "招牌"
          }
        }
      ],
      "options": []
    },
    {
      "id": 191,
      "name": {
        "en": "Mango Bingsu",
        "nl": "Mango Bingsu",
        "zh": "芒果刨冰"
      },
      "description": {
        "en": "Mango Bingsu prepared in Korean style with house marinades and classic garnishes. Grilled to order and perfect for sharing.",
        "nl": "Mango Bingsu bereid in Koreaanse stijl met huisgemaakte marinades en klassieke garnituren. Vers bereid en ideaal om te delen.",
        "zh": "芒果刨冰采用韩国风味腌制，配以自制酱料和经典配菜，现点现做，适合分享。"
      },
      "price": "8.58",
      "image": "https://api.openverse.org/v1/images?q=Mango%20Bingsu",
      "tags": [
        {
          "id": 17,
          "name": {
            "en": "Sweet",
            "nl": "Zoet",
            "zh": "甜味"
          }
        },
        {
          "id": 18,
          "name": {
            "en": "Cold",
            "nl": "Koud",
            "zh": "冷"
          }
        }
      ],
      "options": []
    }
  ]
}
  ];
}
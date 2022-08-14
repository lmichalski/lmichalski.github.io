import csv
import json
from typing import List
from unicodedata import category



def create_category(name: str, items: List[object]):
    return {
        "name": name,
        "items": items
    }

def create_item(name: str, price: int, addons: List[object], image: str):
    two_digit_price = format(price, ".2f")

    return {
        "name": name,
        "basePrice": two_digit_price,
        "addOns": addons,
        "image": image
    }

def create_add_on(name: str, price: int, image: str):
    two_digit_price = format(price, ".2f")
    
    return {
        "name": name,
        "price": two_digit_price,
        "image": image
    }


with open('dice-info.csv', newline='') as csvfile:
    csv_reader = csv.DictReader(csvfile)

    category_list = []
    d20_list = []
    extras_list = []
    eight_piece_list = []

    for row in csv_reader:
        item_addon = {}

        current_row_category = row['Category']

        if row['AddOns']:
            item_addon = create_add_on(row['Name'], 25, row["AddOnImage"])

        row_item = create_item(row['Name'], int(row["Price"]), [item_addon], row["Image"])

        if current_row_category == "Set":
            eight_piece_list.append(row_item)
        
        if current_row_category == "D20":
            d20_list.append(row_item)
        
        if current_row_category == "Extras":
            extras_list.append(row_item)
    
    category_list = [
        create_category("8 Piece Sets",eight_piece_list),
        create_category("D20", d20_list),
        create_category("Extras", extras_list)
        ]

    with open("out.json", 'w', encoding = 'utf-8') as json_file_handler:
        json_file_handler.write(json.dumps(category_list, indent = 4)) 
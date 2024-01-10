# sql.py

import os
import django
from datetime import datetime  # Import datetime module

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myshopown.settings')  # Replace with your actual project name

# Configure Django settings
django.setup()

# Continue with the rest of your script
from django.db import connection

def insert_product(name, slug, description, price, available, category_id, image):
    with connection.cursor() as cursor:
        # Define the SQL query for inserting a new product
        sql_query = """
        INSERT INTO shop_product (name, slug, description, price, available, category_id, image, created, updated)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
        """

        # Get the current date and time
        current_datetime = datetime.now()

        # Execute the SQL query with the provided parameters
        cursor.execute(sql_query, [name, slug, description, price, available, category_id, image, current_datetime, current_datetime])

if __name__ == "__main__":
    # Add your product details here
    product_data = {
        'name': 'Refreshing Green Tea',
        'slug': 'refreshing-green-tea',
        'description': 'Best Refreshing green tea',
        'price': 3.5,
        'available': 1,
        'category_id': 1,
        'image': 'shop/static/img/boston.png',  # Replace with the actual image path or URL
    }

    # Insert the product into the database
    insert_product(**product_data)

    print("Product inserted successfully.")

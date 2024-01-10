# commit_changes.py

import os
import django

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myshopown.settings')  # Replace with your actual project name

# Configure Django settings
django.setup()

# Continue with the rest of your script
from django.db import connection

def commit_changes():
    # Commit the transaction to save the changes
    connection.commit()

if __name__ == "__main__":
    # Call the function to commit changes
    commit_changes()

    print("Changes committed successfully.")

## Setup mock data
```bash
uv run python .\manage.py makemigrations restaurants
uv run python .\manage.py migrate
uv run python .\manage.py populate_db
uv run python .\manage.py runserver
```
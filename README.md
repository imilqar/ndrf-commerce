# Next.js Django REST Framework E-Commerce Application


|   |   |
|---|---|
| ![admin-categories](https://github.com/imilqar/ndrf-commerce/assets/103822896/766a179d-3223-4a14-a35f-a19bb0bfdc88) | ![admin-products](https://github.com/imilqar/ndrf-commerce/assets/103822896/4f598bee-48e0-4979-b33e-4b23776ad42d) |
| **Admin Categories** | **Admin Products** |
| ![index](https://github.com/imilqar/ndrf-commerce/assets/103822896/5d5f4a10-35a1-4a1c-b688-d4cd5cdfc3c3) | ![shop](https://github.com/imilqar/ndrf-commerce/assets/103822896/fd6da9dd-f5e2-4d2c-9797-bec9f8c61f48) |
| **Index** | **Shop** |
| ![product](https://github.com/imilqar/ndrf-commerce/assets/103822896/4bf594c9-4701-4848-84fc-b5bbe2fe6449)  
| **Product details** |

## Activate Virtual Environment (venv)

1. Open your terminal and navigate to the project server directory.
2. Activate the virtual environment:
    - For Windows:
        ```
        venv\Scripts\activate
        ```
    - For Linux or MacOS:
        ```
        source venv/bin/activate
        ```

## Installing Required Dependencies

1. Open a terminal with the virtual environment activated.
2. Install the dependencies listed in `requirements.txt`:
    ```
    pip install -r requirements.txt
    ```

## Running the Project

1. Open a terminal with the virtual environment activated.
2. Make migrations for your Django models:
    ```
    python manage.py makemigrations
    ```
3. Apply migrations to your database:
    ```
    python manage.py migrate
    ```
4. Create a superuser for the Django admin:
    ```
    python manage.py createsuperuser
    ```
5. Start the Django server with the following command:
    ```
    python manage.py runserver
    ```

## Contributions

- Feel free to contribute to the project or report any issues by opening an issue or sending a pull request.

## License

This project is licensed under the [MIT License](LICENSE). For more information, read the license file.

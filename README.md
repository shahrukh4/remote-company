# Installation Steps

- Clone the repository
    
    ```
    git clone https://github.com/shahrukh4/remote-company.git
    ```


- Open terminal and move to directory
    ```
    cd remote-company
    ```


- Install dependancies

    ```
    composer install
    ```

- Install node packages
    ```
    npm install
    ```


- Run following artisan commands
    ```
    php artisan key:generate
    php artisan storage:link
    php artisan migrate
    php artisan db:seed
    ```


- Open terminal and run these 2 commands in separate tabs
    ```
    php artisan serve
    npm run dev
    ```


## Author

All code done by **Shahrukh Anwar**

    
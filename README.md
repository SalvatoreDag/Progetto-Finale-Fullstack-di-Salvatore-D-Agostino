# Final Fullstack Project by Salvatore D'Agostino

This project is a fullstack application for personal expense management, developed with ReactJS for the frontend and Laravel for the backend. The app allows users to track their expenses month by month, with functionalities to add, modify, search, delete expenses, and display them on a chart.

## Technologies Used

### Frontend
- ReactJS: JavaScript library for building user interfaces.
- React Router: Library for handling routes in the application.
- Framer: Library for animations.
- Lottie: Library for JSON animations.
- Tailwind CSS: CSS framework for styling.
- React Chart JS 2: Library for visualizing data in charts.
- React Query: Library for fetching and caching data.

### Backend
- Laravel: PHP framework for web applications.
- MySQL: Relational database management system.
- Laravel Sanctum: Simple authentication system for SPAs, mobile applications, and simple, token-based APIs.

## Project Features

- **Add Expenses:** Allows users to add new expenses with title, amount, description, and date.
- **Edit Expenses:** Allows users to modify existing expenses.
- **Search Expenses:** Search functionality to find specific expenses.
- **Delete Expenses:** Allows users to delete unnecessary expenses.
- **Graphical Visualization:** Displays expenses on a chart for visual analysis.

## Project Installation

### Prerequisites

- Node.js
- npm
- Composer
- MySQL

### Installation Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SalvatoreDag/Progetto-Finale-Fullstack-di-Salvatore-D-Agostino.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Progetto-Finale-Fullstack-di-Salvatore-D-Agostino
    ```

### Frontend Configuration

1. **Navigate to the client directory:**

    ```bash
    cd client
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend application:**

    ```bash
    npm start
    ```

### Backend Configuration

1. **Navigate to the server directory:**

    ```bash
    cd ../server
    ```

2. **Install the dependencies:**

    ```bash
    composer install
    ```

3. **Publish Sanctum configuration:**

    ```bash
    php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"
    ```

4. **Run the Sanctum migrations:**

    ```bash
    php artisan migrate
    ```

5. **Configure the environment variables:**

    ```bash
    cp .env.example .env
    ```

6. **Edit the `.env` file with your MySQL database credentials.**

7. **Generate the Laravel application key:**

    ```bash
    php artisan key:generate
    ```

8. **Run the migrations to create the database tables:**

    ```bash
    php artisan migrate
    ```

9. **Start the Laravel server:**

    ```bash
    php artisan serve
    ```

### Running the Project

1. Ensure the Laravel server is running.
2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the frontend of the application.

## Contributions

If you wish to contribute to the project, please open a pull request or report an issue in the Issues section of the repository.



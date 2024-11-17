# React Car Search Application

This project is a car management and search system built using React. It allows users to authenticate, search for cars, and view detailed information about individual vehicles. The application makes use of custom React hooks and routing for handling navigation, state management, and fetching data.

## Features

- **Authentication**: Secure user login and session management.
- **Search Functionality**: Customizable car search with filters and parameters.
- **Sidebar Navigation**: Expandable and collapsible sidebar for easy navigation.
- **Single Car Page**: Detailed view of an individual car's data.
- **Custom Hooks**: Modular code structure using React hooks for better code reusability and state handling.



## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-repo/car-search-app.git
   cd car-search-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

## Key Components

- **`App.js`**: The main entry point of the application that handles routing and state management for the sidebar.
- **`UseGetCarById`**: Custom hook to fetch a car's data based on its ID.
- **`UseLogin`**: Custom hook to manage user authentication and login state.
- **`UseSearchCar`** and **`UseSearchCarByFilter`**: Hooks to handle car search and filtering based on query parameters.

## Routing

The project uses `react-router-dom` for routing. Main routes include:

- `/`: Login page
- `/search`: Search page with dynamic search parameters
- `/search?carId={id}`: Page for viewing a specific car

## Styling

- Tailwind CSS is used for styling components.
- Conditional rendering is used to show/hide elements such as the sidebar and loader.

## State Management

State management is handled using React hooks and context.

- **`SidebarNavigationsContent`** context is used to manage sidebar state and toggling.
- The `useState` and `useEffect` hooks manage component state and lifecycle events.

## Running the Project

1. Open your terminal.
2. Navigate to the project directory.
3. Start the application using:

   ```bash
   npm start
   ```

## Notes

- Ensure that you have a working internet connection as some packages require network access.
- For any authentication-related issues, check if you have the necessary credentials and access.


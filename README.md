# Task Manager

A task management application built with Vue.js, Vite, Tailwind CSS, and Pinia for state management.

## Features

- View all tasks
- Filter completed tasks
- Task creation and management
- User avatars from Pravatar API

## Technologies Used

- [Vue.js 3](https://vuejs.org/) with Composition API
- [Vite](https://vitejs.dev/) as the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Pinia](https://pinia.vuejs.org/) for state management
- [Vue Router](https://router.vuejs.org/) for navigation
- [Pravatar API](https://pravatar.cc/) for user avatars

## Project Structure

The application is structured into reusable components that communicate through props and Pinia stores.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vue-task-manager.git

# Navigate to the project directory
cd vue-task-manager

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

Navigate to:
- `/` to view all tasks
- `/completed` to view completed tasks

## State Management

This project uses Pinia for state management. The main store handles:
- Task data
- Filtering logic
- CRUD operations for tasks

## Coding Conventions

- Component files use Vue 3 Composition API
- Each component has a single responsibility
- Props are used for parent-child communication
- Pinia stores are used for global state management
- Vue Router is used for navigation between views

## API Integration

User avatars are fetched from [Pravatar API](https://pravatar.cc/)

## Build for Production

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

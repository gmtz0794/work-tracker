# Work Tracker

The Work Tracker is a command-line application built to manage a company's employee database. It allows you to view, add, and update departments, roles, and employees. The app is developed using Node.js, Inquirer, and MySQL to interact with the database.

- View all departments
- View all roles
- View all employees
- Add a new department
- Add a new role
- Add a new employee
- Update employee roles

## Installation

Before running the app, ensure the following are installed:
- Node.js: You can download it from [here](https://nodejs.org/en).

- MySQL: Download MySQL from [here](https://dev.mysql.com/downloads/installer/).

- Inquirer v8.2.4: To install Inquirer, run the following command:
npm install inquirer@8.2.4

- MySQL2 package: You can install it using: npm install mysql2

Clone the repository to local machine using the following command:
- git clone git@github.com:gmtz0794/work-tracker.git

Navigate to the project folder and install the required dependencies using npm:
- cd work-tracker
- npm install

## Usage

When the application starts, you'll see the following options:
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

The application will display a formatted table with department names and their respective IDs. You’ll be prompted to enter the employee’s first name, last name, role, and manager. You’ll be prompted to choose an employee and update their role in the database.

## License

MIT License
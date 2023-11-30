# SQL-Compiler-Atlan

## Overview
This project is a web application to run SQL Queries directly to the .csv files.

This project facilitates SQL query handling through a custom function
`parseSQL`, designed to dissect queries into their constituent parts:
- `select`: Specifies the columns to select
- `from`: Indicates the table name
- `where`: Defines any conditions, if provided

Additionally, the system employs a function named `queryLogic` to manage the query execution and return results in the form of an array of objects. This dataset is then passed to the table component responsible for rendering the data.

The user interface comprises two primary sections:
- **SideSection**: Responsible for displaying the Navbar and linked screens, providing navigational functionality.
- **MainContent**: Displays a table and editor in a column layout, allowing users to visualize query results and compose new SQL statements.


## Technology Stack
- **JavaScript Framework**: React.js
- **Packages**:
  - fortawesome for displaying icons
  - react-hot-toast for showing toast messages
  - alasql for reading the .csv file
  - @codemirror/lang-sql for a textbox that will take the input

## Page Load Time
The page load time was measured using the Chrome Developer Tools' Performance tab. On average, the initial load time for the application is approximately 340 ms 

## Performance Optimizations
Several optimizations were implemented to enhance performance and decrease load times:
- Code Splitting: Utilized React.lazy() and Suspense to split the application into smaller chunks for more efficient loading.
- Lazy Loading: Deferred loading non-essential components and resources using React.lazy() to enhance initial load speed.
- Caching Strategies: Stored files that .csv files locally that were once called to minimise API calls and which further reduce waiting time.
- Used useEffect smoother user experience and potentially impact perceived performance.
- Used less packages

## External Libraries and Dependencies
The project utilizes various external libraries and dependencies to enhance functionality and performance. These include React Router Dom, Axios, Material-UI, and Redux Toolkit. All dependencies are listed in the `package.json` file.

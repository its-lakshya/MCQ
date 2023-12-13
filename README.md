# Project Setup

## Prerequisites:

Ensure you have Git installed on your computer. You can download and install Git from [Git official website](https://git-scm.com).\
Make sure you have Node.js and npm installed. You can download and install Node.js from [Node.js official website](https://nodejs.org/en).


### Clone the GitHub repository:

Open your terminal or command prompt and navigate to the directory where you want to clone the project.

Use the following command to clone the GitHub repository:

    git clone https://github.com/username/repo-name.git

Replace username with the GitHub username and repo-name with the name of the repository you want to clone.

### Navigate into the cloned directory:

Use the cd command to move into the cloned directory:

    cd repo-name

This command will install all the necessary packages and dependencies specified in the package.json file.

### Sart the development server:

After installing the dependencies, start the development server by running:

    npm run start
This command will start the local development server and launch the React application in a new browser window/tab. By default, the server runs on http://localhost:3000.

### Accessing the React application:

Open a web browser and navigate to http://localhost:3000 (or the address indicated in the terminal) to view and interact with the React application.

# Additional Libraries used

## Redux 
### Description

Redux is a predictable state container for JavaScript apps. It helps manage the state of your React application in a centralized store, making it easier to manage and access the application's data.

### Installation
To install Redux and related packages, run the following command in your project directory:

    npm install @reduxjs/toolkit
    npm install redux react-redux

### Usage
**Reducers:** Define reducers to manage different slices of your application's state.\
**Actions:** Create action creators to dispatch actions that describe state changes.\
**Store:** Create a Redux store to hold the application's state.\
**Connect Redux to React:** Use the Provider component from react-redux to connect the Redux store to your React application.

## react-router-dom 
### Description

react-router-dom provides routing capabilities to your React application, allowing navigation between different views/components.

### Installation
To install react-router-dom, run the following command:

    npm install react-router-dom

### Usage
**BrowserRouter**: Wrap your application with <BrowserRouter> to enable routing.\
**Route**: Use the <Route> component to define routes and render specific components based on the URL.\
**Link/NavLink:** Use <Link> or <NavLink> to create navigation links between different routes/components.\
**Switch:** Use <Switch> to render the first <Route> that matches the current location.

## Tailwind CSS 
### Description

Tailwind CSS is a utility-first CSS framework that helps in building custom designs without writing traditional CSS.

### Installation
To use Tailwind CSS in your project, follow the installation instructions from the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation).

### Usage
**Utility Classes:** Apply utility classes directly in your HTML or JSX to style elements.\
**Customization:** Tailwind allows customization through configuration files for colors, spacing, fonts, etc.\
**Responsive Design:** Utilize responsive classes to create designs for different screen sizes.

## react-icons
### Description

react-icons provides a set of popular icon libraries as React components, allowing easy integration of icons into your React application.

### Installation
To install react-icons, run the following command:

    npm install react-icons

### Usage
**Importing Icons:** Import icons from the library and use them as React components directly in your code.\
**Icon Libraries:** react-icons supports various icon libraries like Font Awesome, Material Icons, etc. Import icons from the desired library.
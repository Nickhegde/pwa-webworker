This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Title
Web Worker

## About
It is a demo project to show case the application of web worker. Web Worker perform task without interfering with the user interface. It takes the load of the main thread.Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

## Prerequisites
Environment pre-requisites:
* NPM 6.4.x

## Getting Started

Following instuctions are to setup and run the project on local machine for development.

### Steps to setup the configuration and start the application:

1) Clone the repository, go inside the cloned directory.

2) Run the below command to install the dependencies required for the application:

  `npm install`

  ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Functionality

This is a simple project to show how an application behaves if same method is run inside the main script file and also in worker file. It shows the effect of execution of that method in both the cases.

It has 2 button namely, 
1. `Fetch Users Directly`.
2. `Fetch Users with Web Worker`.

If user clicks on `Fetch Users Directly`, the timer stops to fetch the number of users. Here the method in the main script will be called.

If user clicks on `Fetch Users with Web Worker`, the timer does not stop while a method is executed to fetch the number of users and this method is written in worker file and will be executed as a background thread.

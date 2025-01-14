# Blackjack Tech Test

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation
Install Node.js on your local machine. Clone this repository on your local machine then open up the project in your code editor. In the terminal, navigate to the project directory, if jest isn't a dev dependency already, install the JavaScript testing framework, jest, by using the command `npm install --save-dev jest` in the terminal for dev dependencies for testing. Alternatively, use the command `npm i` to install all the dependencies which are already in the project.

## Usage
The task is to pass our unit tests. In your `package.json`, make sure you have this:
```
"scripts": {
    "test": "jest"
}
```
Make sure you're in the project directory and use `npm run test` in the terminal to run the tests. To run each test, use the same command above with the file's relative path after. For example, if you want to test the `hand` class, you can use `npm run test test/hand.test.js`.

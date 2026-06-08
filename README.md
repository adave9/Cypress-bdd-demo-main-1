# CypressYt Learning
This repository contains my learning path that I used for demonstrate on YouTube.

## Prerequisite
You should have node installed in your machine. Make sure to checkout [cypress website](https://docs.cypress.io/app/get-started/install-cypress) for specific requirements on node and npm versions.

## Installation
This section covers information about project set-up and cypress installation.

1. Setup node project
```
// create package.json file
npm init
```

2. Install cypress
```
// install cypress as project dependency
npm install cypress 

// install cypress as dev dependency
npm install cypress --save-dev 
```

3. Open Cypress Launchpad
```
// set-up cypress project structure 1st time
npx cypress open // open cypress launchpad
```

## Running Tests
You can run tests using Cypress Launchpad (GUI), by clicking on the spec file which you want to run Although you can use CLI and headless mode to run tests.

1. Run all spec files in default electron browser with headless mode
```
npx cypress run
```

2. Run all spec files in default electron browser with headed mode
```
npx cypress run --headed
```

3. Run a specific spec file
```
npx cypress run --spec "/relative/path/to/spec/file"
```

4. Run all spec files while specifying broswer
```
npx cypress run --browser chrome
```

5. Run all spec file while specifying browser and mode of run
```
npx cypress run --browser chrome --headed
```"# Cypress-bdd-demo-main-1" 

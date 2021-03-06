# Cinema Web Application Project 

## Project Description
This repository is to show the development and creation of a cinema website application for a selected cinema franchise, using the full MERN stack principle. Which involves the use of specific technologies such as : **Mongo DB**, **Express**, **React** and **Node.JS**. The frontend of the application will be built using React with some CSS styling, while the backend will be built using Mongo/Mongoose, Express and Node. After the development of the website. The functionality of our code is tested using express testing methods which are: **Chai**, **Istanbul** and **Mocha**. To determine if we reach test coverage that is ideal for industry standards. Also, the frontend of the website will be tested usinh jest. Overall, this README file will give you the neccessary information to obtain a working version of this application on your local machine. 

### Test Coverage: 
- 91.3% 

## Aim Of The Project
 - As a team create a full stack website application using MERN and other methods that were taught to us during our time at QA Academy. 
 - Using a specification given to use by a client highlight the **Minimum Value Product(MVP)** which will help in the design of the website.
 - Use wireframe.cc to plan the website pages. 
 - Working in agile mindset when developing the website.
 - Testing certain aspects of the website. 


## Getting Started
The instructions below will help you get a version of this project up and running in a local environment or on ypur local machine for developing and testing purposes. Please see the **Prerequisites** section of this README and the **Deployment section** for further details about setting up the live environment. 

## Prerequisites
The information below are the required software needed to host this project on your local environment/machine, With links and resources to their URL to Download the software. 
Check the **Downloads** section of the README, to install the neccessary software by following the weblinks.

The required software:
- **Version Control System: Git**
- **GitHub Account**
- **Postman**
- **Visual Studio Code** 
- **Node.JS** 
- **Mongo DB**
- **Express**

## Downloads

- **Version control system:** 
    * [Git](https://git-scm.com/downloads)

- **GitHub Account:** 
    * [GitHub](https://github.com/)

- **Postman:**
    * [Postman](https://www.postman.com/downloads/) 

- **Visual Studio Code:**
    * [Visual Studio Code](https://code.visualstudio.com/) 

- **Mongo DB:**
    * [Mongo DB](https://www.mongodb.com/try/download/community)

- **Node.JS:**
    * [Node.JS](https://nodejs.org/en/download/)


## Installation
This section gives a list of instructions that are needed to download the software to get a devlopment environment running, which are listed in the prerequisites section of the README. 

 1. Once clonning the repository, open the folder or add the folder into the workspace on **Visual Studio Code**. 
 2. Double check that the **node_modules** folder for both backend and frontend have been installed. 
 3. Open an intergrated terminal and run the command `npm install` to install all the packages to the local machine.

 *For extra information:*
 - *Please see the Deployment/Running The Application*

## Testing 
 In terms of testing the whole web application. Two types of testing were done. 
 
 Firstly, for the backend express testing was done which involves **Mocha**, **Chai** and **Istanbul**. This testing methods helps us determine the functionality of the backend. 

 The second test that was applied onto the website is snapshot testing, to see how well the components of the frontend work as well. This is mostly done with **Jest**. 

 ### Testing Deployment
 For deployment in terms of testing, make sure you are in the correct working directory i.e. **cd** into the correct folder. 

 **To run backend testing**

```bash
-cd backend
npm install
npm test*
npm run coverage 
```

*Note:*
- *Make sure you install Mocha, Chai, Istanbul into your package.json file. Using the command **(npm install --save mocha)** for example.*

**To run frontend testing**

```bash
-cd backend
npm install
npm test*
```
*Note:*
- *Make sure you install jest **(npm install jest)** to help with snapshot testing* 

## Further Contribution
Please feel free to contribute by adding new features to this project:

1. Fork it (<https://github.com/qasidd/trap-mern-project>)
2. Create a new feature branch, remember to branch out of master/main (`git checkout -b <new feature branch name>`)
3. Add these changes to your staging area (`git add .`)
4. Commit your changes (`git commit -m 'Add something'`)
5. Push to the branch (`git push origin <feature branch name>`)
6. Create a new Pull Request

## Deployment/Running The Application
As mention before the backend is written using Node.js and Express with some intergation from Mongo DB. Before running the whole application make sure the backend is connected to Mongo database. 

**To run the backend:**

```bash
-cd backend
npm install
npm start
```

*Note:* 
- *The application will open on a new server port i.e. http://localhost:5019/*
- *It is crucial to use the command `npm install` or `npm i` to have all the node modules, package-lock.json and package.json files added to the local machine*

Most of the frontend is built using React with CSS and other packages such as reactstrap. 

**To run the frontend:**

```bash
-cd frontend
npm install
npm start
```

*Note:* 
- *The application will open on a new server port i.e. http://localhost:3000/*
- *It is crucial to use the command `npm install` or `npm i` to have all the node modules, package-lock.json and package.json files added to the local machine*


### Built With
 - Full MERN stack (`**MongoDB, Express, React and Node.JS**`)

### Authors 
 - Siddhartha Gurung (Owner of repository)
 - Waleed Tahir
 - Hamza Pervez
 - Ayesha Raja 
 - Daniel Ahuchogu
 
### License
This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

### References
 - **React Strap/BootStrap for React**. *Available at: https://react-bootstrap.github.io/* 
 - **React Semantic UI**. *Available at: https://react.semantic-ui.com/*
 - **The design of the email contact**. *Available at: https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app*
 - **Payment and Checkout Form**. *Available at:https://stripe.com/docs/checkout/integration-builder*
 - **For film classification and ratings**. *Available at: bbfc.co.uk*
 - **Advice on coding**. *Available at: https://stackoverflow.com/*
 
### Acknowledgments
 - QA Academy 
 - Savannah Vaith
 - QA Training team
 - QA-Community
 - Team Trap (Project Team at the Academy)
 - GitHub
 


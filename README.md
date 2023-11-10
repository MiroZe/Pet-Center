# Pet-Center
- Project: My Pet Center  
- The project is hosted and you can visit it here : https://ze-pet-center.netlify.app  
- Description: My Pet Center is a web application that provides a place to help your beloved pet find their match and make the world more beautiful, better, and fluffier.
            The project is with educational porposes!

## Installation

1. Clone the project repository to your local machine.
2. Navigate to the project directory.
3. Run the command `npm install` to install all dependencies.
4. Navigate to folder Rest-api and run the command `npm install` to install all backend dependencies(You can check readme.md at Rest-api folder for more information, about backend usage here: https://github.com/MiroZe/Pet-Center/blob/main/Rest-api/readme.md)

## Usage
1. Run the command `ng serve` to start the application on a local server.
2. Open a web browser and go to `http://localhost:4200` to access the application.
3. Register or log in with an existing account to use the features of My Pet Center.

## Features and Functionality
![Home](https://github.com/MiroZe/Pet-Center/assets/114018004/7878d516-5990-4964-a6d5-94b53267a90a)
- Guest users have access to Home Page, Dashboard Page, Register Page, Login Page
![RegisterForm](https://github.com/MiroZe/Pet-Center/assets/114018004/a00ccd12-aa66-452c-97c1-478fcfdbfdfc)
- Logged in users have access to Home Page,User Profile Page, Dashboard Page, Pet Details Page, My Pets Page, My favorites Pets Page, Search Page , Login Page.

- Dashboard page is a list with all published pets from all users.

![dashBoard](https://github.com/MiroZe/Pet-Center/assets/114018004/993fa5df-7bad-4e6d-bbaa-cc6bc9f18812)

  - There are 3 buttons that give possibility to user or guest to filter or not all ads by the type of pet.
- Details page shows all information about the current pet`s ad.
  - If the logged-in user is the owner of the ad, he will see 2 buttons: "Edit" and "Delete."
    - The "Edit" button allows the user to edit the details of their own ad.
    - The "Delete" button delete current add.
  - If the logged-in user is not the owner of the ad, he will see 3 buttons: "Add to favorite list" , "Calculate distance" and "Send message...".
    - "Add to favorite list button save current pet`s ad to My favorite Page.When it is already saved the button is replaced with message .
    - "Send message..." button : when user click it, he can send direct message to the owner of the current ad.
    - "Calculate distance" calculates the distance between the logged in user location and the pet`s location.

![detailsPage](https://github.com/MiroZe/Pet-Center/assets/114018004/ea38c78f-e0ad-4a07-ae08-6311a772acb8)
- My pets page is list with all user ads.
- My favorite list shows all saved ads with "Remove from favorite list" functionality.
- Search Page give option for logged in user to search pets by two criteria: breed and location.
- ![SearchPage](https://github.com/MiroZe/Pet-Center/assets/114018004/647fadff-6caa-482d-a158-32c1bd67e70a)

- Add Page adds a new pet ad. 
![newPetForm](https://github.com/MiroZe/Pet-Center/assets/114018004/5839da67-d400-42bc-a28a-877b4a5156a2)
- Profile page shows detailed info about logged in user with edit data functionality.
- Message Page is panel , which shows received direct messages from other users with a link to message sender details card with implemented delete function for each message.
- - No Found Page -  for not correct url links.

## Requirements
- Node.js
- Angular CLI

## Collaboration
Anyone interested in collaborating and improving the project can do so by sending a Pull Request.

## License
My Pet Center is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact
For any questions, comments, or collaboration, you can contact me at the following email address: miro_sv@yahoo.com.

I hope this README.md file helps you understand and use  Pet Center more easily . Thank you for your interest and support!

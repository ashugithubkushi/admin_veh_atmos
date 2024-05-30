# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









Admin

1. nodemodules
2. public
3. src
        * Components:-
            1. AdminLogin folder:-
            AdminLogin.js
            adminlogin.css
            2. Dashboard folder:- 
            Dashboard.js
            dashboard.css

            Inside dashboard folder,
                a) AddVehicles folder:-
                    Addvehicles.js
                    addvehicles.css
                b) Users folder:-
                    Users.js
                    users.css

  4. package-lock.json
  5. package.json
  6. README.md






README file:-

1. Login

 * login with username and password
 * validation check for username and password
 * successfull popup after click on login and move to dashbaord component
 * login data will be stored in userlogins collections of Atmos_vehicle_slot_bookings of mongodb database


2. Admin dashboard
   Dashboard page created with MUI Material drawer having both navbar and sidebar code in dashboard component only

* Navbar:- 
   -> Used toggle Menuicon for toggle funtion handling of sidebar 
   -> Admin dashboard logo
   -> Logout button for logout and redirect to login page


* Sidebar :-
        1. Vehicles (default selected)
        2. users
        3. Bookings

        1. vehicles:- 
            * [Add +] button :- 
                -> when click on Add button the popup (Modal popup from reactstrap) will appear with label name (Add Vehicles) and three input fields of Vehicle Name, Vehicle Number, Contact data of site engineers
                -> Validation check using tooltip
                -> Close button (x) at the top to close the Modal popup at anytime
                -> Reset button to reset the input fields
                -> Add button to submit all the input field datas by 'handleSubmit()' funtion of the Modal form

                -> stores data in 'vehicles' collection in database

            * Table:- 
                * Displaying the table data of Vehicle Name, Vehicle Number, Contact data of site engineers 
                * Edit button :- allows to edit the changes individually of particular row (used modal popup of reactstrap)
                * Delete button :- delete by confirming 'are you sure want to delete?' then it gets delete permanenty 
                * the edited and deleted changes will get updated in database


        2. Users :- 
            * [Add +] button :- 
                -> when click on Add button the popup (Modal popup from reactstrap) will appear with label name (Create User data) and input fields of User Name, User Email, Password, designation and contact
                -> Validation check using tooltip
                -> Close button (x) at the top to close the Modal popup at anytime
                -> Reset button to reset the input fields
                -> Create button to create the user datas by 'handleSubmit()' funtion of the Modal form

                -> stores data in 'createusers' collection in database
                
            * Table:- 
                * Displaying the table data of User Name, User Email, Password, designation and contact 
                * Edit button :- allows to edit the changes individually of particular row (used modal popup of reactstrap)
                * Delete button :- delete by confirming 'are you sure want to delete?' then it gets delete permanenty 
                * the edited and deleted changes will get updated in database


        3. Bookings :-
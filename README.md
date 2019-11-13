This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

"npm start" - Test on your local environment by visitng localhost:3000

"npm build" - Build a distributable folder to host elsewhere

This React Template demonstrates how to develop a Single Page App using only functions as components with React Hooks.
                    ~Local state and class-based components are not required in this style~

This template implements React Hooks to create a simple global state management solution using the 'useGlobalState' function defined in statecontext.js
                    This approach persists all data and should not be used for solutions dealing with more than 5-10 MB of data.
                                      Large files should be destroyed when components dismount

By persisting data in the store you can reduce the amount of API calls you make and let React handle component garbage collection, mitigating memory leaks


The store is broken into semantic modules to be clear & readable. You do not have to do this, if you would like to host all your reducers in one place and
use one attribute of 'action' to differentiate between the reducers you can do that.


visit https://reactjs.org/docs/hooks-reference.html or https://medium.com/@Charles_Stover/manage-global-state-with-react-hooks-6065041b55b4 for Hooks reference




This template also incorporates the use of React-Router-Dom, React-Bootstrap, & React-Cookies

Using this template you should be able to easily defined routes, style your components, and persist user-preferences


----------------------------------------------------------------------------------------------------------------------------------------------------------------

A backend has not been implemented into this project, instead it is simulated with the 'initialState' object.
This object should be populated by an API call to your backend later in development.

Delete functionality has not been demonstrated because it will likely not work the same as removing an item from a javascript array.
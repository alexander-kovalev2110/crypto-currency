# crypto-currency project


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

## Project description

When launched, the first 12 cryptocurrencies are displayed on the screen from the cryptocurrency site:

https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

## Commands of "CRYPTO MENU"

### Reload cryptocurrency

Reloading current data from the cryptocurrency site.

### Add crypto to "Favorites"

Add cryptocurrencies to a "Favorites" list, stored in the local storage of the browser.

### Ethereum balance

Display the current Ethereum balance of a user-entered Ethereum address (web3.js library is used).

### Send Ether

Send Ether from one user-entered address to another useing Goerli testnet.

## Comment:

This is a test version of the project. It has my infura_project_id set for testing purposes. 
For productive use, you need to add a real project-id input (I can do it if necessary).
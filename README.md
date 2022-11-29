# Development

### Link to Deployed Website
`https://hungrybison102.github.io/CS1300-development`

### Goal and Value of the Application

The goal of the application is to be an intuitive and fast menu page with an easy-to-view shopping cart. The value is that a user can add and remove to the cart very quickly.

### Usability Principles Considered

There is a clear hierarchy and separation between the menu and the controls/aggregator. Colors are clear and set items apart, and have good contrast. A message, as well as icons ensures that users know how to add and delete to the cart.

### Organization of Components

Most things are in App.js. App.js maps the bakery data to BakeryItems, which displays the information of the item using passed-in props. It also displays the Cart, which displays each item of the cart as a clickable item. App.js uses state variables for the cart list, the total, and the settings.

### How Data is Passed Down Through Components

App.js passes in the bakery item data into the BakeryItem component. The delete handle function and cart list are also passed as props into the Cart component.

### How the User Triggers State Changes

The user clicks on items to change the state of the cart, or uses the filter/sorting features to change the states of the settings and bakery list.

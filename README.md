# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of the application is to provide a user interface where one can filter various whiskeys based on their region and age range as well as sorting them based on price from high to low to low to high. Additionally it calculates the sum of of the whiskies added to the cart.

### Usability Principles Considered
It offers a pretty simple user friendly interface. The titles are utilized to emphasize the functionality of the buttons and checkboxes. The page has a white backgorund and uses simple black text on it which ensures contrast.

### Organization of Components
The filtering can be found on the top and the menu of whiskey items are listed right underneath. At the bottom of the page user can find the cart where the items added are listed with the total number at the end of it.

### How Data is Passed Down Through Components
After current filtering are applied to the data, rest of the items are displayed through the WhiskeyItem component. The component also takes in the updateCart function, which is triggered by the button on each Whiskey item to add them to the cart. Similar Logic takes place for the Cartitem. It goes through the list of whiskeys and check for the ones whose count is greater than 0 to view their name price and count on the cart.

### How the User Triggers State Changes
There are checkboxes for the filtering features. There are radio buttons for the sorting. There are also buttons to add remove, increase and decrease the amount of items in the cart.



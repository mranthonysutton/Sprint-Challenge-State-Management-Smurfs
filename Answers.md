1. What problem does the context API help solve?

   _Context API allows us to no longer be required to use "prop drilling" to pass in our data from our parent to our child elements. It allows us to store our data in state, and retrieve the data globally that is required._

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   _Actions - Are packets of information that describe events within the UI._

   _Reducers - Are pure functions that take in state and an action as an argument. The action will usually contain a switch statement to return a block of code depending on the action that is being rendered._

   _Store - Store is considered the "single source of truth" because we will store all of our data there and each component that needs that data will call it from one location._

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   _Component state is stored locally in each component, while application state is stored globally and allows each component to retrieve the data that is stored within the "store". The only time we would want to use application state over component state is when we are creating multiple components that will need to utulize the same state. So instead of passing the state down through parent-child relationships, we can store it globally and allow the component to call on the state._

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   _Redux-thunk is a middleware that allows us to handle asynchronous operations. It intercepts the normal async API calls. It changes our actions and creates by allowing us to run actions depending on the state of the stage of the API call._

5. What is your favorite state management system you've learned and this sprint? Please explain why!

   _I think my favorite state management system so far is Redux. Yes, it does require a lot of work and for a small scale application, it is not worth implementing. However, once it is implemented is is extremely easy to pass your state and props around and retrieve the data that is set in the store._

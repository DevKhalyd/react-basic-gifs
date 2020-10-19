# Gift Expert App

This app use the Giphy SDK to show gifs.

**NOTE: This file contains the concepts learned in this project**

## Dependencies

This app use some dependencies like Giphy and Loading to install it use `npm i ${name-dependency}`

## Hooks

The hooks allow to manage the state of the DOM (For html: It's an Object Model. For JS: It's an API (Programming Interface)) for a better UX

### Hook: `useState`

The hook `useState` allow to change the state of the DOM

**Example**

```javascript
//Show a list with the  trending gifs
//Funtion Component
const GiphyGridTest = () => {
  //data = currentValue
  //setData = Allow to 'change' the data value
  //The value should be the same type that the inital value
  const [data, setData] = useState(true); //Initial value

  //The initital value is true to indicate that the use is waiting for the response from the sdk
  fetchGifs(4).then(() => {
    //Here the value was received
    setData(false);
    //Set to false to indicate that the Grid should be displayed
  });

  return (
    <>
      <p>
        {data ? (
          //Show a loading bar
          <LoadingComponent />
        ) : (
          //Show the data get it
          <Grid width={800} columns={3} fetchGifs={fetchGifs} />
        )}
      </p>
    </>
  );
};
```

If this hook can be compared with flutter is like setState, rebuild the UI each time the `data` changes

More info about `useState` [here](https://reactjs.org/docs/hooks-reference.html#usestate) :thumbsup:

### Hook: `useEffect`

Sometimes we want to make a request an then change the UI but that kind of operations are not allowed or maybe we don't want to reload a Promise

For this cases use the hook `useEffect`. The function passed to this one will run after the render is committed to the screen.

This can be used when centain value have changed.

The hook `useEffect` returns a clean-up function `return () => {/*Make something. E.g. ubscription.unsubscribe()*/}`

The following example shows how works this function with resources that need to be cleaned up before the component leaves the screen.

```javascript
useEffect(() => {
  //Susbcribe to some resource
  const subscription = props.source.subscribe();
  return () => {
    // Clean up the subscription before leaves the screen
    subscription.unsubscribe();
  };
});
```

The clean-up function runs before the component is removed from the UI to prevent **memory leaks.** Additionally, if a component renders multiple times (as they typically do), **the previous effect is cleaned up before executing the next effect.**

With the example above we have a problem beacuse the subscription is created each time that the UI is rendered.

`useEffect` has effect after every completed render. That way an effect is always recreated if one of its dependencies changes.

The default behavior may be overkill in some cases, like the subscription example above.

To avoid this behavior with subscriptions or functions that requires expensive memory we need to add pass a second argument to `useEffect` that contains the values to use inside of the first argument or that depends on.

**Example**

```javascript
useEffect(() => {
  //Susbcribe to a source from the component arguments
  const subscription = props.source.subscribe();
  //This fucntion fires before the component disappears
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]);
```

`Props.source` is used inside this function if this one changes, the subscription is called again. But this don't happen if `props.source` is not changed

If we want to run this effect one time, pass only a empty array as second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

If you pass an empty array ([]), the props and state inside the effect will always have their initial values.

**Note:** When use this optimization make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.

More info about `useEffect` [here](https://reactjs.org/docs/hooks-reference.html#useeffect) :thumbsup:

## Hooks Rules

These rules indicates the way to use the hooks to a better experience.

- Only call hooks at the top level

- Only call hooks from React Functions

## Custom Hooks

These kind of hooks allow to share logic between both. This behavior avoid to write more lines of code

When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

A custom Hook is a JavaScript function whose name starts with **use** and that may call other Hooks. For example, useFriendStatus below is our first custom Hook:

**CustomHook.ts**

```javascript
import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  //Return the values until the final
  return isOnline;
}
```

Unlike a React component, **a custom Hook doesn’t need to have a specific signature.** **We can decide what it takes as arguments, and what, if anything, it should return. In other words**, **it’s just like a normal function.** Its name should always **start with use so that you can tell at a glance that the rules of Hooks apply to it.**

In summary use the custom hook if the logic **can be shared between normal hooks.** This practice could be save more time and less lines of code

## Using a custom Hook

To use the custom hook, just import the file where it's the function

```javascript
function FriendStatus(props) {
  //Calling to the custom hook
  const isOnline = useFriendStatus(props.friend.id);

  //Use the isOnline to whatever you want
  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

Note: You have to name the custom hook starting with `use` like the above example

One last thing but not less important: **pass information between hooks**

## useYourImagination()

Custom Hooks offer the flexibility of **sharing logic that wasn’t possible in React components before.** You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. What’s more,**you can build Hooks that are just as easy to use as React’s built-in features.**

We also encourage you to start spotting cases where a custom Hook could hide complex logic behind a simple interface, or help untangle a messy component.

This topic is too important when you have to do some complex

So you can check the whole info [here](https://reactjs.org/docs/hooks-custom.html) :thumbsup:

## NPM run build

When you create a build. You should update the ./build/index.html in each reference href to ./ instead of /
Che the folder docs and index.html href tag

# Gomi
Gomi is a JavaScript front-end framework (or maybe library?) modelled on React, but intended to allow for quick and easy scaffolding for basic Android apps that follow Google's Material UI's Material 3 design standards, available [here](https://m3.material.io).

**Please note:** This framework is being created for learning purposes, and as such, should be used at *your own risk*.

## Current features
1. Implements custom JSX transpilation function that allows for framework-defined custom HTML elements. When Babel transpiles user-created JSX elements into DOM nodes, this function takes a Babel-parsed tag, properties object, and child tree, and returns a JSX element after converting any custom tags and properties to HTML standard ones.
1. Renders these JSX elements by recursively creating HTML elements for each JSX element, followed by its children, and assiging them HTML properties
1. Using the same render function, allows the user to update the page (*currently only with explicitly selected JSX*) by recursively evaluating whether a DOM node in the new JSX is begin created, removed, or changed, and then moving to its children (this feature is, at the moment, based quite heavily on the blog post [here](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060), but I aim to implement a virtual DOM tracking feature that will diverge from this in later dev candidate releases)

## Custom JSX elements and properties
To enable quicker app development, this framework provides a series of custom "HTML elements" that will be converted into standard DOM nodes during transpilation. At the moment, these include:
1. A custom grid element, which can be created using the following tag:
```html
<grid></grid>
```

This can also employ the following properties that are stand-ins for their CSS counterparts:
* rows (for grid-template-rows)
* cols (for grid-template-columns)
* temp (for grid-template)
* ac (for align-content)
* jc (for justify-content)
* ai (for align-items)
* ji (for justify-items)

Here's an example that creates a grid with three columns of 1fr each:
```html
<grid cols="1fr 1fr 1fr"></grid>
```

It is also possible to use the CSS `repeat()` function within this structure, so the above could be re-written as:
```html
<grid cols="repeat(3, 1fr)"></grid>
```

1. A custom flexbox container, which can be created using the following tag:
```html
<flex></flex>
```

Many of its properties are shared with the `<grid>` element above. Here is a full list:
* dir (for flex-direction)
* ac (for align-content)
* jc (for justify-content)
* ai (for align-items)
* ji (for justify-items)

## Feature roadmap
Down the road, I'm hoping to add the following features:
* A virtual DOM that allows faster, less resource-intensive re-rendering
* (Potentially) A React-like unit-of-work system to further optimize re-rendering
* Stateness and state variables
* Better-defined custom components, such as buttons and div elements, that draw their color from a programmatically defined color scheme akin to the new system employed by Material UI 3 on Android phones
* Native viewport resize handling (including vertical resize, for when the mobile browser address bar is becomes visible) that automatically re-renders, but can be disabled
* Native dark/light mode handling that can be disabled
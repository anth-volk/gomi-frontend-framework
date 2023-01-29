
// Create DOM element object by taking HTML element name,
// props, and an array of children and returning as 
// formatted object
function createElem(type, props, ...args) {
    // type type string, props type obj optional

    // If props aren't an object, null them out
    if (typeof props !== "object")
    {
        props = null;
    }

    // If no children args are presented, set children to null
    if (args.length > 0) {
        children = args;
    }
    else {
        children = null;
    }

    return {
        type,
        props,
        children
    };

}

// Recursively create VDOM from given element and container
function render(element, container) {

    // If no container provided, create a default container on document.body
    if (!container) {
        const root = document.createElement("div");
        container = document.body.appendChild(root);
    }

    // Check if container set to document.body, and if so, raise console error
    if (container === document.body) {
        console.error("It is recommended to " + 
        "create a separate container within document.body to " +
        "hold the application; alternatively, call " +
        "render without a second parameter, and the function " +
        "will create a new container at the end of document.body " +
       "to hold the application");
    }

    // First, create element
    const vdomNode = document.createElement(element.type);

    // Recursively call render for each of the element's children;
    // if child is not object, createTextNode
    element.children.forEach(child =>
        typeof child !== "object"
            ? vdomNode.append(document.createTextNode(child))
            : render(child, vdomNode)
    );

    console.log(element, container);

    // Append element to container
    container.appendChild(vdomNode);

}

// TESTING
const elem3 = createElem("li", null, "Test value");
const elem2 = createElem("ul", null, elem3);
const elem1 = createElem("div", null, elem2);

console.log(document.getElementById("root"));

render(elem1);
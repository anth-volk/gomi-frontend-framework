# List of desired tests to implement

* Output HTML page has a correctly-linked script tag
* createElem and render successfully display:
  * h1
  * p
  * p with a inside
  * ul with li inside
* createElem and render successfully display:
  * mapped array of li's inside ul
  * Custom elements (when implemented)
    * "flex" div
	* "grid" div with px-defined template
	* "grid" div with calculated template
* Changes in state vars trigger re-render
* Only portion of DOM re-renders when state vars change
* State vars are constant between re-renders
* Custom state management functions properly for the following (need to better define success):
  * Window resize
* Support for following features? (need to better define success):
  * Default dark mode support
  * Default theme support
  * Selectable theme color that provides default styling
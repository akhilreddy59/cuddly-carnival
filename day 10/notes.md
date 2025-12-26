**new  keyword internals**

- Create a New Empty Object
- Link the Prototype
- Bind this and Execute
- Return the Object
  - **Default way** - If the function doesn't return anything (or returns a primitive like a string or number), it automatically returns the newly created object.
  - **Override** - If the function explicitly returns a non-primitive object (like an array or another object), that returned object becomes the result, and the one created in Step 1 is discarded.

# Custom Hooks

## Practical-09 Create a useFetch custom hook

A React app to demonstrate the usage of custom hook "useFetch" which takes:

- URL
- method (get/post/put/patch/delete)
- optional payload
- optional boolean flag for skipping the query call.

This custom hook returns the following things in form of object:

- isLoading
- response (actual data)
- error (if any)

The API used: https://jsonplaceholder.typicode.com/
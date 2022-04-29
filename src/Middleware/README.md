# Middlewares

Any custom middleware component of function goes here. 

Currently middleware has two middlewares.

1. AvoidAuth.js:
    This is a React Component which helps to prevent Components to be accessed with user logged in. Example

    ```
    import AvoidAuth from "./AvoidAuth.js";
    const App = (props) => {
        return (
            <div>
                <AvoidAuth>
                    <Login>
                </AvoidAuth>
            </div>
        )
    }
    ```
2. RequireAuth.js
    This is a similar component like AvoidAuth. The only difference is this prevents a component to open if user is not logged in. Example
    ```
    import RequireAuth from "./RequireAuth.js";
    const App = (props) => {
        return (
            <div>
                <RequireAuth>
                    <Home>
                </RequireAuth>
            </div>
        )
    }
    ```
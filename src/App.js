import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import "./Scss/App.scss";
import Layout from "./Layout";
import { store, persistor } from "./Redux/store";
import Home from "./Views/Home";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={"...loading"} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            
                            <Route  
                                path="/"
                                element={<Home />} 
                            />

                        </Route>
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;

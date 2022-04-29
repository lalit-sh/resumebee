import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ['identity']
}

const middleware = [thunk];
if(process.env.NODE_ENV.toLowerCase() == "development"){
    middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});
export let persistor = persistStore(store);


export default { store, persistor };

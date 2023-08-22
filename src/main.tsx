import * as React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
            <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <App />
                    </PersistGate>
            </Provider>
    </React.StrictMode>,
);
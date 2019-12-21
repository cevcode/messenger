import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { IWindow } from 'models/window';

// Add redux extension to global window
declare let window: IWindow;

const initialStore: any = {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

export const store: any = createStore(
    rootReducer,
    initialStore,
    compose(
        applyMiddleware(thunk),
        devTools
    )
);

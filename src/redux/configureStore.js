import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Sales } from './sales';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sales: Sales,
        }),
        applyMiddleware(thunk)
    );

    return store;
}

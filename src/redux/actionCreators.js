import * as ActionTypes from './actionTypes'
import {SALES} from '../shared/sales'


export const fetchSales = () => (dispatch) => {
    setTimeout(()=>{
        dispatch(addSales(SALES))
    },2000)

}

export const addSales = (sales) => ({
    type: ActionTypes.ADD_SALES,
    payload: sales
});
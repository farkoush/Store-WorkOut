import React, { useReducer } from 'react';
import { createContext } from 'react';
import {isInCart} from '../helper'
const initialState = {
    itemsSelected : [],


}
const cartReducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
            case 'ADD_CART':
                if (!isInCart(state,action.payload.id)){
                    state.itemsSelected.push({
                        ...action.payload,
                        quantity: 1
                    })
                }
                return {
                    ...state,
                    itemsSelected : [...state.itemsSelected]
                }
            
            case 'REMOVE_CART':
                let newItemSelected = state.itemsSelected.filter( item => item.id !== action.payload.id)
                return{
                    ...state,
                    // itemsSelected: newItemSelected
                    itemsSelected: [...newItemSelected]
                }

            case 'INCREASE':
                if (isInCart(state, action.payload.id)){
                    let indexI = state.itemsSelected.findIndex( item => item.id === action.payload.id)
                    console.log(state.itemsSelected[indexI].quantity)
                    state.itemsSelected[indexI].quantity++;
                    return{
                        ...state,
                    }
                }
            
            case 'DECREASE':
                if (isInCart(state, action.payload.id)){
                    let indexِD = state.itemsSelected.findIndex( item => item.id === action.payload.id)
                    console.log(state.itemsSelected[indexِD].quantity)
                    state.itemsSelected[indexِD].quantity--;
                    return{
                        ...state,
                    }
                }
        default:
            return state;
    }
}

export const CartContext = createContext()
const CartContextProvider = (props) => {
    const [state,dispatch] = useReducer(cartReducer, initialState)
    return (
        <CartContext.Provider value ={{state, dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
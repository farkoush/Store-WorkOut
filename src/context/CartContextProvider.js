import React, { useReducer } from 'react';
import { createContext } from 'react';
import {isInCart, totalCart} from 'utils/helper'
const initialState = {
    itemsSelected : [],
    totalItems : 0,
    totalPrices : 0,
    checkout : false,
}

const cartReducer = (state, action) => {
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
                    itemsSelected : [...state.itemsSelected],
                    ...totalCart(state.itemsSelected)
                }
            
            case 'REMOVE_CART':
                let newItemSelected = state.itemsSelected.filter( item => item.id !== action.payload.id)
                return{
                    ...state,
                    // itemsSelected: newItemSelected
                    itemsSelected: [...newItemSelected],
                    totalItems : 0,
                    totalPrices : 0,
                }

            case 'INCREASE':
                if (isInCart(state, action.payload.id)){
                    let indexI = state.itemsSelected.findIndex( item => item.id === action.payload.id)
                    console.log(state.itemsSelected[indexI].quantity)
                    state.itemsSelected[indexI].quantity++;
                    return{
                        ...state,
                        ...totalCart(state.itemsSelected)
                    }
                }
            
            case 'DECREASE':
                if (isInCart(state, action.payload.id)){
                    let indexِD = state.itemsSelected.findIndex( item => item.id === action.payload.id)
                    console.log(state.itemsSelected[indexِD].quantity)
                    state.itemsSelected[indexِD].quantity--;
                    return{
                        ...state,
                        ...totalCart(state.itemsSelected)
                    }
                }
            case 'CLEAR':
                return{
                    itemsSelected : [],
                    totalItems : 0,
                    totalPrices : 0,
                    checkout : false,
                }
            case 'CHECKOUT':
                return{
                    itemsSelected : [],
                    totalItems : 0,
                    totalPrices : 0,
                    checkout : true,
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
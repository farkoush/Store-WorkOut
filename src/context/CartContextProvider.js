import React, { useReducer } from 'react';
import { createContext } from 'react';

const initialState = {
    itemsSelected : [],


}
const cartReducer = (state, action) => {
    console.log('state')
    console.log(state)
    switch (action.type) {
        // case ADD_CART:
        //     return {
        //         ...state,
        //         itemsSelected: state.itemsSelected.push({
        //             product: action.product,
        //             quantity : 1
        //         })
        //     }
            case 'ADD_CART':
                if (!state.itemsSelected.find( item => item.id === action.payload.id)){
                    state.itemsSelected.push({
                        ...action.payload,
                        quantity: 1
                    })
                }
                return {
                    ...state,
                    itemsSelected : [...state.itemsSelected]
                    // ...state,
                    // itemsSelected: state.itemsSelected.push({
                    //     product: action.product,
                    //     quantity : 1
                    // })
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
            {props.childeren}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
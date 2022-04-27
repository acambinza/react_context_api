import React, { createContext, useReducer } from 'react';
import { initialState, CartReducer } from './CartReducer';


export const CartContext = createContext({
    state: {
        countCart: 0,
        totalGeral: 0,
        imposto: 0,
        subTotal: 0,
        productCart: []
    },
    dispatch: ({type, payload}: any) => {}  
});


//@ts-ignore
export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    return (
        //@ts-ignore
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
import React, { useContext } from 'react';

import './index.css'

import { CartContext } from '../../contexts/cart/CartContext'

export const Cart = () => {

    const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);

    return (
        <>
            <p>Itens: {JSON.stringify(cartState.productCart)}</p>
            <p>Count: {cartState.countCart}</p>
            <p>SubTotal: {cartState.subTotal} </p>
            <p>Imposto: {cartState.imposto}</p>
            <p>TotalGeral: {cartState.totalGeral}</p>
        </>
    )
} 
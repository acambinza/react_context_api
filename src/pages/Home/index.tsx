
import { useContext, useState, useEffect } from 'react'

import './style.css';

import {Cart} from '../../components/Cart';
import { CartContext } from '../../contexts/cart/CartContext'

interface InterfaceProduct {
    id: string | number,
    title:string,
    price: number,
    image: string
}

export default function Home() {

    //const {logado} = useContext(AuthContext)
    const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);

    const [logado, setLogado] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const init = async () => {
            const rs = await fetch('https://fakestoreapi.com/products');
            const resp = await rs.json();
            setProducts(resp)
        }
        init();
    }, [])

    const [prod, setProd] = useState({
        id: '',
        title: '',
        price: '',
        image: '',
        qtd: 0
    })

    const addCart = (prod:InterfaceProduct) => {
        let prodFinal = {...prod, qtd: 1 };

        cartDispatch({
            type: 'addProdCart',
            payload: {
                prodAdd:prodFinal
            }
        })
    }
    return (
        <>
            <Cart></Cart>
            <h2>Home</h2>

            <p>cartState : {cartState.countCart}</p>

            <hr />

            {
                products.length ? (

                    products.map( (items: InterfaceProduct, key:any ) => {
                        return (
                            <div key={key} className='cardProduct'>
                                <p>
                                    <div >
                                        <img src={items.image} style={{ width: 100 }} />
                                    </div>
                                    Title: {items.title} <br />
                                    Price: {items.price} <br />
                                </p>
                                <p>
                                    <button style={{ cursor: 'pointer', fontSize: 10 }} onClick={() => addCart(items)} name="Add Cart">
                                        Add Cart
                                    </button>
                                </p>
                                <hr />
                            </div>
                        )
                    })

                ) : <div>Loggind...</div>
            }
        </>
    )
}
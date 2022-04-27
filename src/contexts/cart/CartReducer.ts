import { ADD_TO_CART } from "../type";

type productTypes = {
    id: string | number,
    title: string,
    price: number
    image: string,
    qtd: number
}

type initialStateType = {
    countCart: number,
    totalGeral: number,
    imposto: number,
    subTotal: number,
    productCart: productTypes[]
};

type actionType = {
    type: string,
    payload: any
}
77
export const initialState = {
    countCart: 0,
    totalGeral: 0,
    imposto: 0,
    subTotal: 0,
    productCart: []
};

export const CartReducer = (state: initialStateType, action: actionType) => {
    switch (action.type) {
        case 'setCountCart':
            return { ...state, countCart: action.payload.countCart };
            break;
        case 'addProdCart':
            let { countCart, totalGeral, subTotal, productCart, imposto } = state;

            let { price, qtd } = action.payload.prodAdd;

            subTotal = parseFloat(price) * qtd;
            let impo = subTotal * imposto;

           console.log(totalGeral)
           console.log(impo)

            countCart = countCart +1;

            productCart.push(action.payload.prodAdd)


            return {
                ...state,
                subTotal: subTotal,
                totalGeral: totalGeral,
                imposto: imposto,
                countCart: countCart
            }

            break;

            case 'updateProdCart': 
                var calc = 0;
                let prodUp = state.productCart.map(item => {
                    if(item.id === action.payload.id){
                        item.qtd = action.payload.qtd
                    }

                    //@ts-ignore
                    calc = calc + (parseFloat(item.price) * item.qtd)
                    return item;
                })

                state.productCart = prodUp;

                state.subTotal = calc;
                state.imposto = state.subTotal * imposto
                state.totalGeral = calc + state.imposto

                return {...state}
                break;

            case  'removeProdCart':
                var calc = 0;
                 //@ts-ignore
                let prodR = [];

                let prodUpRemove = state.productCart.forEach(item => {
                    if(item.id !== action.payload.id){
                        item.qtd = action.payload.qtd
                         //@ts-ignore
                        calc = calc + (parseFloat(item.price) * item.qtd)
                        prodR.push(item)
                    }
                });

                //@ts-ignore
                state.productCart = prodR;
                state.subTotal = calc;
                state.imposto = state.subTotal * imposto
                state.totalGeral = calc + state.imposto

                return {...state}
                break;
        default:
            return state;
    }
}
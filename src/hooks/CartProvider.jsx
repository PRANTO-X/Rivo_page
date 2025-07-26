import {useReducer} from "react";
import { CartContext } from "./CartContext";

const initialState = {
    cartItems: []
};

const cartReducer = (state,action) =>{
    switch(action.type){
        case 'ADD':{
            const exist = state.cartItems.find(item => item.id === action.payload.id);

            if(exist){
                return state;
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems,{...action.payload,quantity: 1}],
                }
            };
        }
       
        
        case 'REMOVE':
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };

        case 'INCREASE':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
            };

        case 'DECREASE':
            return {
                ...state,
                cartItems: state.cartItems
                .map(item =>
                    item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
                .filter(item => item.quantity > 0), 
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: []
            };

        default:
            return state;    
    }
}

export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(cartReducer,initialState);

    return(
        <CartContext.Provider value={{cartItems: state.cartItems,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};
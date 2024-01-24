'use client'
import React, { useState, useEffect, createContext, useReducer } from 'react';
import { getProducts } from '../componentes/ApiCafeAltura';
import cardReducer from '../componentes/ApiCafeAltura';
export const ProductContext = createContext(null);


export function ProductProvider(props) {
    const [cart, dispatch] = useReducer(cardReducer, []);
    console.log(cart);
    const [productsArray, setProductsArray] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            setProductsArray(data.products);
        }
        fetchData();
    }, []);
    
  
    return (
        <ProductContext.Provider value={{ productsArray, cart, dispatch }}>
            {props.children}
        </ProductContext.Provider>
    );
}

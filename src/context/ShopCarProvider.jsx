import { createContext, useState, useEffect } from "react";

const ShopContext = createContext({});

export const ShopCarProvider = ({ children }) => {
    const [shopCar, setShopCar] = useState([]);
    const addProduct = (product) => {
        const newShopCar = [...shopCar, product];
        setShopCar(newShopCar);
        localStorage.setItem('shopCar', JSON.stringify(newShopCar));
    }
    useEffect(() => {
        if (localStorage.getItem('shopCar')) {
            setShopCar(JSON.parse(localStorage.getItem('shopCar')));
        } else {
            setShopCar([]);
        }
    }, [])
    
    return (
        <ShopContext.Provider value={{shopCar, setShopCar, addProduct}}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContext;

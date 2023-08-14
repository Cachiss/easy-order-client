import { useContext } from "react";

import ShopContext	 from "../context/ShopCarProvider";

export const useShopCar = () => {
    const context = useContext(ShopContext);
    return context;
}

export default useShopCar;
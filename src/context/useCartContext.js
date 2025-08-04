import { useContext } from "react";
import { cartContext } from "./cartContext";

export const useCartContext = () => {
    const context = useContext(cartContext);
    if (!context) {
        throw new Error("useCartContext must be called within CartProvider.");
    }
    return context;
}; 
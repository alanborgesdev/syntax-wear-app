import IconCart from "@/assets/images/icon-cart.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartButtonProps {
    onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
    const { cart } = useContext(CartContext);

    return (
        <button className="relative cursor-pointer flex items-center" onClick={onClick}>
            <img src={IconCart} alt="Ícone carrinho de compras" />
            {cart.length > 0 && (
                <span className="absolute -top-3 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-error  text-xs text-white">
                    {cart.length}
                </span>
            )}
        </button>
    );
};

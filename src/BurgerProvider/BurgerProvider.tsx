"use client";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useSession } from "next-auth/react";

interface Product {
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  product_status: string;
  _id: string;
  email: string;
}
export interface BurgerContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Product[] | null;
  setCartItems: React.Dispatch<React.SetStateAction<Product[] | null>>;
}

export const AuthBurgerPoka = createContext<BurgerContextType | undefined>(
  undefined
);

interface BurgerProviderProps {
  children: ReactNode;
}

const BurgerProvider = ({ children }: BurgerProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const session = useSession();
  const [cartItems, setCartItems] = useState<Product[] | null>(null);
  console.log(session);

  const allBurgerInfo: BurgerContextType = {
    loading,
    setLoading,
    setCartItems,
    cartItems,
  };

  return (
    <AuthBurgerPoka.Provider value={allBurgerInfo}>
      {children}
    </AuthBurgerPoka.Provider>
  );
};

export default BurgerProvider;

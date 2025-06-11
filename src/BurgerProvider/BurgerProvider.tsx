"use client";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useSession } from "next-auth/react";
export interface BurgerContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  console.log(session);

  const allBurgerInfo: BurgerContextType = {
    loading,
    setLoading,
  };

  return (
    <AuthBurgerPoka.Provider value={allBurgerInfo}>
      {children}
    </AuthBurgerPoka.Provider>
  );
};

export default BurgerProvider;

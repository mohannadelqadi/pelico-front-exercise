import { ReactNode, createContext, useReducer } from 'react';
import { TMainAppContextAction, TMainAppContextState, TMainAppContextType, TUserProduct } from '../types';

export const MainAppContext = createContext<TMainAppContextType | null>(null);

const MainAppContextReducer = (state: TMainAppContextState, action: TMainAppContextAction) => {
    switch (action.type) {
        case 'add_product': {

            let currProduct = state.products.filter((p => p.id === action.payload.id));

            let quantity = currProduct.length > 0 ? currProduct[0].quantity + 1 : 1;

            return {
                ...state, products: [...state.products.filter(p => p.id !== action.payload.id).concat(
                    { ...action.payload, quantity: quantity }
                )]
            };
        }
        case 'remove_products': {
            let filteredProds = state.products.reduce<TUserProduct[]>((acc, p) => acc.concat(p.id === action.payload.id ? { ...p, quantity: p.quantity -= 1 } : p), []).filter(p => p.quantity > 0);
            return { ...state, products: filteredProds }
        }
        default:
            return state;
    }
};

export const MainAppContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(MainAppContextReducer, {
        products: []
    })
    return (
        <MainAppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </MainAppContext.Provider>
    )
};


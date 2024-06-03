import { Dispatch } from "react";

export type TProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export type Rating = {
    rate: number;
    count: number;
}

export type TUserProduct = TProduct & {
    quantity: number
}

export type TMainAppContextState = {
    products: TUserProduct[]
};

export type TMainAppContextAction = {
    type: 'add_product' | 'remove_products',
    payload: TProduct
};

export type TMainAppContextType = TMainAppContextState & {
    dispatch: Dispatch<TMainAppContextAction>
};
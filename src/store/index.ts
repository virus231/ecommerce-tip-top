import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IProduct } from "@/@types/products";

interface ToDoStore {
    wishlists: IProduct[];
    addToWishlist: (product: IProduct) => void;
    removeProduct: (id: string) => void;
    allRemove: () => void;
}

// const myMiddlewares = (f:unknown) => devtools(persist(f));

export const useWishlistStore = create<ToDoStore>()(
    devtools(
        persist((set, get) => ({
            wishlists: [],
            addToWishlist: (product) => {
                const { wishlists } = get();
                set({
                    wishlists: [...wishlists, product],
                });
            },
            removeProduct: (id) => {
                const { wishlists } = get();
                const removeProduct = wishlists.filter(
                    (product) => product.id !== id,
                );
                set({
                    wishlists: removeProduct,
                });
            },
            allRemove: () => {
                set({
                    wishlists: [],
                });
            },
        })),
    ),
);

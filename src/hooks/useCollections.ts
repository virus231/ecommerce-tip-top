import { useState, useEffect } from "react";
import { supabase } from "@/services/supabase-config";
import { TQuery } from "@/@types/products";

type Query = {
    brandsOptions: string[];
    categoriesOptions: string[];
    selectValue: TQuery;
};

export const useCollections = (query: Query) => {
    const {
        brandsOptions: brand,
        categoriesOptions: category,
        selectValue: value,
    } = query;
    const [collections, setCollections] = useState<any[] | null>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const ascending = value == `asc`;

    useEffect(() => {
        const getCollectionsByBrand = async () => {
            setLoading(true);
            setCollections([]);
            try {
                const { data: products } = await supabase
                    .from(`collections`)
                    .select(`*`)
                    .filter(
                        brand.toString() !== `` ? `brand` : ``,
                        `in`,
                        `(${brand.toString()})`,
                    )
                    .filter(
                        category.toString() !== `` ? `category` : ``,
                        `in`,
                        `(${category.toString()})`,
                    )
                    .order(`amount`, { ascending });

                setCollections(products);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };

        getCollectionsByBrand();
    }, [brand, value, category]);

    return { collections, loading };
};

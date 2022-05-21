import Link from "next/link";
import { Div, MainNav } from "@/styles/Collections";
import ProductCard from "@/components/ProductCard";
import EmptyResults from "@/components/EmptyResults";
import { brands, categories } from "@/_mock/mock";
import { CheckBoxFilter } from "@/components/CheckBoxFilter";
import { useState } from "react";
import { Selector } from "@/components/Selector";
import { useCollections } from "@/hooks/useCollections";
import { IProduct, TQuery } from "@/@types/products";
import { Center, Loader } from "@mantine/core";

const ProductsPage = () => {
    const [brandsOptions, setBrandsOptions] = useState<string[]>([]);
    const [categoriesOptions, setCategoriesOptions] = useState<string[]>([]);
    const [selectValue, setSelectValue] = useState<TQuery>(``);

    const { collections, loading } = useCollections({
        brandsOptions,
        categoriesOptions,
        selectValue,
    });

    return (
        <>
            <MainNav>
                <Link href="/">Home</Link> / <span>Collections</span>
            </MainNav>
            <Div>
                <aside className="aside">
                    <div className="title">Filters</div>
                    <CheckBoxFilter
                        label="Brands"
                        options={brands}
                        onChange={setBrandsOptions}
                    />
                    <CheckBoxFilter
                        label="Categories"
                        options={categories}
                        onChange={setCategoriesOptions}
                    />
                </aside>
                <main className="main">
                    <div className="top">
                        <div className="title">Collections</div>
                        {/*{width > 640 ? (*/}
                        {/*  <SortSelect />*/}
                        {/*) : (*/}
                        {/*  <div className="sort-filter">*/}
                        {/*    <SmallSort />*/}
                        {/*    <SmallFilter brandItems={brands} categoryItems={categories} />*/}
                        {/*  </div>*/}
                        {/*)}*/}
                        <Selector
                            value={selectValue}
                            onChange={setSelectValue}
                        />
                    </div>
                    {collections?.length ? (
                        <div className="clothes">
                            {collections.map((collection) => (
                                <ProductCard
                                    key={collection.id}
                                    product={collection}
                                />
                            ))}
                        </div>
                    ) : loading ? (
                        <Center style={{ height: 500 }}>
                            <Loader color="indigo" size="xl" variant="dots" />
                        </Center>
                    ) : (
                        <Center style={{ height: 500 }}>
                            <EmptyResults />
                        </Center>
                    )}
                </main>
            </Div>
        </>
    );
};

export default ProductsPage;

import { Checkbox, CheckboxGroup } from "@mantine/core";
import { useState } from "react";

type Props = {
    brands: string[];
};

const BrandFilter = ({ brands }: Props) => {
    const [value, setValue] = useState<string[]>([]);

    return (
        <CheckboxGroup
            value={value}
            onChange={setValue}
            color="teal"
            orientation="vertical"
            label="Brand"
            spacing="sm"
        >
            {brands.map((brand, index) => (
                <Checkbox label={brand} value={brand} key={index} />
            ))}
        </CheckboxGroup>
    );
};

export default BrandFilter;

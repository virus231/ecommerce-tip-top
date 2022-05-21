import { Select } from "@mantine/core";
import { selectorItems } from "@/_mock/mock";
import { TQuery } from "@/@types/products";

type Props = {
    onChange: (value: TQuery) => void;
    value: TQuery;
};

export function Selector({ onChange, value }: Props) {
    return (
        <Select
            value={value}
            data={selectorItems}
            placeholder="Pick one"
            onChange={onChange}
            radius="md"
            size="sm"
            required
        />
    );
}

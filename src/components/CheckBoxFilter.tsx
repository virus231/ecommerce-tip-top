import { Box, Checkbox, CheckboxGroup } from "@mantine/core";

interface Props<TOption extends string> {
    options: TOption[];
    label: string;
    onChange: (value: TOption[]) => void;
}

export function CheckBoxFilter<TOption extends string>(props: Props<TOption>) {
    const { options, label, onChange } = props;

    return (
        <Box
            sx={() => ({
                marginTop: 10,
            })}
        >
            {` `}
            <CheckboxGroup
                // value={value}
                onChange={onChange}
                color="teal"
                orientation="vertical"
                label={label}
                spacing="sm"
            >
                {options.map((brand, index) => (
                    <Checkbox label={brand} value={brand} key={index} />
                ))}
            </CheckboxGroup>
        </Box>
    );
}

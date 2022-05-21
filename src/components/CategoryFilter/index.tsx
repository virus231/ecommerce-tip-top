import { Div } from "@/components/NavBar";

type Props = {
    items: string[];
};

const CategoryFilter = ({ items }: Props) => {
    return (
        <Div>
            <div className="heading">Category</div>
            {items
                .sort((a, b) => a.localeCompare(b))
                .map((value, index) => (
                    <div className="item" key={index}>
                        {/*<CheckBox />*/}
                        <span className="text">{value}</span>
                    </div>
                ))}
        </Div>
    );
};

export default CategoryFilter;

interface Props {
    tabs: string[];
    active: string;
    onChange: (tab: string) => void;
}

export function ProductTabs({ tabs, active, onChange }: Props) {
    return (
        <div className="product-tabs">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`product-tabs__item ${
                        active === tab ? "product-tabs__item--active" : ""
                    }`}
                    onClick={() => onChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
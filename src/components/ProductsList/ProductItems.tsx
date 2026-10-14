import { useState } from "react";
import { ProductTabs } from "../../features/Tabs/Tabs";
import ProductList from "../Products/Products";
import Container from "../../features/Container/Container";

const TABS = ["New Arrival", "Bestseller", "Featured Products"];

function ProductsItems() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <Container maxWidth="1600" padding="30">
            <ProductTabs
                tabs={TABS}
                active={activeTab}
                onChange={setActiveTab}
            />

            {/* key нужен, чтобы при смене таба ProductList перезагружался */}
            <ProductList key={activeTab} category={activeTab} />
        </Container>
    );
}

export default ProductsItems;
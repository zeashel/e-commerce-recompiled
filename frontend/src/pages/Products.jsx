import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import "../scss/product-grid.scss";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

function Products() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        // useEffect: run this code after React renders
        getProducts()
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
        console.log("fetched products from API");
    }, []);

    if (!products) return <Loading />;

    return (
        <div>
            <h1 className="mb-4">Product List</h1>

            <div className="product-grid">
                {products.map((p) => (
                    <ProductCard
                        key={p._id} // react only prop
                        id={p._id}
                        name={p.name}
                        price={p.price}
                        desc={p.desc}
                        img={p.img}
                        discount={p.discount}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;

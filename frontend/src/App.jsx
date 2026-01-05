import React, { useState, useEffect } from "react";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // simulasi ambil data
        const data = [
            {
                id: 1,
                name: "Sepatu",
                price: 200000,
                desc: "Sepatu premium berbahan kulit",
            },
            {
                id: 2,
                name: "Tas",
                price: 160000,
                desc: "Tas pesta berbahan kulit",
            },
            {
                id: 3,
                name: "Jaket",
                price: 200000,
                desc: "Jaket kulit premium berwarna hitam",
            },
        ];
        setProducts(data);
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>

            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    desc={p.desc}
                />
            ))}
        </div>
    );
}

export default App;

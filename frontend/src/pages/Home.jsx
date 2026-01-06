import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Online Shop</h1>
            <Link to="/products">Lihat Produk</Link>
        </div>
    );
}

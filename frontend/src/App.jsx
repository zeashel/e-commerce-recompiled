import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div>
            <nav style={{ marginBottom: 20 }}>
                <Link to="/">Home</Link> | <Link to="/products">Products</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}

export default App;

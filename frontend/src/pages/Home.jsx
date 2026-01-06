import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container py-4 text-center">
            <h1 className="display-1">Online Shop</h1>
            <Link className="btn btn-primary btn-lg" to="/products">
                Browse More Products
            </Link>
        </div>
    );
}

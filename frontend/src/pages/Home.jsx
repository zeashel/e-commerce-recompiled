import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <div className="container py-4 text-center">
            <h1 className="display-1 fw-bold text-decoration-underline link-underline-primary">
                Recompiled.
            </h1>
            <p className="text-muted lead">
                Retro technology, carefully{" "}
                <span className=" text-body">recompiled</span> for today.
            </p>
            <Carousel />
            <Link className="btn btn-primary btn-lg hover-btn" to="/products">
                Browse Inventory
            </Link>
        </div>
    );
}

// bootstrap
import "./scss/custom.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// react
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

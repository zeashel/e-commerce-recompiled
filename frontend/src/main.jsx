// bootstrap
import "./scss/custom.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// react
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// global scss
import "./scss/global.scss";

import App from "./App";

import { initGA } from "./utils/analytics";
import GAListener from "./components/GAListener";

initGA();

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GAListener />
        <App />
    </BrowserRouter>
);

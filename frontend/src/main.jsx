// bootstrap
import "./scss/custom.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// react
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

// global scss
import "./scss/global.scss";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <App />
    </HashRouter>
);

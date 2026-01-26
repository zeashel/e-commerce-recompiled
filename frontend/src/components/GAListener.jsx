import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "../utils/analytics";

export default function GAListener() {
    const location = useLocation();

    useEffect(() => {
        logPageView(location.pathname + location.search);
    }, [location.pathname, location.search]);

    return null;
}

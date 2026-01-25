import { useEffect, useState } from "react";
import "../scss/alert.scss";

export default function Alert({
    message,
    type = "danger",
    onClose,
    duration = 5000,
}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!message) return;

        // let initial styles render first
        requestAnimationFrame(() => {
            setVisible(true);
        });

        const hideTimer = setTimeout(() => {
            setVisible(false);
        }, duration - 300);

        const removeTimer = setTimeout(() => {
            onClose?.();
        }, duration);

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(removeTimer);
        };
    }, [message, duration, onClose]);

    if (!message) return null;

    return (
        <div
            className={`alert-wrapper h4 fw-normal ${
                visible ? "alert-enter" : "alert-exit"
            }`}
        >
            <div className={`alert alert-${type}`}>{message}</div>
        </div>
    );
}

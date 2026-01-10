import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/", { replace: true });
        }
    };

    return (
        <button
            type="button"
            className="btn btn-link p-0 mx-0 mb-3"
            onClick={handleBack}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.25em"
                height="1.25em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left-icon lucide-chevron-left"
                style={{
                    marginBottom: "2px",
                    marginLeft: "-5px",
                }}
            >
                <path d="m15 18-6-6 6-6" />
            </svg>
            Go Back
        </button>
    );
}

export default BackButton;

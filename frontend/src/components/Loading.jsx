export default function Loading() {
    return (
        <>
            <div className="vh-60 d-flex flex-column align-items-center justify-content-center">
                <div
                    className="spinner-border text-primary"
                    role="status"
                    style={{ width: "3rem", height: "3rem" }}
                ></div>
                <p className="display-6 mt-3">Loading</p>
            </div>
        </>
    );
}

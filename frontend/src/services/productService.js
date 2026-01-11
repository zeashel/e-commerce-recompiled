// front-end only demo
import products from "./products";

export const getProducts = async () => {
    // return a clone to avoid callers mutating the module array
    return JSON.parse(JSON.stringify(products));
};

export const getProductById = async (_id) => {
    const product = products.find((p) => String(p._id) === String(_id));
    // match original API behavior: resolve with object
    return product ? JSON.parse(JSON.stringify(product)) : null;
};

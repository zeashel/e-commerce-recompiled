const CART_KEY = "cart";

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(p => p.productId === product.productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function removeFromCart(productId) {
    const cart = getCart().filter(p => p.productId !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart() {
    localStorage.removeItem(CART_KEY);
}

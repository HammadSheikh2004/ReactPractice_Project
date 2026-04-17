import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let items = action.payload;
            let existingItem = state.cartItems.find(i => i.id === items.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    ...items,
                    quantity: 1,
                    price: items.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += items.price;
                alert("This product already in cart. Quantity is updated!")
            }
            state.totalPrice += items.price;
        },
        removeToCart: (state, action) => {
            let id = action.payload;
            let existingItem = state.cartItems.find(i => i.id === id);
            if (existingItem) {
                state.totalQuantity--;
                state.totalPrice -= parseFloat(existingItem.price.toFixed(2));
                if (existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(i => i.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= parseFloat(existingItem.price.toFixed(2))
                }
            }
            state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
            if (state.cartItems.length === 0) {
                state.totalPrice = 0;
                state.totalQuantity = 0;
            }
        },
        increaseItem: (state, action) => {
            let id = action.payload;
            let item = state.cartItems.find(i => i.id === id);
            if (item) {
                item.quantity++;
                item.totalPrice += item.price;
                state.totalQuantity++;
                state.totalPrice += item.price;
            }
        }
    }
});

export const { addToCart, removeToCart, increaseItem } = cartSlice.actions;
export default cartSlice.reducer;
const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");// luu bang json

export default function cartReducer(state = initialCart, action: any) {
  switch (action.type) {
    case "ADD_CART": {
      const item = state.find((products: any) => products.id === action.payload.id);
      if (item) {
        if (item.quantity < item.stock) {
          item.quantity += 1;
        } else {
          alert("Số lượng sản phẩm vượt quá số lượng trong kho");
        }
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify([...state]));
      return [...state];
    }

    case "UPDATE_QUANTITY": {
      return state.map((products: any) =>
        products.id === action.payload.id
          ? {
              ...products,
              quantity: Math.max(1, Math.min(action.payload.quantity, products.stock)),
            }
          : products
      );
    }

    case "REMOVE_FROM_CART": {
      const newCart = state.filter((products: any) => products.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    }

    default:
      return state;
  }
}

import { useSelector, useDispatch } from "react-redux";
export default function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum: number, product: any) => sum + product.price * product.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Empty product in your cart</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: any, index: number) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price} USD</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: event.target.value },
                      })
                    }
                  />
                </td>
                <td>
                  <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: {id:item.id, quantity:item.quantity}})}>Update</button>
                  <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="total">Total: {total} USD</div>
      {cart.length > 0 && (
        <p>There are <b>{cart.length}</b> items in your shopping cart.</p>
      )}
    </div>
  );
}

import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import {useSelector} from "react-redux"

export const Cart = () => {
  useTitle("Cart");
  
  const products = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);
  

  return (
    <main>
      <section className="cart">
        <h1 className="" >Cart Items: {products.length}</h1>
        <h1>Price: {total}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}

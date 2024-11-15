import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { decrement, increment } from "../store/counterSlice"
import { getProducts } from "../store/productSlice"
import Layout from "../components/layout/layout"

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const { products, status } = useSelector((state) => state.products)
  return (
    <Layout>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button aria-label="Increment value" onClick={() => dispatch(getProducts())}>
          fetch Products
        </button>
      </div>

      <div style={{ margin: 10 }}>
        <div>{status}</div>
        <div>{products.length}</div>
        {products && products.length && (
          <div>
            {products.map((product) => {
              return <div>{product.title}</div>
            })}
          </div>
        )}
      </div>
      <div>Jekins push from github webhook</div>
    </Layout>
  )
}

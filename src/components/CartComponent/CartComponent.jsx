import React from 'react'
import { useSelector } from 'react-redux'

const CartComponent = () => {
  
    const user = useSelector( state => state.loginPageReducer.user)
    const products = useSelector(state => state.listProductsReducer.products)
  
      const matchProducts = (productId) => {
      const res = products.find(p => p.id == productId)
      console.log('res',productId);
      
      return res
    }

  
    return (
    <div>
          <h2>Mi carrito</h2>
        {
            !user.cart 
                ? (<div>No hay productos en el carrito</div>)
                : (
                  user.cart.map((product, idx) => {
                    const p = matchProducts(product.productId)
                    if (!p) return
                    return (
                      <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
                        <div>
                          <img style={{width: 150, height: 150}} src={p.imagen_url} alt="" />
                        </div>
                        <div>{p.nombre}</div>
                        <div>{p.descripcion}</div>
                        <div>{p.precio}</div>
                      </div>
                    )
                  })
                )
        }

    </div>
  )
}

export default CartComponent
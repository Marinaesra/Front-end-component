import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductsActions } from './ListaProductosAction'
import { getProducts } from '../../core/services/productsFetch'

const ListaProductosComponent = () => {

    const dispatch = useDispatch()

    const productList = useSelector ((state) => state.listaProductosReducer.products)
    /*const user = useSelector ((state) => state.loginPageReducer.user)*/

    const loadProducts = async () => {
        const aux = await getProducts()
        dispatch (
            loadProductsActions(
                {
                    products: aux.products
                }
            )
        )
    }

useEffect(() => {
    loadProducts()
  },[])

  return (
    <div>
        <h2>Lista de productos</h2>
        <hr />
      {
        !productList 
          ? (<div>Loading...</div>)
          : (
            productList.map((p,idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
                <div>
                  <img style={{width: 150, height: 150}} src={p.image_url} alt="" />
                </div>
                <div>{p.name}</div>
                <div>{p.description}</div>
                <div>{p.price}</div>
                <div>
                  <button>Añadir al carrito</button>
                </div>
              </div>
            ))
          )
      }
    </div>
  )
}

export default ListaProductosComponent
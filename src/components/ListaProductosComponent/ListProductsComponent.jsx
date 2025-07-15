import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductsActions } from './ListProductsAction'
import { getProducts } from '../../core/services/productsFetch'

const ListaProductosComponent = () => {

    const dispatch = useDispatch()

    const productList = useSelector ((state) => state.listaProductosReducer.products)
    

    const loadProducts = async () => {
        const aux = await getProducts()
        dispatch (
            loadProductsActions(
                {
                    products: aux.products,
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
      {!productList? (
        <div>Loading...</div>
      ) : (
            productList.map((p, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
                <div>
                  <img style={{width: 150, height: 150}} src={p.image_url} alt="" />
                </div>
                <span> Nombre: {p.name}</span>
                <span>Descripcion: {p.description}</span>
                <span>Precio: {p.price}</span>
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
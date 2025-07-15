import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductsActions } from './ListProductsAction'
import { getProducts } from '../../core/services/productsFetch'
import { useNavigate } from 'react-router'

const ListaProductosComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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


const gotoDetail = async () =>{
  navigate ('/details')
}

const goToHome = async () =>{
  navigate ('/')
}

const gotoProfile = async () =>{
  navigate ('/profile')
}

  return (
    <div>
        <h2>Lista de productos</h2>
        <div>
                  <button onClick={gotoProfile}>Mi Perfil</button>
                </div>
        <hr />
      {!productList? (
        <div>Loading...</div>
      ) : (
            productList.map((p, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
                <div>
                  <img style={{width: 150, height: 150}} src={p.image_url} alt="" />
                </div>
                <span> {p.name}</span>
                <span> {p.price}</span>
                <div>
                  <button>Añadir al carrito</button>
                </div>
                <div>
                  <button onClick={gotoDetail}>Detalles</button>
                </div>
              </div>
            ))
          )
      }
      <div>
                  <button onClick={goToHome}>Volver</button>
                </div>
    </div>
  )
}

export default ListaProductosComponent
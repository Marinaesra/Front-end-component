import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getDetailsProduct } from '../../core/services/productsFetch'
import { loadProductsActions } from '../../components/ListaProductosComponent/ListProductsAction'
import { useEffect } from 'react'

const DetailsProductComponent = () => {
const dispatch = useDispatch()
    const navigate = useNavigate()

    const productDetails = useSelector ((state) => state.listaProductosReducer.products)

    const loadProducts = async (productId) => {
            const aux = await getDetailsProduct(productId)
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

 const goToList = async () =>{
  navigate ('/list')
}

  return (
        <div>
        <h2>Detalles de los productos</h2>
              {!productDetails? (
        <div>Loading...</div>
      ) : (
            productDetails.map((p, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'space-between'}}>
                <div>
                  <img style={{width: 150, height: 150}} src={p.image_url} alt="" />
                </div>
                <span> {p.name}</span>
                <span> {p.description}</span>
                <span> {p.price}</span>
                <div>
                  <button onClick={goToList}>Volver</button>
                </div>
              </div>
            ))
          )
      }
    </div>
  )
}

export default DetailsProductComponent
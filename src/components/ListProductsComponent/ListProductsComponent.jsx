import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductsActions } from './ListProductsAction'
import { getProducts } from '../../core/services/productsFetch'
import { useNavigate } from 'react-router'
import { detailsProductAction } from '../DetailsProductComponent/DetailsProductComponentActions'
import { addProductToCart } from '../../core/services/userFetch'

const ListProductsComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const productList = useSelector ((state) => state.listProductsReducer.products)
    const user = useSelector((state) => state.loginPageReducer.user)
    

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


const gotoDetail = async (productId) =>{
  dispatch(
    detailsProductAction({
      productId: productId
    })
  )
  navigate ('/details')
}

const goToHome = async () =>{
  navigate ('/')
}

const gotoProfile = async () =>{
  navigate ('/profile')
}


 const addToCart = async (productId) => {
    const res = await addProductToCart(user.id, productId)

    dispatch(
      loadInfoActions(
        {
          user: res.user
        }
      )
    )
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
                  <button onClick={addToCart}>Añadir al carrito</button>
                </div>
                <div>
                  <button onClick={() => {gotoDetail(p.id)}}>Detalles</button>
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

export default ListProductsComponent
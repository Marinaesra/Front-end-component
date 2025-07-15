import React from 'react'
import ListaProductosComponent from '../../components/ListaProductosComponent/ListProductsComponent'
import Menucomponent from '../../components/MenuComponent/Menucomponent'

const ListPageProducts = () => {
  return (
    <div>
      <Menucomponent/>
      <hr />
        <ListaProductosComponent/>
    </div>
  )
}

export default ListPageProducts
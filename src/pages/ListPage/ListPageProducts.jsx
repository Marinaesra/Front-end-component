import React from 'react'
import ListProductsComponent from '../../components/ListProductsComponent/ListProductsComponent'
import Menucomponent from '../../components/MenuComponent/Menucomponent'

const ListPageProducts = () => {
  return (
    <div>
      <Menucomponent/>
      <hr />
        <ListProductsComponent/>
    </div>
  )
}

export default ListPageProducts
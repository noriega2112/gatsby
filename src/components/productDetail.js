import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat'
import { Tag, QtyButton, QtySelect, Button, StyledProductDetail } from '../styles/components'
import { SEO, Stars } from './'
import { CartContext } from '../context'

export default function ProductDetail({ id, product: { name, images }, unit_amount }) {
   const formatedPrice = priceFormat(unit_amount)
   const [qty, setQty] = useState(1)
   const { addToCart } = useContext(CartContext)

   const handleSubmit = () => {
      addToCart({ id, unit_amount, name, images, qty })
   }

   return (
      <StyledProductDetail>
         <SEO title={name} />
         <img src={images[0]} alt={name} />
         <div>
            <Tag>Popukar</Tag>
            <h2>{name}</h2>
            <b>{formatedPrice}</b>
            <Stars />
            <p>Cantidad:</p>
            <QtySelect>
               <QtyButton onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</QtyButton>
               <input type="text" disabled value={qty} />
               <QtyButton onClick={() => (setQty(qty + 1))}>+</QtyButton>
            </QtySelect>
            <Button onClick={handleSubmit}>Agregar al Carrito</Button>
         </div>
      </StyledProductDetail>
   )
}

import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function gracias() {
   return (
      <div>
         <SEO title='Compra Cancelada' />
         <Purchase>
            <h2>Compra Cancelada</h2>
            <p>Una pena que no hayas podido obtener tu swag</p>
            <p>No te preocupes, el swag siempre te esperará aqui!</p>
            <span role='img' aria-label='emoji'>💛</span>
            <Link>
               <Button>Volver al Catálogo</Button>
            </Link>
         </Purchase>
      </div>
   )
}

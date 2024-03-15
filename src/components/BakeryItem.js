// TODO: create a component that displays a single bakery item
import React from 'react'

export default function BakeryItem(props) {
  return (
    <div class="item-card">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <img src={props.image} alt={props.name} />
        <p>${props.price}</p>
        <button onClick={(e) => props.addToCart(props.item)}>Add to cart!</button>
    </div>
  )
}

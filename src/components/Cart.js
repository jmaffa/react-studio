import React from 'react'

export default function Cart(props) {
    const calcTotal = (cartItems) => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price;
        });
        return Math.round(total * 100) / 100;
    }
  return (
    <div>
        <h2>Cart</h2>
        <div>
            <ul class="cart-list">
                {props.cartItems.map((item, index) => (
                    <div class="cart-item">
                        <li key={index}>{item.name}</li>
                        <p>{item.price}</p>
                    </div>
                ))}
            </ul>
            <div>
                <h3>Total: {calcTotal(props.cartItems)}</h3>
            </div>
        </div>
    </div>

  )
}

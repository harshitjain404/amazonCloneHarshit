import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
// import Product from "./reducer"
import {useStateValue} from "./StateProvider"
import { getBasketTotal } from './reducer';
function subtotal() {

    const [{basket},  dispatch] = useStateValue();
//     function totalPrice  () {
//  return( basket.price )
//     }
    
    return (
        <div className="subtotal">
             <CurrencyFormat   displayType={'text'} renderText={(value) => <div>
                 <>
                 <p>
             Subtotal ( {basket.length} items):  <strong>{value}</strong>
                     <small className="subtotal__gift"><input type="checkbox"/>This order contains a Gift</small>
                 </p>
                 </>
             </div> } 
              thousandSeparator={true} 
              decimalScale={2}
              value={getBasketTotal(basket)}
              prefix={'$'} />
         <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default subtotal

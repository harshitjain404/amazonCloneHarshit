import React from 'react'
import "./checkout.css"
import Subtotal from "./subtotal"
import Checkoutproduct from "./checkoutProduct";
import { useStateValue } from './StateProvider';
function checkout() {

    const [{ basket ,user  }, dispatch] = useStateValue();
console.log(user);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                className="checkout_ad" alt=""/>
            <div>
    <h3>Hello {user?.email}</h3>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>


                {basket.map(item => (
                    <Checkoutproduct 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    />
                ))}
             
            </div>
            </div>
            <div className="checkout__right">
           
                <Subtotal/> 
                
            </div>
            
        </div>
    )
}

export default checkout

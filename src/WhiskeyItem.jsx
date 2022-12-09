import './css/WhiskeyItem.css'
// import React from "react"

export const WhiskeyItem = (props) => {
    return (
        <div className='whiskeyItem' key = {props.item.index} alt={props.item.name}>
            <img className='whiskeyitemIMG' src = {props.item.picture} alt = {props.item.index}/>
            <h2>{props.item.name}</h2>
            <h4>{props.item.age} Years</h4>
            <h3>${props.item.price}</h3> 
            <h3>{props.item.region}</h3>
            <div>
                <button onClick={()=> props.updateCart(props.item.index)}>Add to Cart</button>
            </div>
        </div>
    )
}
// export default Whiskeyitem;
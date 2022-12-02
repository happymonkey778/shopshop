import './css/WhiskeyItem.css'
// import React from "react"

export const WhiskeyItem = ({item}) => {
    console.log(item)
    return (
        <div className='whiskeyItem' key = {item.index}>
            <img className='whiskeyitemIMG' src = {item.picture} alt = {item.index}/>
            <h2>{item.name}</h2>
        </div>
    )
}
// export default WhiskeyItem;
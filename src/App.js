import './App.css';
import whiskeys from './whiskeyData.json';
import { WhiskeyItem } from './WhiskeyItem.jsx';
import { CartItem } from './CartItem.jsx';
import { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function App() {

  const [cart, setCart] = useState(Array(whiskeys.length).fill(0));
  const [order, setOrder] = useState([]);
  const [whiskeyRegions, setWhiskeyRegions] = useState(["Highland","Lowland", "Speyside", "Campbeltown"]);
  const [whiskeyAges, setWhiskeyAges] = useState(["10", "10-20","20+"]);

  const updateCart = (index) => {
    const newArr = [...cart]
    newArr[index]++
    setCart(newArr)
  }

  const removeFromFav = (index) => {
    console.log(cart)
    const newArr = [...cart]
    newArr[index]--
    console.log(newArr)
    setCart(newArr)
  }

  const resetCart = () => {
    setCart(Array(whiskeys.length).fill(0))
  }

  const sorting = (a,b) => {
    if(order === "Pricing High to Low"){
      if(a.price > b.price){
        return -1;
      } else {
        return 1;
      }
    } else if (order === "Pricing Low to High"){
      if(a.price < b.price){
        return -1;
      } else {
        return 1;
      }
    }
    return 0
  }
  

  const regionFilter = (region) => {
    let regions = [...whiskeyRegions];
    if (! (whiskeyRegions.includes(region))){
      regions.push(region);
    } else {
      regions.splice(whiskeyRegions.indexOf(region), 1)
    }
    setWhiskeyRegions(regions)
  }

  const ageFilter = (ageRange) => {
    let ageRanges = [...whiskeyAges];
    if (! (whiskeyAges.includes(ageRange))){
      ageRanges.push(ageRange);
    } else {
      ageRanges.splice(whiskeyAges.indexOf(ageRange), 1)
    }

    setWhiskeyAges(ageRanges)
  }
  const filtersApplied = (item) => {
    return whiskeyRegions.includes(item.region) && whiskeyAges.includes(item.ageRange)
  };

  // const resetMenu = () => {
  //   setOrder([]);
  //   setWhiskeyRegions(["Highland","Lowland", "Speyside", "Campbeltown"]);
  //   setWhiskeyAges(["10", "10-20","20+"]);
  // }



  return (
    <div className="App">
      <h1>Monkey's Whiskey Store</h1>

      <div className='filterMenu'>
        <h2>Filter by Region</h2> 
      <ToggleButtonGroup type="checkbox" size="sm" defaultValue={[0, 1, 2, 3]} className="regionCheckBox">
        {["Highland","Lowland", "Speyside", "Campbeltown"].map((region, index) =>
        <ToggleButton key={region} id = {region} value = {index} onChange = {()=>regionFilter(region)}>{region} </ToggleButton>)}
      </ToggleButtonGroup>
      <h2>Filter by Age</h2> 
      <ToggleButtonGroup type="checkbox" size="sm" defaultValue={[0, 1, 2]} className="ageCheckBox">
        {["10","10-20","20+"].map((ageRange, index) => 
        <ToggleButton key={ageRange} id = {ageRange} value = {index} onChange = {()=>ageFilter(ageRange)}>{ageRange} </ToggleButton>)}
      </ToggleButtonGroup>
      </div>
      <h2>Sort By</h2> 
      <div style = {{paddingBottom : "50px"}} className="sortMenu">
      <ToggleButtonGroup name ="mason" size="sm" type="radio" defaultValue={[]} className="sortedMenu">
        {["Pricing High to Low","Pricing Low to High"].map((sortOrderChoice, index) =>
        <ToggleButton key={sortOrderChoice} id = {sortOrderChoice} value = {index} onClick = {()=>setOrder(sortOrderChoice)}>{sortOrderChoice} </ToggleButton>)}
      </ToggleButtonGroup>
      </div>
      <div className='whiskeyMenu'>
        {whiskeys.filter((whiskey)=> filtersApplied(whiskey)).sort((a,b) => sorting(a,b)).map((whiskey) => (
          <WhiskeyItem key= {whiskey} item = {whiskey} updateCart={updateCart}/>
        )
        )}
      </div>

      <div style = {{paddingBottom : "60px"}}>
        <h2>Cart</h2>
          {/* {cart.map((item,index) => (item))} */}
          {cart.map((count, index)=> count? <CartItem key= {index} cartItem = {whiskeys[index]} count ={count} removeFromFav={removeFromFav} updateCart={updateCart} /> :<></>)}
          <h3>Total : $
          {(cart.reduce((a,b,index) => {
            return a + b*whiskeys[index].price}, 0)).toFixed(2)} </h3>
          {/* TODO: render a list of items in the cart */}
          {cart.reduce((a,b) => {
            return a + b}, 0) > 0 && <button style = {{width : "150px", height : "85px"}} onClick = {() => resetCart()}><h2>RESET THE CART</h2></button>}
      </div>
      {/* {names.map((name,_)=><h1>{name}</h1>)} */}
    </div>
  )
}

export default App;

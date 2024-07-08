/* eslint-disable react/prop-types */
import { createContext,useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontext = createContext(null);

const StoreContextprovider = (props) => {
  const [cartItems,setcartItems]= useState({});
  const addtocart=(itemId)=>{
    if(!cartItems[itemId]){
        
        setcartItems((prev)=>({...prev,[itemId]:1}))
    }else{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromcart=(itemId)=>{
    
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
  }

const gettotalcartamount=()=>{
let totalamount=0;
for(const item in cartItems){
  if(cartItems[item]>0){
  let iteminfo=food_list.find((product)=>product._id === item);
  totalamount =totalamount + iteminfo.price*cartItems[item];
}
}
return totalamount;
}

  const contextvalue = {
    food_list,cartItems,setcartItems,addtocart,removeFromcart,gettotalcartamount
  };
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StoreContextprovider;

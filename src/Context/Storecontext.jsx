/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext,useEffect,useState } from "react";
export const Storecontext = createContext(null);

const StoreContextprovider = (props) => {
  const [cartItems,setcartItems]= useState({});
  const [token,settoken]= useState("");
  const url="http://localhost:4000"
  const [food_list,setFoodlist]= useState([]);

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

const fetchFoodlist=async ()=>{
  const response=await axios.get(url+"/api/food/list")
  setFoodlist(response.data.data);
}

useEffect(()=>{
  if(localStorage.getItem('token')){
    settoken(localStorage.getItem('token'));
  }
  async function loadData(){
    await fetchFoodlist();
  }
  loadData();
},[])
  const contextvalue = {
    food_list,cartItems,setcartItems,addtocart,removeFromcart,gettotalcartamount,url,token,settoken
  };
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StoreContextprovider;

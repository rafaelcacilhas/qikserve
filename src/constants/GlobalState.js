import React, { useState } from "react";
import axios from "axios";

export const GlobalContext = React.createContext();

const GlobalState = (props) => {


    const [foodList, setFoodList]   = useState( );
    const [cart, setCart]           = useState();
    const [productDet,setProductDet]= useState([]); //Saves the details of the selected product 
    


    const URL = 'http://localhost:8081/products'

    const getFoodList = async() => {

        if(foodList){
        }
        else{
            axios
                .get(URL)
                .then( (response) => {
                    setFoodList(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
    };

    return(

        <GlobalContext.Provider
            value={{
                foodList,
                setFoodList,
                getFoodList,
                cart,
                setCart,
                productDet,
                setProductDet,
            }}
        >
                {props.children}
        </GlobalContext.Provider>  
    )

}

export default GlobalState;
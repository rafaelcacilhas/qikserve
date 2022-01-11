import React              from "react";
import { useEffect}       from "react";
import { useContext}      from "react";
import { useHistory}      from "react-router-dom";

import {GlobalContext}    from "../constants/GlobalState";
import Product            from "../components/Product";
import { goToCart }       from "../routes/coordinator";

import Box                from "@mui/material/Box";
import Button             from "@mui/material/Button";







const Home = () => {
    const history = useHistory()

    const {foodList, getFoodList}   = useContext(GlobalContext);
    const {cart}                    = useContext(GlobalContext);


    useEffect(getFoodList)  //gets the foodlist as soon as possible


    const renderList = () => {  // render the products list

        const list = foodList.map(  (   { name, price,id } )   => (
            <Product  key={id} name={name} price={price} id={id}  />
        ))

        return ( list )

    }

    
//render the checkout button when the cart is not empty
    const renderCheckout = () => {

        if(cart === undefined){
            return (<></>)
        }
        else {
            return (<Button sx={{width: '50%',color:'white'}} onClick={() => goToCart(history)} variant="contained" >Checkout</Button>)
        }
    }


    return(

        <Box sx={{
            display:            'flex',
            justifyContent:     'center',
            height:             '90vh',
            width:              '100vw'
        }}>

            {foodList? (     
            <Box>
                <Box>
                    {renderList()}
                </Box>

                <Box sx={{ marginTop:'10%',display:'flex',justifyContent:'center'}}>
                    {renderCheckout()}
                </Box>

            </Box>


            ):( 

            <Box >                
                
                <h1>Loading...</h1>
                <h4>If it takes too long make sure you have the API launched</h4>
                    
            </Box>

            )}




        </Box>
    )
}

export default Home
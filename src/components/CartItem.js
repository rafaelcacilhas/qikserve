import React                from "react";
import { useContext}        from "react";

import {GlobalContext}      from "../constants/GlobalState";

import Box                  from "@mui/material/Box";
import Typography           from '@mui/material/Typography';



const CartItem = ({name, price, id}) => {


    const {cart}                        = useContext(GlobalContext);



//Gives the cart index for a product id
    const calculateIndex = (id) => {

        for(let i = 0; i < cart.length; i++) {
            if(cart[i].id === id) {
                return i
            }
        }
    }

    const calculateDiscount = (id) => {
        const index = calculateIndex(id)

        if(cart[index].promotions[0]) {

            if( cart[index].promotions[0].type === 'QTY_BASED_PRICE_OVERRIDE') {

                if(cart[index].number >= 2){

                    let discount = (  Number(cart[index].number) *  Number(cart[index].price) ) -  Number(cart[index].promotions[0].price)
                    discount = discount / 100
                    discount = discount.toFixed(2)
                    return discount
                }
                else{
                    return 
                }

            }

            else if( cart[index].promotions[0].type === 'BUY_X_GET_Y_FREE') {

                if(cart[index].number % 2 === 0){
                    let discount = (  cart[index].number / 2    ) *  cart[index].price
                    discount = discount / 100
                    discount = discount.toFixed(2)
                    return discount
                }

                else {
                    let discount = ( ( cart[index].number - 1) / 2  )   *  cart[index].price 
                    discount = discount / 100
                    discount = discount.toFixed(2)
                    return discount
                }
            }

            else if( cart[index].promotions[0].type === 'FLAT_PERCENT') {
                let discount =   Number(cart[index].number)  *  Number(cart[index].price) * Number(cart[index].promotions[0].amount) /100
                discount = discount / 100
                discount = discount.toFixed(2)
                return discount
            }

        }

        else {
            return 0
        }
        
    }




    return(


        <Box sx={{
            border:             '1px solid gray',            
            borderRadius:       '8pt',
            width:              '90vw',
            height:             '15vh',
            marginTop:          '2vh',
            display:            'flex',
            flexDirection:      'column',
            alignItems:         'center'
            
        }}>


            <Box sx={{ width:'100%',display:'flex', justifyContent:'space-around'}}>

                <Box sx={{width:'10%',height:'5vh',borderRadius:'8pt',marginRight:'-0.5%',marginTop:'-0.5%', display:'flex',justifyContent:'center',alignItems:'center'}} >
                </Box>
                
                <Box sx={{width:'90%',display:'flex',justifyContent:'center'}}>
                    <Typography color="#E86E5A">
                            {name} 
                    </Typography>
                </Box>

                <Box sx={{width:'10%',height:'5vh',borderRadius:'8pt',marginRight:'-0.5%',marginTop:'-0.5%', display:'flex',justifyContent:'center',alignItems:'center'}} >

                </Box>
            </Box>

            <Box sx={{ width:'100%', display:'flex',justifyContent:'space-around',padding:'0'}}>
                <Box sx={{ width:'110px'}}>
                    <Typography>
                        Unitary price:
                    </Typography>
                </Box>

                <Box sx={{width:'150px'}}>
                    <Typography>
                        ${price/100}
                    </Typography>
                </Box>

                <Box>
                    <Typography>
                        x{  cart[calculateIndex(id)].number}
                    </Typography>
                </Box>

            </Box>

            <Box sx={{ width:'100%', display: 'flex', justifyContent:'space-around',alignItems:'flex-end',height:'20vh'}}>
                <Box sx={{ width:'110px'}}>
                    <Typography>
                        Discount:
                    </Typography>
                </Box>

                <Box sx={{width:'120px'}}>
                    <Typography variant="body1">

                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        {`-$${calculateDiscount(id)}`}
                    </Typography>
                </Box>
            </Box>


        </Box>
    )
}

export default CartItem
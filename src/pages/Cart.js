
import React            from "react";
import { useContext }   from "react";
import {GlobalContext}  from "../constants/GlobalState";
import CartItem         from "../components/CartItem";

import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';
import Typography       from '@mui/material/Typography';
import Radio            from '@mui/material/Radio';
import RadioGroup       from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl      from '@mui/material/FormControl';



const Cart = ({discountTotal}) => {

    const { cart }          = useContext(GlobalContext);

//Render the cart itens list
    const renderList = () => {


        const list = cart.map(  (   { name, price,id } )   => (
            <CartItem  key={id} name={name} price={price} id={id} discountTotal={discountTotal} />
            )
        )

        return ( list )

    }


    const calculateSubtotal = () => {
        let sub = 0
        if(cart){
            for(    let i=0; i< cart.length;    i++ ){
                sub = sub + cart[i].number*cart[i].price             
            }
            sub = sub/100
            sub = sub.toFixed(2)
            return sub
        }
        else{ 

            return 0
        }
    }


    const calculateDiscount = () => {

        if(cart){
            let sum = 0
            let discountArray = [];

            for(let index = 0 ; index < cart.length ; index++){
            
                if(cart[index].promotions[0]) {

                    if( cart[index].promotions[0].type === 'QTY_BASED_PRICE_OVERRIDE') {

                        if(cart[index].number >= 2){
                            const discount = (  Number(cart[index].number) *  Number(cart[index].price) ) -  Number(cart[index].promotions[0].price)
                            discountArray[index] = discount
                        }
                        else{
                            discountArray[index] = 0 
                        }

                    }

                    else if( cart[index].promotions[0].type === 'BUY_X_GET_Y_FREE') {

                        if(cart[index].number % 2 === 0){
                            const discount = (  cart[index].number / 2    ) *  cart[index].price
                            discountArray[index] =  discount
                        }

                        else {
                            const discount = ( ( cart[index].number - 1) / 2  )   *  cart[index].price 
                            discountArray[index] =  discount
                        }
                    }

                    else if( cart[index].promotions[0].type === 'FLAT_PERCENT') {
                        const discount =   Number(cart[index].number)  *  Number(cart[index].price) * Number(cart[index].promotions[0].amount) /100
                        discountArray[index] =  discount
                    }

                }

                else {
                    discountArray[index] = 0
                }

            }

            for (let i = 0 ; i < discountArray.length; i++){
                sum = sum + discountArray[i]
            }


            let sumRight = sum / 100
            sumRight = sumRight.toFixed(2)
            
            return sumRight

        }


        return 0
    }


//Garantees that the return has two digits after the dot
    const calculateTotal = (total)  => {
        let totalRight = total
        totalRight = totalRight.toFixed(2)

        return totalRight
    }


    return (
        <Box 
        sx={{
            display:        'flex',
            marginRight:    '0px',
            marginBottom:   '16px',
            flexDirection:  'column',
            alignItems:     'center',
            bgcolor:        'primary.lighter',
            maxWidth:       '98.5vw',
            minHeight:      '110vh'
        }}>        
        



            <Box>
                <Box
                sx={{
                    marginTop:      '-2vh',
                    flexDirection:  'column',
                    alignItems:     'center',
                    justifyContent: 'center',
                    width:          '100vw',
                    height:         '64px',
                    display:        'flex',
                }}>
                    <Typography  color = "textPrimary" variant="h6"> 
                        My cart
                    </Typography> 
                </Box>
    
    
                <Box
                sx={{
                    display:        'flex',
                    flexDirection:  'column',
                    alignItems:     'flex-start',
                    justifyContent: 'center',
                    bgcolor:        "grayBack.main",
                    width:          '100%',
                    height:         '76px',
                    paddingLeft:    '4.5vw',
                }}>
                    <Typography color='grayBack.contrastText'>
                        Delivery Address
                    </Typography>
    
                    <Typography variant='bold'>
                        User Address here
                    </Typography>
                </Box>
    
                <Box
                sx={{
                    flexDirection:  'column',
                    alignItems:     'center',
                    width:          '100%',
                    minHeight:      '42px',
                    display:        'flex',
                    marginTop:      '8px',
                }}>
                    {cart?          
                    (
                    <Box>  
                        {renderList()}                    
                    </Box> 
                    ):(
                    <Typography  color = "textPrimary" variant="body1"> 
                        Empty Cart 
                    </Typography>
                    )
                    }
    
    
    
    
    
                </Box>
    
                <Box
                sx={{
                    justifyContent: 'space-between',
                    width:          '100%',
                    height:         '18px',
                    display:        'flex',
                    marginTop:      '16px'
                }}>
                    <Box sx={{     marginLeft: '8px'}}>                
                        <Typography  color = "textPrimary" variant="body1"> 
                            SUBTOTAL 
                        </Typography>
                    </Box>
    
                    <Box sx={{       marginRight: '8px'}}>                
                        <Typography  color = "primary" variant="body1"> 
                            ${calculateSubtotal()}
                        </Typography>
                    </Box>
                </Box>

                <Box
                sx={{
                    justifyContent: 'space-between',
                    width:          '100%',
                    height:         '18px',
                    display:        'flex',
                    marginTop:      '8px'

                }}>
                    <Box sx={{     marginLeft: '8px'}}>                
                        <Typography  color = "textPrimary" variant="body1"> 
                            DISCOUNT 
                        </Typography>
                    </Box>
    
                    <Box sx={{       marginRight: '8px'}}>                
                        <Typography  color = "primary" variant="body1"> 
                            ${  calculateDiscount()  }
                        </Typography>
                    </Box>
                </Box>

<Box sx={{ 
                        margin:'0',
                        marginLeft:'8px', 
                        marginTop:'4px',
                        width: '95%',  
                        borderTop: '1px solid black'}}
                        >
</Box>

                <Box
                sx={{
                    justifyContent: 'space-between',
                    width:          '100%',
                    height:         '18px',
                    display:        'flex',
                    marginTop:      '16px'

                }}>
                    <Box sx={{     marginLeft: '8px'}}>                
                        <Typography  color = "textPrimary" variant="body1"> 
                            TOTAL 
                        </Typography>
                    </Box>
    
                    <Box sx={{       marginRight: '8px'}}>                
                        <Typography  color = "primary" variant="body1"> 
                            ${  calculateTotal(     Number( calculateSubtotal() ) - Number( calculateDiscount() ) ) }
                        </Typography>
                    </Box>
                </Box>

                <Box
                sx={{
                    flexDirection:  'column',
                    alignItems:     'flex-start',
                    width:          '92vw',
                    height:         '20vh',
                    display:        'flex',
                    marginTop:      '24px',
                    paddingLeft:    '8px'
                }}>
    
                    
                    <Typography  color = "textPrimary" variant="body1"> 
                        Payment method:
                    </Typography>
    
<Box sx={{ 
                        marginBottom:'3px', 
                        width: 'inherit',  
                        height: '1px', 
                        borderTop: '1px solid black'}}
                        >
    
</Box>
                    
                    <FormControl component="fieldset">
                        <RadioGroup>
                            <FormControlLabel value="Money" control={<Radio />} label="Money" />
                            <FormControlLabel value="Card" control={<Radio />}  label="Card" />
                        </RadioGroup>
                    </FormControl>
    
                </Box>
                
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Button style={{minWidth: '323px'}} variant='contained' color='primary'>
                        <Typography variant='button'>    
                            Confirm
                        </Typography>
                    </Button>
                </Box>
            </Box>


        </Box>
    );
};
    

export default Cart;

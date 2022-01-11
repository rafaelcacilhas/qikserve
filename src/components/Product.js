import React                from "react";
import { useContext}        from "react";
import {useState}           from "react";

import {GlobalContext}      from "../constants/GlobalState";
import {getDetails}         from "../services/getDetails";

import Box                  from "@mui/material/Box";
import Typography           from '@mui/material/Typography';
import Button               from "@mui/material/Button";

import TextField            from '@mui/material/TextField';
import Dialog               from '@mui/material/Dialog';
import DialogActions        from '@mui/material/DialogActions';
import DialogContent        from '@mui/material/DialogContent';
import DialogContentText    from '@mui/material/DialogContentText';
import DialogTitle          from '@mui/material/DialogTitle';


const Product = (props) => {



    const {productDet,setProductDet}    = useContext(GlobalContext);    // Get the details of the selected product
    const {cart,setCart}                = useContext(GlobalContext);

    const [number,setNumber]            = useState(1);                  // How many of the product the client wants
    const [open, setOpen]               = useState(false);              //Determines if a product is selected


//Open the Add to Cart screen
    const handleClickOpen = (data) => {
        const currentProduct = data.id

        getDetails(currentProduct)  //We get the data here so it's ready by the time the client hits "confirm"
        .then(  res => {
            setProductDet(res)
            }
        )
        .catch(error => {
            console.log(error)
        })
        
        setOpen(true);

    };

    const handleClose = () => {
        setNumber(0);
        setOpen(false);
    };

    const handleChange = (event) => {
        setNumber(event.target.value);
    }

//Do everything that its needed after the confirm
    const useConfirm = () => {

        if(cart){
            const product = {
                id:         productDet.id,
                name:       productDet.name,
                price:      productDet.price,
                promotions: productDet.promotions,
                number:     Number(number)
            }

            let temp = [...cart,product]

            for(let i=0; i < cart.length; i++) {

                if(cart[i].id === product.id ) {
                    temp = cart
                    temp[i].number = Number(product.number) 
                }

            }
                setCart(temp)


                if(cart.length > 0  ){
                    if(!cart[0].id ){
                    cart.shift()
                    };
                }


                setNumber(1)
                setOpen(false);   
        
        }
        else{

            const product = {
            id:         productDet.id,
            name:       productDet.name,
            price:      productDet.price,
            promotions: productDet.promotions,
            number:     Number(number)
        }
        let temp = [product]
        setCart(temp)
        setNumber(1)
        setOpen(false);   
        }
    

    }

//Given an ID returns how many of a given product is already in the cart
    const calculateQuantity = (id) => {

        if(cart){
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === id) {
                    return cart[i].number                      
                }
            }
        } else {return}
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
                            {props.name} 
                    </Typography>
                </Box>

                <Box sx={{border: '1px solid #E86E5A',width:'10%',height:'5vh',borderRadius:'8pt',marginRight:'-0.5%',marginTop:'-0.5%', display:'flex',justifyContent:'center',alignItems:'center'}} >
                        <Typography color="#E86E5A">                      
                            { calculateQuantity(props.id) }
                        </Typography>
                </Box>
            </Box>

            <Box>
                <Typography>
                    ${props.price/100}
                </Typography>
            </Box>

            <Box sx={{ width:'100%', display: 'flex', justifyContent:'flex-end',alignItems:'flex-end',height:'20vh'}}>
                <Button onClick={() => { handleClickOpen(props) }} size="small" variant="outlined" >Add to cart</Button>
            </Box>



            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>How many?</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Please select the quantity
                    </DialogContentText>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        label="Quantity"
                        type="number"
                        variant="standard"
                        defaultValue='1'
                        onChange={handleChange}
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>   Cancel  </Button>
                    <Button onClick={useConfirm}>    Confirm </Button>
                </DialogActions>

            </Dialog>

        </Box>
    )
}

export default Product
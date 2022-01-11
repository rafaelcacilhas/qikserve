import Box                from "@mui/material/Box";
import Typography         from '@mui/material/Typography';

const Profile = () => {

    return(
        <Box sx={{
            display:'flex', 
            alignItems:'center',
            flexDirection:"column",
            marginTop: '3vw'
            }}>

            My Profile

            <Box sx={{borderTop:'1px solid gray', width: '100%',marginBottom:'3vw'}}></Box>  

            <Box sx={{display:'flex',flexDirection:'column', alignItems:'flex-start',width:'100%',marginLeft:'12px'}}>

                    <Typography variant="body2">
                        Rafael Cacilhas
                    </Typography>
                    <Typography variant="body2">
                        rafael@email.com
                    </Typography>
                    <Typography variant="body2">
                        36576-042
                    </Typography>

            </Box>

            <Box sx={{
                backgroundColor:'#eeeeee'  ,
                display:        'flex',
                flexDirection:  'column', 
                alignItems:     'flex-start',
                width:          '100%',
                height:         '10vh',
                marginTop:      '3vh',
                paddingLeft:    '3vw'
                }}>


                <Typography variant="body2" color="grayBack.contrastText">
                    My address
                </Typography>

                <Typography variant="body2">
                    Nowhere Street, nº7
                </Typography>

            </Box>


            <Box sx={{
                display:        'flex',
                flexDirection:  'column', 
                alignItems:     'flex-start',
                width:          '100%',
                height:         '10vh',
                marginTop:      '3vh',
                paddingLeft:    '3vw'
                }}>

                <Typography variant="body2" color="text.primary">
                    Previous orders
                </Typography>   

                <Box sx={{borderTop:'2px solid black', width: '100%',marginBottom:'3vw',marginLeft:'-2vw'}}></Box>  
                    <Typography variant="body2" color="grayBack.contrastText">
                        There are no previous orders
                    </Typography>   
            </Box>





        </Box>
    )
}

export default Profile
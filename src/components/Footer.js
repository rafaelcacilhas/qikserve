import React                    from 'react';
import { useHistory }           from 'react-router-dom';


import Paper                    from '@mui/material/Paper';
import BottomNavigation         from '@mui/material/BottomNavigation';
import HomeIcon                 from '@mui/icons-material/Home';
import ShoppingCartIcon         from '@mui/icons-material/ShoppingCart';
import PersonIcon               from '@mui/icons-material/Person';
import BottomNavigationAction   from "@mui/material/BottomNavigationAction";

import { goToProfile }          from "../routes/coordinator";
import { goToCart, goToHome }   from "../routes/coordinator";

const Footer = () => {
        const history = useHistory()

    return(
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
            }}
            elevation={3}
        >

            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction
                    onClick={() => goToHome(history)}
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    onClick={() => goToCart(history)}
                    icon={<ShoppingCartIcon />}
                />
                <BottomNavigationAction
                    onClick={() => goToProfile(history)}
                    icon={<PersonIcon />}
                />

            </BottomNavigation>
        </Paper>
    )
}

export default Footer
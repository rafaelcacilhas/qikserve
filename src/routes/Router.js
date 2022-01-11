import React             from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch }        from "react-router-dom";
import { Route }         from "react-router-dom";

import Footer            from "../components/Footer";
import Home              from "../pages/Home";
import Cart              from "../pages/Cart";
import Profile           from "../pages/Profile";

const Router = () => {
    const discountTotal = []
    return(
        <BrowserRouter>
        <Switch>

            <Route exact path="/">
                <Home   />
                <Footer/>
            </Route>

            <Route exact path="/cart">
                <Cart     discountTotal={discountTotal}/>
                <Footer/>
            </Route>

            <Route exact path="/profile">
                <Profile    />
                <Footer/>
            </Route>

        </Switch>
        </BrowserRouter>
        
    )
}
export default Router
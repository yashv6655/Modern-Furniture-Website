import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route exact path="/about" children={<AboutPage />} />
          <Route exact path="/cart" children={<CartPage />} />
          <Route exact path="/products" children={<ProductsPage />} />
          <Route exact path="/products/:id" children={<SingleProductPage />} />
          <PrivateRoute exact path="/checkout" children={<CheckoutPage />} />
          <Route exact path="*" children={<ErrorPage />} />
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;

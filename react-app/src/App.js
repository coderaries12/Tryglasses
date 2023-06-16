import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import EditReview from "./components/EditReview";
import PostReviewModal from "./components/PostReviewModal";
import HomePage from "./components/HomePage";
import ShoppingCartPage from "./components/ShoppingCartPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/shoppingcart" >
            <ShoppingCartPage />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route exact path="/products/:productId/review" >
            <PostReviewModal />
          </Route>
          <Route exact path="/products/:productId/review/:reviewId/edit" >
            <EditReview />
          </Route>
          
        </Switch>
      )}
    </>
  );
}

export default App;

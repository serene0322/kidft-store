import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ForgotPasswordPage from './pages/forgot-password/forgot-password.component';
import ContactPage from './pages/contact/contact.component';
import ProductDetailsPage from './pages/product-detail/product-details.component';
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import FloatButton from './components/fab/fab.component';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <FloatButton />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:collectionId/:itemId" component={ProductDetailsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
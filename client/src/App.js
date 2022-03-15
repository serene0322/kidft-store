import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ToastContainer } from 'react-toastify';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import 'react-toastify/dist/ReactToastify.css';

import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ForgotPasswordPage from './pages/forgot-password/forgot-password.component';
import ContactPage from './pages/contact/contact.component';
import ProductDetailsPage from './pages/product-detail/product-details.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import FloatButton from './components/fab/fab.component';
import VideoCallPage from './pages/video-call/video-call.component';
import KidftAlanButton from './components/alan-button/alan-button.component';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <KidftAlanButton />
      <FloatButton />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:collectionId/:itemId" component={ProductDetailsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/videocall" component={VideoCallPage} />
      </Switch>
      <MessengerCustomerChat
        pageId="109133521705074"
        appId="979559789650297"
      />,
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
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.component.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      </div>
    </div>
  );
};

//similar to getter = mapStateToProps
//similar to setter = dispatchToProps
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

//HOC
export default connect(mapStateToProps)(Header);

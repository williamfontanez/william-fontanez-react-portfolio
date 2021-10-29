import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";


const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to="/blog" activeClassName="nav-link-active">
          Blog
        </NavLink>
      </div>
    );
  };

  const handleSignOut =()=>{
    axios.delete("https://api.devcamp.space/logout",{withCredtntials: true})
    .then(response => {
      if(response.status === 200){
        props.history.push("/");
        props.handleSuccessfulLogout();
      }
      return response.data;
    }).catch(error => {
      console.log("Errorsigning out", error);
    })
  };

    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/about-me" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>

          {props.loggedInStatus === "LOGGED_IN" ? (
          dynamicLink("/blog", "Blog")
        ) : null}
      </div>

        <div className="right-side">
        William Fontanez

        {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null}
        </div>
      </div>
    );
  }
export default withRouter(NavigationComponent);
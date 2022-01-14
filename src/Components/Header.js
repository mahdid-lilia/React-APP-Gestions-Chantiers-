import { AppBar,
         Toolbar,
         Typography, 
         makeStyles,
         Button, } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";


const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "Center",
    },
  }));


const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    }];

export default function Header() {
            const { header, logo } = useStyles();
            
            const displayDesktop = () => {
              return (
                <Toolbar>
                        {femmecubatorLogo}
                    
                 </Toolbar>
              );
            };
            
            const femmecubatorLogo = (
                <Typography variant="h6" component="h1"  >
                  Lilouche
                </Typography>
              );
                           
  return (
    <header>
      <AppBar className={Header}>{displayDesktop()}</AppBar>
    </header>
  );
}
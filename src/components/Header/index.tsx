import React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useStyles } from './styles';
import MeuPerfil from '../MeuPerfil';

const Header = ({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: any;
  setMobileOpen: any;
}) => {
  const classes = useStyles();
  function handleHeaderToggle() {
    mobileOpen ? setMobileOpen(false) : setMobileOpen(true);
    console.log(mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ padding: 0 }}>
          {/*  <IconButton
            color="inherit"
            aria-label="Open header"
            edge="start"
            onClick={handleHeaderToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}

          <Box style={{ width: '100%', maxWidth: '256px' }}>
            <MeuPerfil />
          </Box>
          <Box className={classes.barHeader} style={{ width: '100%' }}>
            <h2 className={classes.h2Text}>Desempenho</h2>
            <NotificationsIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

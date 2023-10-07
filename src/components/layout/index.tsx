import { ILayout } from '../../common/types/layout';
import { Outlet, useLocation } from 'react-router-dom';
import TopBarComponent from '../top-bar';
import { Box, useMediaQuery } from '@mui/material';
import SidebarComponent from '../sidebar';
import { useState } from 'react';
import { useStyles } from './styles';

const LayoutComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNoneMibile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return location.pathname === '/login' || location.pathname === '/register' ? (
    <Outlet />
  ) : (
    <Box
      display={isNoneMibile ? 'flex' : 'block'}
      justifyContent="space-between"
      width="100%"
      height="100%"
    >
      <SidebarComponent
        isNoneMibile={isNoneMibile}
        drawerWidth="250px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box className={classes.mainSection}>
        <TopBarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default LayoutComponent;

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import FlexBetween from '../flex-between';
import { navMenu } from '../moks/navigate';
import { tokens } from '../../theme';
import Logo from '../../assets/images/sidebar/logo.svg';
import { useStyles } from './styles';
import { ISidebarProps } from '../../common/types/sidebar';

const SidebarComponent: FC<ISidebarProps> = ({
  isNoneMibile,
  drawerWidth,
  isOpen,
  setIsOpen,
}: ISidebarProps): JSX.Element => {
  const [active, setActive] = useState('');
  const classes = useStyles();
  const { pathname } = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const renderNavMenu = navMenu.map((item): JSX.Element => {
    return (
      <ListItem key={item.id}>
        <ListItemButton
          onClick={() => navigate(`${item.path}`)}
          className={
            active === item.path
              ? `${classes.navItem} ${classes.active}`
              : `${classes.navItem}`
          }
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography variant="body1">{item.name}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box className={classes.navBlock}>
            <Box>
              <FlexBetween>
                <Box className={classes.brand}>
                  <img src={Logo} alt="Logo" />
                  <Typography variant="h1" className={classes.brandTitle}>
                    Demo
                  </Typography>
                </Box>
                {!isNoneMibile && (
                  <IconButton
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
              <List className={classes.navList}>{renderNavMenu}</List>
            </Box>
          </Box>
          <Box width="100%">
            <List>
              <ListItem>
                <ListItemButton className={classes.navItem}>
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Logout</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SidebarComponent;

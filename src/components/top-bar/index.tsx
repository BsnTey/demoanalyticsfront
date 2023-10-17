import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useAppSelector } from '../../utils/hook';
import {
  MenuOutlined,
  LightMode,
  DarkMode,
  Search,
  NotificationsNone,
} from '@mui/icons-material';
import { ColorModeContext, tokens } from '../../theme';
import { FC, useContext } from 'react';
import { useStyles } from './styles';
import FlexBetween from '../flex-between';
import { ITopBarProps } from '../../common/types/typebar';

const TopBarComponent: FC<ITopBarProps> = ({
  isOpen,
  setIsOpen,
}: ITopBarProps): JSX.Element => {
  const { user } = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined
            className={classes.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Typography variant="h3">Welcome {user.firstName}</Typography>
        </FlexBetween>
        <Box display="flex">
          <Grid
            onClick={colorMode.toggleColorMode}
            sx={{
              pr: '37px',
              borderRight: `1px solid ${colors.borderColor}`,
            }}
          >
            <IconButton className={''} sx={{ mr: '45px' }}>
              {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid
            className={classes.searchBlock}
            // sx={{
            //   backgroundColor: colors.primary[600],
            //   borderRadius: '8px',
            //   ml: '28px',
            // }}
          >
            <IconButton className={classes.searchIcon}>
              <Search />
            </IconButton>
            <InputBase
              className={classes.searchInput}
              // sx={{
              //   px: '18px',
              //   py: '12px',
              // }}
              placeholder="Поиск"
            />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;

import { TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { useStyles } from './styles';
import AppLoadingButton from '../../../components/loading-button';
import { LoadingButton } from '@mui/lab';

const LoginPage: React.FC<IPropsLogin> = ({
  navigate,
  register,
  errors,
  loading,
}: IPropsLogin): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" textAlign="center" fontSize={32}>
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={3} textAlign="center">
        Введите ваш логин и пароль
      </Typography>
      <TextField
        error={!!errors.email}
        id="outlined-basic"
        margin="normal"
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email')}
      />
      <TextField
        error={!!errors.password}
        id="outlined-basic"
        type="password"
        margin="normal"
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
      />
      <AppLoadingButton loading={loading} type="submit" variant="contained">
        Войти
      </AppLoadingButton>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          width: '60%',
          margin: 'auto',
        }}
      >
        У вас нет аккаунта?
        <span
          className={classes.incitingText}
          onClick={() => navigate('/register')}
        >
          {' '}
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;

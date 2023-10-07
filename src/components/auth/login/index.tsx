import { Button, TextField, Typography } from '@mui/material';
import style from './style.module.css';

const LoginPage: React.FC<IPropsLoginPage> = ({
  setEmail,
  setPassword,
  navigate,
}: IPropsLoginPage): JSX.Element => {
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Введите ваш логин и пароль
      </Typography>
      <TextField
        id="outlined-basic"
        margin="normal"
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш имейл"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        type="password"
        margin="normal"
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
      >
        Войти
      </Button>
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
        <span className="insitingText" onClick={() => navigate('/register')}>
          {' '}
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;

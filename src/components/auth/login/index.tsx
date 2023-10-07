import { Button, TextField, Typography } from '@mui/material';
import { IPropsLoginPage } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLoginPage> = ({
  navigate,
  register,
  errors,
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
        error={!!errors.email}
        id="outlined-basic"
        margin="normal"
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email', {
          required: 'Обязательно поле для заполнения',
        })}
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
        {...register('password', {
          required: 'Обязательно поле для заполнения',
          minLength: 6,
        })}
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

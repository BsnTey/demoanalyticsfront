import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { IPropsRegisterPage } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegisterPage> = ({
  setEmail,
  setPassword,
  setRepeatPassword,
  setFirstName,
  setUserName,
  navigate,
}: IPropsRegisterPage): JSX.Element => {
  return (
    <>
      <Typography variant="h2" fontFamily="Popins" textAlign="center">
        Регистрация
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Popins"
        textAlign="center"
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        id="outlined-basic"
        margin="normal"
        fullWidth={true}
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        margin="normal"
        fullWidth={true}
        label="username"
        variant="outlined"
        placeholder="Введите ваш username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        margin="normal"
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
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
      <TextField
        id="outlined-basic"
        type="password"
        margin="normal"
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          fontFamily: 'Popins',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
      >
        Регистрация
      </Button>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Popins',
          marginTop: 2,
          width: '60%',
          margin: 'auto',
        }}
      >
        У вас есть аккаунт?
        <span className="insitingText" onClick={() => navigate('/login')}>
          {' '}
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;

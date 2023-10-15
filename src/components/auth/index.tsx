import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';
import { Box } from '@mui/material';
import { FormEvent, useState } from 'react';
import instance from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IAuthHandleSubmit } from '../../common/types/auth';
import { LoginSchema, RegisterSchema } from '../../utils/yup';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === '/login' ? LoginSchema : RegisterSchema
    ),
  });
  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      const userData = {
        email: data.email,
        password: data.password,
      };
      try {
        const user = await instance.post('auth/login', userData);
        dispatch(login(user.data));
        navigate('/');
      } catch (e) {
        return e;
      }
    } else {
      const userData = {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        username: data.username,
      };
      if (data.password === data.confirmPassword) {
        try {
          console.log(userData);

          const user = await instance.post('auth/register', userData);
          dispatch(login(user.data));
          navigate('/');
        } catch (e) {
          console.log(e);

          return e;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNoMAtch);
      }
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              //@ts-ignore
              register={register}
              errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              navigate={navigate}
              //@ts-ignore
              register={register}
              errors={errors}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;

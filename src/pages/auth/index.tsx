import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { AppErrors } from '../../common/errors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { useStyles } from './styles';
import { loginUser, registerUser } from '../../store/thunk/auth';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === '/login' ? LoginSchema : RegisterSchema
    ),
  });

  const loading = useAppSelector((state) => state.auth.isLoading);

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        await dispatch(loginUser(data));
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
          await dispatch(registerUser(data));
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
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px 1px #202020'}
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              //@ts-ignore
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              navigate={navigate}
              //@ts-ignore
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;

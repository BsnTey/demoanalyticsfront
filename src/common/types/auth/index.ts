import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsLoginPage<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}

export interface IPropsRegisterPage {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
  setFirstName: (value: string) => void;
  setUserName: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IAuthHandleSubmit {
  email: string;
  password: string;
}

export interface IAuthState {
  user: IAuthBackUser;
  isLogged: boolean;
}

export interface IAuthBackUser {
  token: string;
  user: IPublicUser;
}

export interface IPublicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchList: [IWatchList];
}

export interface IWatchList {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}

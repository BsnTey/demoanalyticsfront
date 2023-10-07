interface IPropsLoginPage {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  navigate: (to: string) => void;
}

interface IPropsRegisterPage extends IPropsLoginPage {
  setRepeatPassword: (value: string) => void;
  setFirstName: (value: string) => void;
  setUserName: (value: string) => void;
}

interface IAuthState {
  user: IAuthBackUser;
  isLogged: boolean;
}

interface IAuthBackUser {
  token: string;
  user: IPublicUser;
}

interface IPublicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchList: [IWatchList];
}

interface IWatchList {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}

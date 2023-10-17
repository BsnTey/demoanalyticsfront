import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './pages/auth';
import './index.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LayoutComponent from './components/layout';
import WatchListComponent from './pages/watchList';
import NewsComponent from './pages/news';
import SettingsComponent from './pages/settings';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/watchList" element={<WatchListComponent />} />
                <Route path="/news" element={<NewsComponent />} />
                <Route path="/settings" element={<SettingsComponent />} />
              </Route>

              <Route path="/login" element={<AuthRootComponent />} />
              <Route path="/register" element={<AuthRootComponent />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

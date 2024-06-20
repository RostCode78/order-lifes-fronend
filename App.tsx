import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from './src/context/Auth/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = (): React.JSX.Element => {
  const { authState } = useContext(AuthContext);

  return authState.isLoggedIn ? <AppState children={undefined} /> : <LoginScreen/>;
};

const AppState = ({ children }: { children: React.ReactNode }) => {
  return (
    <>{children}</>
  );
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </AuthProvider>
  );
};

export default AppWrapper;

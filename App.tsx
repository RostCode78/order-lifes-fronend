import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from './src/context/Auth/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = (): React.JSX.Element => {
  const { authState } = useContext(AuthContext);

  return authState.isLoggedIn ? <StackNavigator/> : <LoginScreen/>;
};

const AppWrapper = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default AppWrapper;

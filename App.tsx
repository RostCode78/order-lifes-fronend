import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from './src/context/Auth/AuthContext';
import BienvenidaScreen from './src/screens/BienvenidaScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
// import { BottomNavigator } from './src/navigator/BottomNavigator';
import { StackNavigator } from './src/navigator/StackNavigator';
import { PaperProvider } from 'react-native-paper';

const App = (): React.JSX.Element => {
  const { authState } = useContext(AuthContext);

  // return authState.isLoggedIn ? <StackNavigator/> : <BienvenidaScreen/>;
  return <StackNavigator/>;
};

const AppWrapper = () => {
  return (
      <NavigationContainer>
        <AuthProvider>
          <SafeAreaProvider>
            <PaperProvider>
              <App/>
            </PaperProvider>
          </SafeAreaProvider>
        </AuthProvider>
      </NavigationContainer>
  );
};

export default AppWrapper;

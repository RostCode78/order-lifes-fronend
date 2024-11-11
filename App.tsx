import React from 'react';
import { AuthProvider } from './src/context/Auth/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { PaperProvider } from 'react-native-paper';

const App = (): React.JSX.Element => {
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

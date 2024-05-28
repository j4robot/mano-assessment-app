import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//Screens
import { Product } from './src/screens/products';
import { ProductDetails } from './src/screens/products/details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Product' component={Product} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={
          {
            headerTitle: (props) => (<Text>Details</Text>),
          }
          } 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
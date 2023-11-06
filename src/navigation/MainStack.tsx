import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesScreen from '../screens/MoviesScreen';
import MovieDetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={'Movies'}
        component={MoviesScreen}
        options={{animation: 'default'}}
      />
      <Stack.Screen
        name={'Details'}
        component={MovieDetailsScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

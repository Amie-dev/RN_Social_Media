import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { useAppContext } from '../../context/AppContext';
import { COLORS } from '../../constants/Colors';
import HomeHeader from '../../components/HomeComponents/HomeHeader';
const Stack = createStackNavigator();
const HomeStack = () => {
  const { isDarkMode } = useAppContext();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: props => <HomeHeader {...props} />,
          title: 'Social',
          headerStyle: {
            backgroundColor: `${theme.headerBackground}`,
            // borderRadius:15
          },
          headerTitleStyle: {
            color: `${theme.headerText}`,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

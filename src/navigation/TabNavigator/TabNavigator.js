/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../StackNavigator/HomeStack';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useAppContext } from '../../context/AppContext';
import { COLORS } from '../../constants/Colors';

{
  /* <Ionicons name="home" size={30} color="blue" /> */
}
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const { isDarkMode } = useAppContext();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Todo') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: `${theme.footerActive}`,
        tabBarInactiveTintColor: `${theme.footerIcon}`,
        tabBarStyle: {
          backgroundColor: `${theme.footerBackground}`,
          // borderRadius:15,
        
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title:"Home",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

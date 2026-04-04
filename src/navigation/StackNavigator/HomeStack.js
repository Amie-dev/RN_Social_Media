import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { useAppContext } from '../../context/AppContext';
import { COLORS } from '../../constants/Colors';
const Stack = createStackNavigator();
const HomeStack = () => {
   const { isDarkMode } = useAppContext();
    const theme = isDarkMode ? COLORS.dark : COLORS.light;
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} 
      options={{
        headerShown:true,
        title:"Home",
        headerStyle:{
          backgroundColor:`${theme.headerBackground}`,
          // borderRadius:15
          
        },
        headerTitleStyle:{
          color:`${theme.headerText}`
        }
      }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;

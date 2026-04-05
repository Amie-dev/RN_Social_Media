import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
import { useAppContext } from '../context/AppContext';
import AuthStack from './AuthStack/AuthStack';
const RootNavigator = () => {
  // const {isAuthenticated}=useAppContext()
  // console.log("isAuthenticated",isAuthenticated);
  
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

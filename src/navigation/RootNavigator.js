import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

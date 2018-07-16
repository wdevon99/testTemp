import { NavigationActions } from 'react-navigation';

let _navigator;

setTopLevelNavigator=(navigatorRef)=>{
  _navigator = navigatorRef;
}

//this method is used to navigate to any where
navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};
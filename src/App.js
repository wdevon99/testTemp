//@flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
//to set up the redux store
import configureStore from './store/configureStore';
//importing the app navigation
import AppNavigation from './components/navigation';
//Navigation service
import NavigationService from './components/navigation/NavigationService';

//getting the configure store object : This object will be passed to the <Provider/>
const store = configureStore();

type Props = {};
export default class App extends Component<Props>  {
    render() {
        return ( 
            <Provider store={store}>
                <AppNavigation
                    ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }
                    }
                />
            </Provider>
        );
    }
}


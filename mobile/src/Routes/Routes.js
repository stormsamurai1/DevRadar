import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from '../Pages/Main/Main'
import Profile from '../Pages/Profile/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title: 'DevRadar',

            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no GitHub'
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D40E7'
            },
            headerTintColor: '#FFF',
            headerTitleAlign: 'center'
        }
    }
    )
);

export default Routes;
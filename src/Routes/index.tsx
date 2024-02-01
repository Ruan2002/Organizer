import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Home } from '../pages/Home'
import {Notifications} from '../pages/Notifications'
import {Profile} from '../pages/Profile'
import { Configs } from '../pages/Configs'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}
        
        
        >
            <Tab.Screen
              name='Home'
              component={Home}
            />
            <Tab.Screen
              name='Notifications'
              component={Notifications}
            />
            <Tab.Screen
              name='Profile'
              component={Profile}
            />
            <Tab.Screen
              name='Configs'
              component={Configs}
            />
        </Tab.Navigator>
    )
}
 
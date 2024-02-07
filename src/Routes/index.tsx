import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home } from '../pages/Home'
import {Notifications} from '../pages/Notifications'
import {Profile} from '../pages/Profile'
import { Configs } from '../pages/Configs'
import { View } from 'react-native'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,

            tabBarStyle:{
                backgroundColor: '#D3D3D3',
                borderWidth: 1
            },

            tabBarActiveTintColor: '#FFF'
        }}
        >
            <Tab.Screen
              name='Home'
              component={Home}
              options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                      return <Ionicons name="home" size={size} color={color} />;
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />;
                  }
              }}
            />
            <Tab.Screen
              name='Notifications'
              component={Notifications}
              options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                      return <Ionicons name="chatbubbles" size={size} color={color} />;
                    }
                    return <Ionicons name="chatbubbles-outline" size={size} color={color} />;
                  }
              }}
            />
            <Tab.Screen
              name='Profile'
              component={Profile}
              options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                      return <Ionicons name="person" size={size} color={color} />;
                    }
                    return <Ionicons name="person-outline" size={size} color={color} />;
                  }
              }}
            />
            <Tab.Screen
              name='Configs'
              component={Configs}
              options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                      return <Ionicons name="settings-sharp" size={size} color={color} />;
                    }
                    return <Ionicons name="settings-outline" size={size} color={color} />;
                  }
              }}
            />
        </Tab.Navigator>
    )
}
 
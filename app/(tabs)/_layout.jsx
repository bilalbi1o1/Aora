import { Image, StyleSheet, Text, View } from 'react-native'
import { Tabs,Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused? 'font-psemibold' : 'font-pregular'} text-xs`}>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen 
        name='home'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={icons.home}
                    name="Home"
                    color={color}
                    focused={focused}
                />
            )
        }}
        />
          <Tabs.Screen 
        name='bookmark'
        options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={icons.bookmark}
                    name="Bookmark"
                    color={color}
                    focused={focused}
                />
            )
        }}
        />
          <Tabs.Screen 
        name='create'
        options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={icons.create}
                    name="Create"
                    color={color}
                    focused={focused}
                />
            )
        }}
        />
          <Tabs.Screen 
        name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={icons.profile}
                    name="Profile"
                    color={color}
                    focused={focused}
                />
            )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})
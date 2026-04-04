import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { useAppContext } from './context/AppContext'
import { COLORS } from './constants/Colors'

const Main = () => {
  const {isDarkMode,toggleTheme}=useAppContext()
  console.log(isDarkMode)
  const theme=isDarkMode?COLORS.dark:COLORS.light
  return (
    <View style={{
      backgroundColor:`${theme.background}`
    }}>
      <Switch
      value={isDarkMode}
      onChange={toggleTheme}
      />
      <Text>Main</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})
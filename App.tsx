import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./containers/Dashboard";
import TopSearch from "./components/TopSearch";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Item from "./containers/Item";
import Profile from "./containers/Profile";
import Setting from "./containers/Setting";
import EditItem from "./containers/EditItem";
import Login from "./containers/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: "Dashboard"
          }}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          options={{
            title: "Item"
          }}
        />
        <Stack.Screen
          name="EditItem"
          component={EditItem}
          options={{
            title: "Edit Item"
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile"
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: "Setting"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});

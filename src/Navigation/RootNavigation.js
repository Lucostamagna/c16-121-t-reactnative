import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyStack from "./UserStack";
import MyTabs from './Tabs'
 

const RootNavigation = () => {
  return (


    <NavigationContainer >
 
     <MyStack></MyStack>
 
    </NavigationContainer>
  );
};

export default RootNavigation;

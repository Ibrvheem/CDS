import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";

import {
  HomeIcon as HomeIconOutline,
  QrCodeIcon as QrCodeIconOutline,
} from "react-native-heroicons/outline";

import {
  HomeIcon as HomeIconSolid,
  QrCodeIcon as QrCodeIconSolid,
} from "react-native-heroicons/solid";

// NYSC colors
const NYSC_GREEN = "#018749";
const NYSC_WHITE = "#FFFFFF";
const INACTIVE_GRAY = "#B0B0B0";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: NYSC_GREEN,
        tabBarInactiveTintColor: INACTIVE_GRAY,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: NYSC_WHITE,
            borderTopColor: "transparent",
            elevation: 0,
          },
          default: {
            backgroundColor: NYSC_WHITE,
            borderTopColor: "transparent",
            elevation: 0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeIconSolid color={color} />
            ) : (
              <HomeIconOutline color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="qrcode"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <QrCodeIconSolid color={color} />
            ) : (
              <QrCodeIconOutline color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

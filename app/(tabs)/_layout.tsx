import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";

import {
  BellIcon as BellIconOutline,
  DocumentArrowUpIcon as DocumentArrowUpIconOutline,
  HomeIcon as HomeIconOutline,
  QrCodeIcon as QrCodeIconOutline,
  UserIcon as UserIconOutline,
} from "react-native-heroicons/outline";

import {
  BellIcon as BellIconSolid,
  DocumentArrowUpIcon as DocumentArrowUpIconSolid,
  HomeIcon as HomeIconSolid,
  QrCodeIcon as QrCodeIconSolid,
  UserIcon as UserIconSolid,
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
        name="report"
        options={{
          title: "Report",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <DocumentArrowUpIconSolid color={color} />
            ) : (
              <DocumentArrowUpIconOutline color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <BellIconSolid color={color} />
            ) : (
              <BellIconOutline color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="qr"
        options={{
          title: "QR Scan",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <QrCodeIconSolid color={color} />
            ) : (
              <QrCodeIconOutline color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <UserIconSolid color={color} />
            ) : (
              <UserIconOutline color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

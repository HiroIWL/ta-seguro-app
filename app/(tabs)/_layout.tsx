import { AppHeader } from "@/components/ui/AppHeader";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  useProtectedRoute();

  return (
    <SafeAreaView style={styles.layout}>
      <AppHeader />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#ffffffaa",
          sceneStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={<Ionicons name="home" size={22} color={color} />}
                label="Início"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="hospitais"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={
                  <MaterialCommunityIcons
                    name="hospital-building"
                    size={22}
                    color={color}
                  />
                }
                label="Hospitais"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="doacoes"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={<FontAwesome name="gift" size={22} color={color} />}
                label="Doações"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={<Ionicons name="menu" size={22} color={color} />}
                label="Menu"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="dicas/enchente"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="dicas/golpes"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

function TabIcon({
  icon,
  label,
  focused,
}: {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
}) {
  return (
    <View style={styles.tabItem}>
      {icon}
      <Text style={[styles.label, focused && styles.labelFocused]}>{label}</Text>
      {focused && <View style={styles.underline} />}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#005BFF",
  },
  tabBar: {
    backgroundColor: "#005BFF",
    borderTopWidth: 0,
    paddingHorizontal: 8,
    paddingTop: 16,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabItem: {
    flex: 1,
    width: 72,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 12,
    color: "#fff",
    marginTop: 2,
  },
  labelFocused: {
    fontWeight: "600",
  },
  underline: {
    marginTop: 4,
    width: 20,
    height: 2,
    backgroundColor: "#fff",
    borderRadius: 1,
  },
});

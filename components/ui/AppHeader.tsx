import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

export const AppHeader = ({ onAvatarPress }: { onAvatarPress?: () => void }) => {
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/splash.png")} style={styles.logo} />
            <ThemedText weight="600" size={18}>
                Tá Seguro
            </ThemedText>
            <TouchableOpacity onPress={onAvatarPress}>
                <View style={{
                    padding: 6,
                    borderWidth: 1,
                    borderColor: '#999',
                    width: 42,
                    height: 42,
                    borderRadius: 21,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/100" }}
                        style={styles.avatar}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    logo: {
        height: 40,
        width: 40,
        resizeMode: "contain",
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: '100%',
        boxSizing: 'content-box',
    },
});

import { ThemedText } from "@/components/ui/ThemedText";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/(tabs)')
        }
    }, [isAuthenticated])

    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/splash.png")}
                style={styles.logo}
                resizeMode="contain"
            />

            <ThemedText weight="600" size={18} style={styles.title}>
                Tá Seguro
            </ThemedText>

            <Image
                source={require("@/assets/images/umbrella.png")}
                style={styles.image}
                resizeMode="contain"
            />

            <ThemedText weight="400" size={14} style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </ThemedText>

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => router.replace('/register')}
                >
                    <ThemedText weight="600" size={16} style={{ color: "white" }}>
                        Criar conta
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => router.replace("/login")}>
                    <ThemedText weight="400" size={14}>
                        Já tenho uma conta
                    </ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    logo: {
        height: 50,
        width: 100,
        alignSelf: "flex-start",
        marginTop: 40,
        position: "absolute",
        top: -8,
        left: -8
    },
    title: {
        textAlign: "center",
        marginVertical: 8,
    },
    image: {
        width: 250,
        height: 250,
    },
    paragraph: {
        textAlign: "center",
        marginBottom: 24,
        color: "#444",
    },
    primaryButton: {
        backgroundColor: "#005BFF",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginBottom: 16,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttons: {
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 32
    }
});

import { LabeledInput } from "@/components/ui/LabeledInput";
import { ThemedText } from "@/components/ui/ThemedText";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true);
    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login(email, password);
            router.replace('/(tabs)')
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container}
                keyboardShouldPersistTaps='handled'
            >
                <Image
                    source={require("@/assets/images/splash.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <TouchableOpacity style={{}} onPress={() => router.navigate("/register")}>
                    <ThemedText weight="500" size={16} style={[styles.textCenter]}>
                        Faça seu login ou{" "}
                        <TextLink>
                            crie sua conta
                        </TextLink>
                    </ThemedText>
                </TouchableOpacity>

                <LabeledInput
                    label="E-mail"
                    placeholder="Digite o e-mail cadastrado aqui"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <LabeledInput
                    label="Senha"
                    placeholder="Digite a sua melhor senha"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!secure}
                    rightIcon={
                        <TouchableOpacity onPress={() => setSecure((v) => !v)}>
                            <Ionicons
                                name={secure ? "eye-outline" : "eye-off-outline"}
                                size={20}
                                color="#888"
                            />
                        </TouchableOpacity>
                    }
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <ThemedText weight="600" size={16} style={{ color: "white" }}>
                        Entrar na conta
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => alert("Funcionalidade ainda não implementada")}>
                    <ThemedText weight="400" size={14}>Esqueceu a sua senha</ThemedText>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const TextLink = ({ children, onPress }: any) => (
    <ThemedText weight="500" size={16} style={{ color: "#005BFF" }} onPress={onPress}>
        {children}
    </ThemedText>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    logo: {
        height: 60,
        width: 120,
        alignSelf: "center",
        marginBottom: 32,
    },
    textCenter: {
        textAlign: "center",
        marginBottom: 32,
    },
    label: {
        marginBottom: 6,
        marginTop: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 12,
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "#005BFF",
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 24,
        marginBottom: 16,
        alignItems: "center",
    },
});

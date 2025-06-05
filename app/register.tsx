import { LabeledInput } from "@/components/ui/LabeledInput";
import { ThemedText } from "@/components/ui/ThemedText";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { TextInputMask } from "react-native-masked-text";


export default function RegisterScreen() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const { register } = useAuth();
    const router = useRouter();

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async () => {
        const { nome, email, phone, password, confirmPassword } = form;

        if (!nome || !email || !phone || !password || !confirmPassword) {
            return Alert.alert("Preencha todos os campos.");
        }

        if (password !== confirmPassword) {
            return Alert.alert("As senhas não coincidem.");
        }

        try {
            await register({ nome, email, phone, password });
            Alert.alert("Conta criada com sucesso!");
            router.replace("/login");
        } catch (error: any) {
            Alert.alert("Erro ao cadastrar", error.message);
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

                <LabeledInput
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={form.nome}
                    onChangeText={(text) => handleChange("nome", text)}
                />

                <LabeledInput
                    label="E-mail"
                    placeholder="Digite o e-mail cadastrado aqui"
                    value={form.email}
                    onChangeText={(text) => handleChange("email", text)}
                    keyboardType="email-address"
                />

                <LabeledInput
                    label="Telefone"
                    placeholder="(11) 99999-9999"
                    value={form.phone}
                    onChangeText={(text) => handleChange("phone", text)}
                    keyboardType="phone-pad"
                    InputComponent={TextInputMask}
                    type="cel-phone"
                    options={{
                        maskType: "BRL",
                        withDDD: true,
                        dddMask: "(99) ",
                    }}
                />


                <LabeledInput
                    label="Senha"
                    placeholder="Digite a sua melhor senha"
                    value={form.password}
                    onChangeText={(text) => handleChange("password", text)}
                    secureTextEntry={!showPassword}
                    rightIcon={
                        <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
                            <Ionicons
                                name={showPassword ? "eye-outline" : "eye-off-outline"}
                                size={20}
                                color="#888"
                            />
                        </TouchableOpacity>
                    }
                />

                <LabeledInput
                    label="Confirme a senha"
                    placeholder="Digite a sua melhor senha"
                    value={form.confirmPassword}
                    onChangeText={(text) => handleChange("confirmPassword", text)}
                    secureTextEntry={!showConfirm}
                    rightIcon={
                        <TouchableOpacity onPress={() => setShowConfirm((v) => !v)}>
                            <Ionicons
                                name={showConfirm ? "eye-outline" : "eye-off-outline"}
                                size={20}
                                color="#888"
                            />
                        </TouchableOpacity>
                    }
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <ThemedText weight="600" size={16} style={{ color: "white" }}>
                        Cadastrar
                    </ThemedText>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 60,
        alignSelf: "center",
        marginBottom: 32,
    },
    inputWrapper: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: "center",
    },
    input: {
        fontSize: 16,
    },
    button: {
        backgroundColor: "#005BFF",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 8,
    },
});

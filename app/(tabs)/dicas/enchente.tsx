import { Audio, InterruptionModeAndroid, InterruptionModeIOS, ResizeMode, Video } from "expo-av";
import { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function EnchenteDicaScreen() {
    const video = useRef(null);

    useEffect(() => {
        (async () => {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                staysActiveInBackground: false,
                interruptionModeIOS: InterruptionModeIOS.MixWithOthers,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
                playThroughEarpieceAndroid: false,
            });
        })();
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Como se manter seguro durante uma enchente?</Text>

            <Video
                ref={video}
                style={styles.video}
                source={require("@/assets/videos/flooding.mp4")}
                useNativeControls
                resizeMode={ResizeMode.COVER}
            />

            <Text style={styles.text}>
                A segurança é a prioridade em situações de enchente. Siga estas orientações importantes:
            </Text>

            <Text style={styles.text}>
                {"\n"}• Afastar-se de áreas alagadas: Nunca tente atravessar ruas ou pontes inundadas, seja a pé ou de carro. A água pode esconder buracos, correntezas fortes e fios elétricos.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Buscar local seguro: Suba para áreas elevadas e aguarde as orientações das autoridades locais.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Desligar energia: Se a água começar a entrar, desligue a chave geral e evite áreas com eletricidade.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Estar informado: Acompanhe alertas da Defesa Civil e siga orientações.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Evite contato com a água: Ela pode estar contaminada.
            </Text>
            <Text style={styles.text}>
                {"\n"}⚠️ Lembre-se: sua vida é mais importante que qualquer bem material.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 48,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#000",
    },
    video: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        backgroundColor: "#000",
        marginBottom: 16,
    },
    text: {
        fontSize: 14,
        color: "#333",
        lineHeight: 20,
    },
});

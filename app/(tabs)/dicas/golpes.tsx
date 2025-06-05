import { useRef } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

export default function GolpeDicaScreen() {
    const video = useRef(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Como se prevenir de golpes de doações?</Text>

            <Image
                ref={video}
                style={styles.video}
                source={require("@/assets/images/transito.png")}
                resizeMode="contain"
            />

            <Text style={styles.text}>
                Em momentos de crise, a solidariedade é essencial, mas é preciso ter cuidado para evitar golpes. Siga estas orientações
            </Text>

            <Text style={styles.text}>
                {"\n"}• Desconfie de abordagens suspeitas: Golpistas podem se passar por instituições ou voluntários. Sempre confirme a identidade antes de doar.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Pesquise a instituição: Doe apenas para organizações reconhecidas e com histórico comprovado de atuação. Verifique CNPJ, site oficial e canais de contato.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Evite transferências diretas para desconhecidos: Prefira doar através de plataformas oficiais ou contas bancárias divulgadas pelos canais oficiais das instituições.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Cuidado com links e mensagens: Não clique em links recebidos por SMS, e-mail ou redes sociais sem ter certeza da procedência. Eles podem conter vírus ou levar a sites falsos.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Peça comprovante: Ao doar, solicite um recibo ou comprovante da doação para garantir a transparência e segurança da transação.
            </Text>
            <Text style={styles.text}>
                {"\n"}• Informe-se sempre: Acompanhe orientações de órgãos oficiais e compartilhe informações seguras com amigos e familiares.
            </Text>
            <Text style={styles.text}>
                {"\n"}⚠️ Lembre-se: sua generosidade pode transformar vidas, mas a segurança deve vir sempre em primeiro lugar!
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

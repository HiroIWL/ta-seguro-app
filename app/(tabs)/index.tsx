import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput placeholderTextColor="#666" placeholder="Pesquise artigos" style={styles.searchInput} />
      </View>

      <Text style={styles.title}>
        Veja nossas dicas de como se{"\n"}proteger em situações de risco!
      </Text>

      <View style={styles.cardsContainer}>
        <Card
          onPress={() => router.push('/(tabs)/dicas/enchente')}
          image={require("@/assets/images/enchente.png")}
          title="Como se manter seguro durante uma enchente?"
          subtitle="Veja as principais dicas dos nossos especialistas!"
        />
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Card
            image={require("@/assets/images/mapa.png")}
            title="Acesse o Mapa de rotas seguras"
            small
            variant="doubleHeight"
          />
          <Card
            onPress={() => router.push('/(tabs)/dicas/golpes')}
            image={require("@/assets/images/doacoes.png")}
            title="Como se prevenir de golpes de doações?"
            small
            variant="doubleHeight"
          />
        </View>

        <Card
          image={require("@/assets/images/transito.png")}
          title="Evite acidentes no trânsito em dias de chuva"
        />
      </View>
    </ScrollView>
  );
}

function Card({
  image,
  title,
  subtitle,
  small = false,
  variant = "default",
  onPress = undefined,
}: {
  onPress?: () => void
  image: any;
  title: string;
  subtitle?: string;
  small?: boolean;
  variant?: "default" | "doubleHeight";
}) {
  const doubleHeight = variant === "doubleHeight";

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, small && styles.smallCard]}>
      <Image
        source={image}
        style={[
          styles.cardImage,
          small && styles.smallCardImage,
          small && doubleHeight && styles.doubleHeightCardImage,
        ]}
      />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{title}</Text>
        {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
  },
  smallCard: {
    flex: 1,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  smallCardImage: {
    height: 140,
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0008",
    padding: 12,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  cardSubtitle: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },

  doubleHeightCardImage: {
    height: 280,
  },
});

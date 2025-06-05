import { StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "./ThemedText";

export function LabeledInput({
  label,
  rightIcon,
  InputComponent = TextInput,
  ...props
}: {
  label: string;
  rightIcon?: React.ReactNode;
  InputComponent?: any;
  type?: string;
  options?: object;
} & React.ComponentProps<typeof TextInput>) {
  return (
    <View style={{ marginBottom: 16 }}>
      <ThemedText weight="500" size={14} style={{ marginBottom: 6 }}>
        {label}
      </ThemedText>
      <View style={styles.inputWrapper}>
        <InputComponent
          {...props}
          type={props.type}
          options={props.options}
          style={[styles.input, props.style, { flex: 1 }]}
          placeholderTextColor="#666"
        />
        {rightIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

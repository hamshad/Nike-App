import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />

        {/* <Pressable
        onPress={() => ToastAndroid.show("Nike Shoes", ToastAndroid.SHORT)}
      >
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
          }}
          style={{
            borderRadius: 60,
            width: "90%",
            aspectRatio: 1,
            borderWidth: 2,
            borderColor: "#000000",
          }}
        />
      </Pressable> */}
        {/* <Text style={styles.text}>Hello World!</Text> */}

        {/* <Pressable
        android_ripple={{ color: "#ffffffaa", borderless: false }}
        onPress={() => {
          ToastAndroid.show("Clicked", ToastAndroid.SHORT);
        }}
        style={{
          backgroundColor: "black",
          width: "80%",
          alignItems: "center",
          marginTop: 32,
          padding: 12,
          borderRadius: 100,
        }}
      >
        <Text style={{ color: "white", fontSize: 24 }}>Click Here</Text>
      </Pressable> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // text: {
  //   marginTop: 12,
  //   fontWeight: "bold",
  //   fontSize: 32,
  //   letterSpacing: 1.2,
  // },
});

import { Input } from "@rneui/base";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import { loginUser } from "./request";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login: React.FunctionComponent = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async () => {
    AsyncStorage.clear();
    const data = await loginUser({ username, password });
    if (data.isLogin) {
      const erm = { role: data.role, token: data.token };
      await AsyncStorage.setItem("token", JSON.stringify(erm));
      navigation.navigate("Dashboard");
    } else {
      console.log("error message");
      setErrorMessage(data.message);
    }
  };

  const getUser = async () => {
    const token: any = await AsyncStorage.getItem("token");
    if (token) {
      navigation.replace("Dashboard");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginTop: "-20%",
        paddingHorizontal: "5%"
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 20, paddingBottom: 20 }}>
        Welcome to exam
      </Text>
      {errorMessage && (
        <View
          style={{
            backgroundColor: "#D0342C",
            paddingVertical: 10,
            marginVertical: 10
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff"
            }}
          >
            {errorMessage}
          </Text>
        </View>
      )}
      <Input
        label="Username"
        onChangeText={(text) => {
          setErrorMessage("");
          setUsername(text);
        }}
      />
      <Input
        label="Password"
        onChangeText={(text) => {
          setErrorMessage("");
          setPassword(text);
        }}
        secureTextEntry={true}
      />

      <Button
        title="Login"
        onPress={() => {
          onLogin();
        }}
      />
    </View>
  );
};

export default Login;

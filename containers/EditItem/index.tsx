import { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import TopSearch from "../../components/TopSearch";
import { Input } from "@rneui/base";
import BottomNav from "../../components/BottomNav";
import { Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { updateItem } from "./request";

type Props = {
  route: any;
  navigation: {
    navigate: Function;
    goBack: Function;
  };
};

type Params = {
  name: String;
  images: String;
  price: Number;
};

type UserData = {
  token?: String;
  role?: String;
};

const EditItem = ({ route, navigation }: Props) => {
  const { data } = route.params;
  const [searchData, setSearchData] = useState();
  const [userData, setUserData] = useState<UserData>({
    role: "",
    token: ""
  });

  const [erm, setErm] = useState<Params>({
    name: "",
    images: "",
    price: 0
  });

  const getData = async () => {
    try {
      const token: any = await AsyncStorage.getItem("token");
      setUserData(JSON.parse(token));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    setErm(data);
  }, []);

  const onUpdate = async () => {
    try {
      const data = await updateItem(userData, erm);
      if (data.isUpdated) {
        navigation.goBack({ data: "test" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = () => {
    alert("delete");
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Input
            label="Name"
            value={`${erm.name}`}
            onChangeText={(text) => {
              setErm({ ...erm, name: text });
            }}
          />
          <Input
            label="Image Path"
            value={`${erm.images}`}
            onChangeText={(text) => {
              setErm({ ...erm, images: text });
            }}
          />
          <Input
            label="Price"
            keyboardType="numeric"
            value={`${erm.price}`}
            onChangeText={(text) => {
              setErm({ ...erm, price: parseFloat(text) });
            }}
          />
          <View style={styles.buttonContainer}>
            {userData.role === "auditor" && (
              <Button
                title="Update"
                onPress={() => {
                  onUpdate();
                }}
                color="primary"
              />
            )}
            {userData.role === "admin" && (
              <Button
                title="Delete"
                onPress={() => {
                  onDelete();
                }}
                color="error"
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: -2,
    paddingTop: 30,
    width: "100%",
    marginHorizontal: "2%",
    height: "80%"
  },
  buttonDesign: {
    width: 200
  },
  buttonContainer: {
    width: "100%"
  }
});
export default EditItem;

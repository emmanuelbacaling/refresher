import { StyleSheet, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import TopSearch from "../../components/TopSearch";
import { useState } from "react";
import { Button, Input } from "@rneui/base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }: any) => {
  const [searchData, setSearchData] = useState();
  return (
    <View>
      <TopSearch setSearchData={setSearchData} />
      <View style={styles.container}>
        <Input label="Fullname" value="Emman" />
        <Input label="position" value="Emman" />
        <Input label="username" value="Emman" />
        <View>
          <Button
            title="Save"
            // onPress={() => {
            //   onUpdate();
            // }}
            color="primary"
          />
          <Button
            title="Logout"
            onPress={async () => {
              await AsyncStorage.clear();
              navigation.replace("Login");
            }}
            color="error"
          />
        </View>
      </View>
      <BottomNav navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal: "2%",
    height: "72%"
  }
});
export default Profile;

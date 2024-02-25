import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import TopSearch from "../../components/TopSearch";
import { useEffect, useState } from "react";
import { Avatar, ListItem } from "react-native-elements";
import { Image } from "@rneui/base";
import { getUsers } from "./request";

type Category = [
  {
    _id?: String;
    name?: String;
    image: any;
  }
];

type UserData = [
  {
    name?: string;
    id?: string;
    image?: string;
    website?: string;
    phone?: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }
];

const Dashboard = ({ navigation }: any) => {
  const [searchData, setSearchData] = useState("");
  const [userData, setUserData] = useState<UserData | any>([]);
  const [categories, setCategories] = useState<Category>([{ image: "" }]);

  useEffect(() => {
    const getData = async () => {
      const user: any = await getUsers();
      setUserData(user);
    };

    getData();
  }, []);

  const onPressProfile = (user: UserData) => {
    navigation.navigate("UserDetail", { user });
  };

  return (
    <View>
      {/* <TopSearch setSearchData={setSearchData} /> */}
      <View style={styles.container}>
        <ScrollView>
          {userData.map((user: any, index: number) => {
            const image = `https://avatar.iran.liara.run/public/boy?username=${user.name}`;
            return (
              <TouchableWithoutFeedback
                onPress={() => onPressProfile({ ...user, image })}
              >
                <View style={styles.dashboardItem}>
                  <ListItem key={index}>
                    <Avatar
                      containerStyle={{ width: 70, height: 70 }}
                      source={{
                        uri: image
                      }}
                    />
                    <ListItem.Content
                      style={{
                        width: "70%",
                        textAlign: "left"
                      }}
                    >
                      <ListItem.Title
                        style={{ ...styles.textSpacing, fontWeight: "500" }}
                      >
                        <Image
                          source={require("../../assets/circle-user.png")}
                          style={styles.imageStyle}
                        />
                        {user.name}
                      </ListItem.Title>
                      <Text style={styles.textSpacing}>
                        <Image
                          source={require("../../assets/building.png")}
                          style={styles.imageStyle}
                        />
                        {user.company.name}
                      </Text>
                      <Text style={styles.textSpacing}>
                        <Image
                          source={require("../../assets/at.png")}
                          style={styles.imageStyle}
                        />
                        {user.email}
                      </Text>
                      <Text style={styles.textSpacing}>
                        <Image
                          source={require("../../assets/phone-flip.png")}
                          style={styles.imageStyle}
                        />
                        {user.phone}
                      </Text>
                    </ListItem.Content>
                    <ListItem.Chevron style={{ color: "red" }} color={"#000"} />
                  </ListItem>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  dashboardItem: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginVertical: 5
  },
  imageStyle: {
    width: 13,
    height: 13,
    marginRight: 10
  },
  textSpacing: {
    marginVertical: 2,
    fontSize: 13
  }
});

export default Dashboard;

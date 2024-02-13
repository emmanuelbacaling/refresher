import { StyleSheet, Text, View } from "react-native";
import TopSearch from "../../components/TopSearch";
import { useEffect, useState } from "react";
import Item from "../Item";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, ListItem } from "react-native-elements";
import { Image } from "@rneui/base";
import BottomNav from "../../components/BottomNav";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCategory, searchCategory } from "./request";

type Category = [
  {
    _id?: String;
    name?: String;
    image: any;
  }
];

const Dashboard = ({ navigation }: any) => {
  const [searchData, setSearchData] = useState("");
  const [categories, setCategories] = useState<Category>([{ image: "" }]);

  const getData = async () => {
    const { data } = await getCategory();
    setCategories(data);
  };

  const searchCat = async (search: String) => {
    const data = await searchCategory(search);
    setCategories(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    searchCat(searchData);
  }, [searchData]);

  return (
    <View>
      <TopSearch setSearchData={setSearchData} />
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          {categories.map((e, k) => {
            console.log(e);
            return (
              <ListItem
                key={k}
                style={styles.dashboardItem}
                onPress={() => {
                  navigation.navigate("Item", { category: e._id });
                }}
              >
                <ListItem.Content
                  style={{
                    textAlign: "center",
                    justifyContent: "center",

                    height: 100
                  }}
                >
                  <ListItem.Title
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "700"
                    }}
                  >
                    {e.name}
                  </ListItem.Title>
                  <Avatar
                    containerStyle={{ width: "100%", height: 80 }}
                    source={{ uri: e.image }}
                  />
                </ListItem.Content>
              </ListItem>
            );
          })}
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
  },
  flexContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center"
  },
  dashboardItem: {
    width: "30%",
    margin: "1%",
    backgroundColor: "red",
    borderWidth: 1
  }
});

export default Dashboard;

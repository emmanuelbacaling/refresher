import { Avatar, ListItem } from "react-native-elements";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useEffect, useState } from "react";
import TopSearch from "../../components/TopSearch";
import BottomNav from "../../components/BottomNav";
import { getItems, searchItem } from "./request";

type Items = [
  {
    _id?: String;
    name?: String;
    images?: any;
    price?: String;
    categoryId?: String;
  }
];

const Item = ({ route, navigation }: any) => {
  const [searchData, setSearchData] = useState("");
  const [items, setItems] = useState<Items>([{ images: "" }]);

  const getData = async () => {
    const { category } = route.params;
    const { data } = await getItems(category);
    setItems(data);
  };

  const searchCat = async (search: String) => {
    const data = await searchItem(search);
    setItems(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [route.params]);

  const [refreshing, setRefreshing] = useState(false);
  return (
    <View>
      <TopSearch setSearchData={setSearchData} />
      <View style={styles.container}>
        <ScrollView>
          {items.map((e, k) => {
            return (
              <ListItem
                key={k}
                onPress={() => {
                  navigation.navigate("EditItem", {
                    data: {
                      id: e._id,
                      name: e.name,
                      images: e.images,
                      price: e.price,
                      categoryId: e.categoryId
                    }
                  });
                }}
              >
                <Avatar
                  rounded
                  source={{
                    uri: e.images
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title>{e.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Title>{e.price}</ListItem.Title>
              </ListItem>
            );
          })}
        </ScrollView>
      </View>
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "72%"
  }
});

export default Item;

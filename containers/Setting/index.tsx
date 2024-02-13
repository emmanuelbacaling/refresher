import { StyleSheet, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import TopSearch from "../../components/TopSearch";
import { useState } from "react";

const Setting = ({ navigation }: any) => {
  const [searchData, setSearchData] = useState();
  return (
    <View>
      <TopSearch setSearchData={setSearchData} />
      <View style={styles.container}></View>
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
export default Setting;

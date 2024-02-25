import { Button, Header, Icon, Input } from "@rneui/base";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  setSearchData: Function;
};

const TopSearch = (props: Props) => {
  const { setSearchData } = props;
  return (
    <View style={styles.container}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "8%"
  },
  searchContainer: {
    borderWidth: 1
  }
});

export default TopSearch;

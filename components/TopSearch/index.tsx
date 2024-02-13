import { Button, Icon, Input } from "@rneui/base";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  setSearchData: Function;
};

const TopSearch = (props: Props) => {
  const { setSearchData } = props;
  return (
    <View style={styles.container}>
      <Input
        inputContainerStyle={styles.searchContainer}
        inputStyle={{
          paddingHorizontal: 10
        }}
        onChangeText={(text) => {
          setSearchData(text);
        }}
        rightIcon={<Icon type="font-awesome" name="search" />}
        placeholder="Input"
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

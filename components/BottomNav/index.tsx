import { color } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import { Avatar, ListItem, Text } from "react-native-elements";

const BottomNav = ({ navigation }: any) => {
  return (
    <View>
      <View style={styles.container}>
        {/* <View style={styles.menuContainer}> */}
        {/* <ListItem containerStyle={{ justifyContent: "center" }}> */}
        <ListItem
          style={styles.menuContainer}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <ListItem.Content
            style={{
              textAlign: "center",
              justifyContent: "center",

              marginLeft: "25%"
            }}
          >
            <ListItem.Title style={{ textAlign: "center" }}>
              Home
            </ListItem.Title>
            <Avatar
              source={{
                uri: "https://www.iconarchive.com/download/i103430/paomedia/small-n-flat/house.1024.png"
              }}
            />
          </ListItem.Content>
        </ListItem>
        {/* </View> */}

        <ListItem
          style={styles.menuContainer}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <ListItem.Content
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "25%"
            }}
          >
            <ListItem.Title style={{ textAlign: "center" }}>
              Settings
            </ListItem.Title>
            <Avatar
              source={{
                uri: "https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png"
              }}
            />
          </ListItem.Content>
        </ListItem>
        {/* <View style={styles.menuContainer}>
          <Text style={{ textAlign: "center" }}>Settings</Text>
        </View> */}
        <ListItem
          style={styles.menuContainer}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <ListItem.Content
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "25%"
            }}
          >
            <ListItem.Title style={{ textAlign: "center" }}>
              Profile
            </ListItem.Title>
            <Avatar
              source={{
                uri: "https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png"
              }}
            />
          </ListItem.Content>
        </ListItem>
        {/* <View style={styles.menuContainer}>
          <Text style={{ textAlign: "center" }}>Profile</Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "red"
  },
  menuContainer: {
    textAlign: "center",
    justifyContent: "center",
    width: "33.3%",
    color: "blue",
    backgroundColor: "red"
  }
});

export default BottomNav;

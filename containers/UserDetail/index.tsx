import { Image } from "@rneui/base";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Avatar, Text } from "react-native-elements";
import { getUserPost } from "./request";
import { openComposer } from "react-native-email-link";

const UserDetail = ({ navigate, route }: any) => {
  const [userData, setUserData] = useState<any>();
  const [userPost, setUserPost] = useState<any>([]);

  useEffect(() => {
    if (route.params) {
      const fetchData = async () => {
        const userPost = await getUserPost(route.params.user.id);
        setUserData(route.params.user);
        setUserPost(userPost);
      };
      fetchData();
    }
  }, []);

  const openToMail = async (email: string) => {
    openComposer({
      to: email
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            margin: "auto",
            marginHorizontal: "30%"
          }}
        >
          <Avatar
            containerStyle={{
              height: 150,
              width: 150,
              marginBottom: 5
            }}
            source={{
              uri: userData?.image
            }}
          />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <Text style={{ ...styles.textCenter, ...styles.title }}>
            {userData?.name}
          </Text>
          <TouchableWithoutFeedback onPress={() => openToMail(userData?.email)}>
            <Text style={styles.textCenter}>{userData?.email}</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.section}>
          <View style={{ paddingVertical: 5 }}>
            <Text style={styles.subTitle}>
              <Image
                source={require("../../assets/building.png")}
                style={styles.imageStyle}
              />
              {userData?.company?.name}
            </Text>
            <Text style={styles.textDetails}>{userData?.company?.bs}</Text>
            <Text style={styles.textDetails}>
              {userData?.company?.catchPhrase}
            </Text>
          </View>

          <View style={{ paddingVertical: 7 }}>
            <Text style={styles.subTitle}>
              <Image
                source={require("../../assets/land-layer-location.png")}
                style={styles.imageStyle}
              />
              Address:
            </Text>
            <Text style={styles.textDetails}>
              {userData?.address?.suite} {userData?.address?.street}{" "}
              {userData?.address?.city}
            </Text>
          </View>
          <View style={{ paddingVertical: 7 }}>
            <Text style={styles.subTitle}>
              <Image
                source={require("../../assets/phone-flip.png")}
                style={styles.imageStyle}
              />
              Contact #:
            </Text>
            <Text style={styles.textDetails}>{userData?.phone}</Text>
          </View>
        </View>
        <Text style={{ ...styles.title, marginHorizontal: 20, paddingTop: 20 }}>
          Post:{" "}
        </Text>
        {userPost.map((post: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 20,
                // backgroundColor: `${index % 2 === 0 ? "f3f3f3" : "#fff"}`
                backgroundColor: "#f3f3f3"
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  paddingBottom: 10,
                  fontSize: 15,
                  fontWeight: "600"
                }}
              >
                {post.title}
              </Text>
              {index % 2 == 0 && (
                <Image
                  source={{
                    uri: `https://learn.corel.com/wp-content/uploads/2022/01/alberta-2297204_1280.jpg`
                  }}
                  style={{ height: 150, width: "100%" }}
                />
              )}
              {/* <Text style={{ paddingTop: `${index % 2 === 0 ? 1 : 20}` }}> */}
              <Text style={{ paddingTop: 10 }}>{post.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    backgroundColor: "#fff"
  },
  mainInfo: {
    width: "100%",
    height: 100,
    borderWidth: 1
  },
  userDetails: {
    height: 100,
    borderWidth: 1
  },
  textCenter: {
    textAlign: "center"
  },
  section: {
    marginHorizontal: 20
  },
  title: {
    marginVertical: 4,
    fontSize: 18,
    fontWeight: "700"
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "700"
  },
  imageStyle: {
    width: 13,
    height: 13,
    marginRight: 10
  },
  textDetails: {
    paddingVertical: 2,
    paddingLeft: 25
  }
});

export default UserDetail;

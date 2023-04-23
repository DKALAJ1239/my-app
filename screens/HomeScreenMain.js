import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const HomeScreenMain = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://github.com/DKALAJ1239/myQuizApp/blob/master/assets/brand.PNG?raw=true",
        }}
      />

      <View style={{ padding: 25 }}>
        <Text
          style={{
            textAlign: "center",
            color: "red",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          How to Play
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#F88379",
          borderRadius: 6,
          marginTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            For each correct answer you get 5 points
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ color: "white" }}>•</Text>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("QuizOne")}
          style={{
            backgroundColor: "green",
            padding: 15,
            width: 150,
            borderRadius: 15,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
          }}
        >
          <Text
            style={{ color: "beige", fontWeight: "600", textAlign: "center" }}
          >
            Start Quiz
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreenMain;

const styles = StyleSheet.create({});

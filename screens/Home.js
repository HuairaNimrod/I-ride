import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

function Home() {
  const [requestPressed, setRequestPressed] = useState(false);
  const [offerPressed, setOfferPressed] = useState(false);  
  const navigation = useNavigation();

  const handleRequestPressIn = () => {
    navigation.navigate('Request');
    setRequestPressed(true);
  };

  const handleRequestPressOut = () => {
    setRequestPressed(false);
  };

  const handleOfferPressIn = () => {
    // Handle the "Offer a Ride" touchable being pressed. Replace "Rides" with the OfferRide page.
    // navigation.navigate('Rides');
    navigation.navigate('Offer');
    setOfferPressed(true);
  };

  const handleOfferPressOut = () => {
    // Handle the "Offer a Ride" touchable being released
    setOfferPressed(false);
  };

  return (
    <SafeAreaView>

      <View style={styles.topBox}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "blue",
            marginBottom: 15,
          }}
        >
          With I-Ride
        </Text>
        <Text style={{ color: "blue" }}>You Decide Where To Go! </Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableWithoutFeedback
          onPressIn={handleRequestPressIn}
          onPressOut={handleRequestPressOut}
        >
          <View>
            <Image
              style={[
                styles.icons,
                requestPressed && {
                  backgroundColor: "#F79F9F",
                  borderWidth: 2,
                  borderColor: "#B90000",
                },
              ]}
              source={require("../images/lambo.png")}
            />
            <Text style={styles.iconsCaption}>Request a Ride</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPressIn={handleOfferPressIn}
          onPressOut={handleOfferPressOut}
        >
          <View>
            <Image
              style={[
                styles.icons,
                offerPressed && {
                  backgroundColor: "#F79F9F",
                  borderWidth: 2,
                  borderColor: "#B90000",
                },
              ]}
              source={require("../images/street2.png")}
            />
            <Text style={styles.iconsCaption}>Offer a Ride</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBox: {
    flexDirection: "column",
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "#B2E2F0",
    borderRadius: 15,
  },

  icons: {
    width: 145,
    height: 150,
    margin: 10,
    padding: 10,
    backgroundColor: "#D0D5D2",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#838383",
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    alignItems: "center",
    marginTop: 40,
  },

  iconsCaption: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Home;

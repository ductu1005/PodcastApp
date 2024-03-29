import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";

export default function PlayerScreen(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate
  const {navigate, goback} = navigation;
  return (
    <ImageBackground
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/Tu%2FEllipse%2010.png?alt=media&token=70f1056c-0e10-4e01-9083-b06d722f6c01",
      }}
      resizeMode="cover"
      style={{
        flex: 50,
      }}
      blurRadius={50}
    >
      <View style={styles.frame1}>
        <TouchableOpacity>
          <Icon
            name={"chevron-down"}
            style={{ }}
            size={35}
            color={"#fff"}
            onPress = {() => {navigate('UIScreen')}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="dots-horizontal"
            style={{ opacity: 1, top: 10 }}
            size={30}
            color={"#fff"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.frame2}>
        <View>
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/Tu%2FRectangle%2038.png?alt=media&token=780197d0-e51a-496c-8ff1-006b24341c50",
            }}
            style={styles.imageWrapper}
          />
        </View>

        <View>
          <Text style={styles.title1} >Tuổi trẻ, Tình yêu và công việc</Text>
          <Text style={styles.title2} onPress={()=> {navigate('OtherProfile')}}>Tun Phạm</Text>
        </View>
        <View>
          <Slider
            style={styles.progressBar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="black"
            minimumTrackTintColor="black"
            maximumTrackTintColor="black"
            
          />
          <View style={styles.progressLevelDur}>
            <Text style={styles.progressLabelText}>00:00</Text>
            <Text style={styles.progressLabelText}>05:06</Text>
          </View>
        </View>

        <View style={styles.musicControls}>
          <TouchableOpacity>
            <Image
              style={{ width: 23.79, height: 20.15 }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_random_btn.png?alt=media&token=dda7b7d4-d4f8-4f2f-a5fe-ceb20ad135e7",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 31.66,
                height: 31.66,
              }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_prev_btn.png?alt=media&token=97b7476e-3416-4d31-aff0-8151e4db3d4c",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 61.66,
                height: 61.66,
              }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_play_btn.png?alt=media&token=3fc8adf9-f0e6-47ea-82d7-ab2dca5194c8",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 31.66,
                height: 31.66,
                
              }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_next_btn.png?alt=media&token=2512b5de-5488-4e16-bbc7-f97031566d01",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 17.33, height: 23.83 }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_loop_btn.png?alt=media&token=114eb650-f8c3-4734-aa83-90aec1325949",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.frame3}>
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Icon
              name="heart"
              style={{ }}
              size={30}
              color={"red"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="comment"
              style={{ }}
              size={30}
              color={"#15d147"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="share-variant"
              style={{ }}
              size={30}
              color={"#0d72ff"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="bookmark"
              style={{ }}
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  frame1: {
    marginHorizontal: 20,
    top: 40,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  frame2: {
    //flex: 1,
    top: 30,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 20,
    paddingBottom: 30,
    marginHorizontal: 20,
    margin: 20,
  },

  frame3: {
    //flex: 1,
    top: 25,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 18,
    margin: 20,
    height: 60,
    
  },

  title1: {
    fontSize: 20,
    fontWeight: "bold",
    top: 30,
    marginLeft: 16,
    color: "#000000",
  },

  title2: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 16,
    color: "#000000"
  },

  imageWrapper: {
    //position: 'absolute',
    width: 308,
    height: 308,
    alignSelf: "center",
    top: 15,
    borderRadius: 20,
    backgroundColor: "#000000"
  },

  progressBar: {
    width: 310,
    height: 40,
    marginTop: 20,
    flexDirection: "row",
    alignSelf: 'center',
    opacity: 0.6
  },

  progressLevelDur: {
    width: 310,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: 'center',
  },

  progressLabelText: {
    fontSize: 12,
    marginHorizontal: 15
  },

  musicControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    top: 20,
    margin: 10
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    top: 15
  },
});

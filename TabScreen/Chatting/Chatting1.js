import React from 'react';
import { StyleSheet, ImageBackground, View} from 'react-native';
import { Appbar, Text } from 'react-native-paper';

function Chatting1({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack('') } />
        <Appbar.Content title="Adit" subtitle="Online" />
        <Appbar.Action icon="video" onPress={() => {}} />
        <Appbar.Action icon="phone" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>


      <View style={{flex : 1}}>
      <ImageBackground style={{flex : 1}} 
      source={require('./bgwa.jpeg')}>
        <Text style={styles.container}>Beli Batagor ?</Text>
        <Text style={styles.container2}>Dimana ?</Text>
        <Text style={styles.container}>Dirumah Bagas</Text>
        <Text style={styles.container2}>ayooo</Text>
        </ImageBackground>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container : {
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 20,
    marginRight: 'auto',
  },
  container2 : {
    justifyContent: "space-between",
    backgroundColor: "#C0EDA6",
    padding: 20,
    margin: 10,
    textAlign : 'right',
    borderRadius: 20,
    marginLeft: 'auto',
  }
});

export default Chatting1;
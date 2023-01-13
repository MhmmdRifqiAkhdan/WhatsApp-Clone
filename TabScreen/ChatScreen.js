import React from 'react';
import {View, TouchableOpacity} from 'react-native' ;
import {List, Avatar} from 'react-native-paper' ;


function ChatScreen({navigation}) {
    return (
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chatting1')}>
        <List.Item
            title="Adit"
            titleStyle={{color: 'black'}}
            description="Beli Batagor"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chatting/avatar.jpeg')} size={50}/>}
          />
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chatting2')}>
          <List.Item
            title="Zulham"
            titleStyle={{color: 'black'}}
            description="Kameranya lu atur gas"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chatting/avatar.jpeg')} size={50}/>}
          />
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chatting3')}>
          <List.Item
            title="Rifqi"
            titleStyle={{color: 'black'}}
            description="Disuruh japri ki abo"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chatting/avatar.jpeg')} size={50}/>}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chatting3')}>
          <List.Item
            title="Denny"
            titleStyle={{color: 'black'}}
            description="Otw nihhh"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chatting/avatar.jpeg')} size={50}/>}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chatting3')}>
          <List.Item
            title="Agung"
            titleStyle={{color: 'black'}}
            description="Ok"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chatting/avatar.jpeg')} size={50}/>}
          />
        </TouchableOpacity>
        


      </View>
    );
}
  
  export default ChatScreen;

import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton,  FlatList } from 'react-native-gesture-handler';
import { level2questions } from '../data/level2';

export default function LinksScreen() {
const [data, setData]  = useState([]);
useEffect(() => {setData(level2questions)}, [])

  return (
      <FlatList
       style={styles.container} 
       contentContainerStyle={styles.contentContainer}
        keyExtractor={(question, index) => index}
        data={level2questions}
        renderItem={({item, index}) => {
          return (
            <OptionButton
                    icon="ios-chatboxes"
                    label={`${index + 1}. ${item.question}`}
                    onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
                    isLastOption
            />
          );
        }}
      >
      
      </FlatList>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
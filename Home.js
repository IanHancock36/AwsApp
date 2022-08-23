import React, { useState, useEffect } from 'react';
import {
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
  } from 'react-native';

import { DataStore } from 'aws-amplify';
import { Todo } from './src/models';
export default function Home(){
return (
    <View>
        <Text>HEY</Text>
    </View>
)

}

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
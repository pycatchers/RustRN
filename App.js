/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
} from 'react-native';


// import { MobileAppBridge } from 'NativeModules';
const {MobileAppBridge} = NativeModules;


function App() {
  const [greet, setGreet] = useState('');

  useEffect(() => {
    async function displayHelloWorld() {
      try {
        let text = await MobileAppBridge.sayHelloWorld("Android")
        setGreet(text);
      } catch (e) {
          console.log(e)
      }
    }
    
    displayHelloWorld(this);
  }, [])

  return (
    <Text>{greet}</Text>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

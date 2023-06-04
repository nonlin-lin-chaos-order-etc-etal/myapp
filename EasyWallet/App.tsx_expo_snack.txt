// https://github.com/easy-wallet/easy-wallet

import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

const onPressCreateWallet  = () => {
  Alert.alert("todo onPressCreateWallet"); //TODO
}
const onPressImportWallet  = () => {
  Alert.alert("todo onPressImportWallet"); //TODO
}
const YourApp = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <Text style={styles.titleText}>Easy Wallet</Text>
      </View>
      <View
        style={{
          flex: 0.33,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.baseText}>An open source multiplatform crypto wallet.</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Button
          onPress={onPressCreateWallet}
          title="Create Wallet"
          accessibilityLabel="Press this button to create a new wallet."
        />
        <View style={{padding:5}}></View>
        <Button
          onPress={onPressImportWallet}
          title="Import Wallet"
          accessibilityLabel="Press this button to import an existing wallet &mdash; an Easy Wallet's one or an external one."
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default YourApp;
import React from 'react';
import {View, Button, Alert} from 'react-native';

const onPressCreateWallet  = () => {
  Alert.alert("todo onPressCreateWallet"); //TODO
}
const onPressImportWallet  = () => {
  Alert.alert("todo onPressImportWallet"); //TODO
}
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 10
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
  );
};

export default YourApp;
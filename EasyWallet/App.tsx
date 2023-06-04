/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button,
} from 'react-native';
import NativeMonero from 'rtn-monero/js/NativeMonero';

const App: () => JSX.Element = () => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{marginLeft: 20, marginTop: 20}}>
        Answer={result ?? '??'}
      </Text>
      <Button
        title=".answerTheUltimateQuestion"
        onPress={async () => {
          const value = await NativeMonero?.answerTheUltimateQuestion("gjh");
          setResult(value ?? null);
        }}
      />
    </SafeAreaView>
  );
};
export default App;

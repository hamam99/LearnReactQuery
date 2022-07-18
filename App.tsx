/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {getRandomQuotes} from './src/services';

const Main = () => {
  const [quote, setQuote] = useState('empty quotes');

  const testApiCall2 = async () => {
    const data = await getRandomQuotes();

    console.log('data', data);
    console.log('data.response', data.response);

    if (data.response.length > 0) {
      console.log('data.response[0].quote', data.response[0].quote);
      setQuote(data.response[0].quote);
    }
  };
  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <Button title="Refetch" onPress={testApiCall2} />
      <Text>{quote}</Text>
    </SafeAreaView>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;

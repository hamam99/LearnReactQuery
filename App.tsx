/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import axios from 'axios';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  SafeAreaView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import {QuotesModel} from './QuotesModel';

const Main = () => {
  const getQuotes = async () => {
    const {data} = await axios.get('https://animechan.vercel.app/api/quotes');

    return data;
  };

  const {
    data = [],
    isError,
    isFetching,
    refetch,
    error,
  } = useQuery('getQuotes', getQuotes, {manual: true});

  useEffect(() => {
    if (error) {
      ToastAndroid.show('errr gan', ToastAndroid.SHORT);
    }
  }, [error]);

  const onClick = () => {
    console.log('refetch');
    refetch();
  };
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      {isFetching && <ActivityIndicator />}
      <Button title="Refetch" onPress={onClick} />
      <Text>{data[0]?.quote}</Text>
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

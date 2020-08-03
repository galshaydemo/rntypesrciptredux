/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Dispatch} from 'react';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  PanResponder,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from './src/redux/reducer/rootReducer';
import {CountActions} from './src/redux/actions/countActions';
import {UserActions} from './src/redux/actions/UserAction';
import {NameActions} from './src/redux/actions/nameActions';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {IUser} from './src/interface/user';

const App = () => {
  const {count} = useSelector((state: AppState) => state.count);
  const {name} = useSelector((state: AppState) => state.name);
  const {data} = useSelector((state: AppState) => state.user);
  const countDispatch = useDispatch<Dispatch<CountActions>>();
  const nameDispatch = useDispatch<Dispatch<NameActions>>();
  const userDispatch = useDispatch<Dispatch<UserActions>>();
  const keyExtractor = (item: string, index: number) => index;
  const renderItem = (item: IUser) => (
    <View
      style={{
        borderWidth: 1,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        paddingHorizontal: 5,
        backgroundColor: '#BBCCBB',
      }}>
      <Text>{item.name}</Text>
    </View>
  );

  const handleIncrement = () => {
    countDispatch({type: 'INCREMENT'});
  };
  const handleDecrement = () => {
    countDispatch({type: 'DECREMENT'});
  };
  const handleChangeText = (_text: string) => {
    nameDispatch({type: 'SET_NAME', payload: _text});
  };
  const handleAddUser = () => {
    const u: IUser = {name: name, age: 20};
    userDispatch({type: 'USER_ADD', payload: u});
  };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <View style={{paddingTop: 60}}>
        <Text>yyyyyy</Text>
        <Button title="Add" onPress={handleIncrement}></Button>
        <Text>{count}</Text>
        <Button title="-" onPress={handleDecrement}></Button>
        <Button title="Add  User" onPress={handleAddUser}></Button>
        <Text>{name}</Text>
        <Text>{data[data.length - 1].name}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}></FlatList>
        <Text>Add User</Text>
        <TextInput
          style={{borderBottomWidth: 2, width: 100}}
          onChangeText={(text) => {
            handleChangeText(text);
          }}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

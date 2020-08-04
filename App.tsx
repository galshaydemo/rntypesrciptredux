/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Dispatch, useState} from 'react';
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
  const [age, setAge] = useState(21);
  const [tz, setTz] = useState('012345678');
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
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: '#BBCCBB',
      }}>
      <Text>{item.name}</Text>
      <Text>{item.id}</Text>
      <Text>{item.age.toString()}</Text>
      <Button
        title="Delete"
        onPress={() => {
          const u: IUser = {name: name, age: age, id: tz};
          userDispatch({type: 'USER_DELETE', payload: u});
          console.log(item.name);
        }}
      />
    </View>
  );

  const handleChangeText = (_text: string) => {
    nameDispatch({type: 'SET_NAME', payload: _text});
  };
  const handleAddUser = () => {
    const u: IUser = {name: name, age: age, id: tz};
    userDispatch({type: 'USER_ADD', payload: u});
  };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <View style={{paddingTop: 60}}>
        <View style={{marginBottom: 10, flexDirection: 'row'}}>
          <Text style={{paddingEnd: 10}}>User</Text>
          <TextInput
            style={{borderBottomWidth: 2, width: 100}}
            onChangeText={(text) => {
              handleChangeText(text);
            }}
          />
        </View>
        <View style={{marginBottom: 10, flexDirection: 'row'}}>
          <Text style={{paddingEnd: 10}}>Age</Text>
          <TextInput
            value={age.toString()}
            style={{borderBottomWidth: 2, width: 100}}
            onChangeText={(text) => {
              setAge(parseInt(text));
            }}
          />
          <Text style={{paddingEnd: 10}}>T.Z.</Text>
          <TextInput
            value={tz}
            style={{borderBottomWidth: 2, width: 100}}
            onChangeText={(text) => {
              setTz(text);
            }}
          />
        </View>
        <Button title="Add  User" onPress={handleAddUser}></Button>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}></FlatList>
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

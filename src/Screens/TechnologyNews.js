import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  Text,
  Card,
  Avatar,
  Colors,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';

import {getTechnologyArticles} from '../../src/service/news';
import Time from '../../src/component/Time';
import MyModal from '../../src/component/MyModal';

const TechnologyNews = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getTechnologyArticles().then(
      data => {
        setIsLoading(false);
        setData(data);
      },
      error => {
        alert('Internet Connection', 'Check your internet Connection');
      },
    );
  }, []);

  return isLoading ? (
    <View style={styles.indicatorView}>
      <ActivityIndicator size={25} animating={isLoading} />
      <Text>Please Wait</Text>
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Card style={{margin: 5}}>
              <Card.Cover
                source={{
                  uri:
                    item.urlToImage != null
                      ? item.urlToImage
                      : 'https://picsum.photos/700',
                }}
              />

              <Card.Title
                title={item.title}
                titleNumberOfLines={1}
                subtitle={item.description}
                subtitleNumberOfLines={2}
                titleStyle={styles.listTitle}
                subtitleStyle={styles.listText}
              />
              <Card.Actions>
                <MyModal
                  anm_Type="slide"
                  modal_Visible={modalVisible}
                  articleData={item}
                />
              </Card.Actions>
            </Card>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default TechnologyNews;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  listTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  listText: {
    fontSize: 12,
    color: 'black',
  },
  listView: {
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 5,
    borderRadius: 15,
    borderColor: 'white',
    height: 150,
  },
  indicatorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

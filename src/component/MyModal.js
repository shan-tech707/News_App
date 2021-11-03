import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {
  Card,
  Avatar,
  Colors,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';
import {Icon} from 'react-native-elements';
import Time from '../../src/component/Time';

const MyModal = ({anm_Type,modal_Visible,articleData,...rests}) => {
  const [modalVisible, setModalVisible] = useState(modal_Visible);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.centeredView}>
        <Modal
          animationType={anm_Type}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          {/* // Modified */}
          <View style={styles.modalView}>
            <View style={[styles.dirView, {justifyContent: 'space-between'}]}>
              <View style={styles.dirView}>
                <Text style={[styles.textStyle,{color:'#fff'}]}> Published: </Text>
                <Time time={articleData.publishedAt} />
              </View>
              {/* Close Button */}
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={24} color="#fff" />
              </Pressable>
            </View>

            <View style={styles.imgView}>
              <Card.Cover
                source={{
                  uri:
                    articleData.urlToImage != null
                      ? articleData.urlToImage
                      : 'https://picsum.photos/700',
                }}
              />
            </View>

            <View>
              <View
                style={[styles.dirView, {width: '85%', textAlign: 'center'}]}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                  Author:{' '}
                </Text>
                <Text style={{color: '#fff'}}>
                  {articleData.author != '' && articleData.author != null
                    ? articleData.author
                    : 'Anonymous'}
                </Text>
              </View>

              <View style={[styles.dirView]}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                  Source Name:{' '}
                </Text>
                <Text style={{color: '#fff'}}>
                  {articleData.source.name != '' &&
                  articleData.source.name != null
                    ? articleData.source.name
                    : 'Anonymous'}
                </Text>
              </View>

              <Text style={{color: '#fff', fontWeight: 'bold'}}>Title: </Text>
              <Text style={styles.descriptionView}>{articleData.title}</Text>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Description:{' '}
              </Text>
              <Text style={styles.descriptionView}>
                {articleData.description}
              </Text>
            </View>
          </View>
        </Modal>
      </View>

      {/* View Button */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>View</Text>
      </Pressable>
    </View>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#e8e1e2',
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    width: '95%',
    height: '70%',
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: '#666',
    paddingHorizontal: 15,
    marginLeft: 10,
    marginTop: 80,
  },
  imgView: {
    padding: 7,
  },
  descriptionView: {
    padding: 2,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
  },
  dirView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
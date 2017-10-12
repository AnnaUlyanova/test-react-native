import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import {renderIf} from 'render-if';

const REQUEST_URL_IMAGE = 'https://dog.ceo/api/breeds/image/random'

export default class Dog extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dataImage: null,
      dataBreed: null,
      loaded: false,
      showBreed: false,
    };

    this.renderBreed = this.renderBreed.bind(this);
    this.fetchImage = this.fetchImage.bind(this);
  }

  componentDidMount() {
    this.fetchImage()
  }

  fetchImage() {
    fetch(REQUEST_URL_IMAGE)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          dataImage: response.message,
          dataBreed: response.message.split('/')[5],
          loaded: true,
          showBreed: false,
        })
      })
      .done()
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading dogs...
        </Text>
      </View>
    );
  }

  renderBreed() {
    this.setState({
      showBreed: !this.state.showBreed,
    })
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    if(this.state.showBreed) {
      return (
        <View style={styles.container}>
          <Text>Hi Nizamshill</Text>
          <Text>did you know I'm {this.state.dataBreed}?</Text>
          <Button onPress={this.fetchImage} title='Back to dogs!'>Back to dogs!</Button>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={this.renderBreed}>
            <Image source={{uri: this.state.dataImage}} style={styles.picture}/>
          </TouchableHighlight>
        </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6b3',
  },
  picture: {
    width: 300,
    height: 300,
  },
  breedVisible: {
    fontSize: 16,
  },
});
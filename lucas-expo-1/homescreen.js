import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Header from './header'; // ajuste o caminho conforme onde está seu Header

const HomeScreen = () => {
  return (
    <View style={styles.principal}>
      <Header />
      <ScrollView>

        <View style={styles.container}>
          <Image
            source={require('./estudo.png')} // caminho ajustado
            style={styles.imagem}
          />
          <Text style={styles.textotarefa}>11:00{'\n'}estudar python</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={require('./estudo.png')}
            style={styles.imagem}
          />
          <Text style={styles.textotarefa}>12:30{'\n'}Almoço.</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={require('./estudo.png')}
            style={styles.imagem}
          />
          <Text style={styles.textotarefa}>14:00{'\n'}Trabalhar.</Text>
        </View>

        <View style={{ Flex:1 ,backgroundColor: '#1083D5', padding: 40,  justifyContent: 'flex-end'}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#D9D9D9',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
  imagem: {
    width: 170,
    height: 170,
  },
  textotarefa: {
    fontSize: 16,
    color: 'black',
  },
});

export default HomeScreen;
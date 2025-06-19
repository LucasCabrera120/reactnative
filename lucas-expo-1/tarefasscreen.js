import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  } from 'react-native';

import Header from './header.js'; // ou './components/Header' se estiver numa pastaconst App = () => {
const TarefasScreen = () => {
  return (
    <>
      <Header />

      <ScrollView style={styles.container}>
        {/* Título centralizado */}
        <Text style={styles.title}>Lista de Tarefas</Text>

        {/* Lista de tarefas */}
        <View style={styles.card}>
          <Image source={require('./estudo.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.taskTime}>12:00</Text>
            <Text>Estudar Python.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('./estudo.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text>12:30{'\n'}Almoço</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('./estudo.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text>14:00{'\n'}
              Trabalhar</Text>
          </View>
            {/* Círculo decorativo superior */}
                  <View style={styles.topCircle} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  taskTime: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default TarefasScreen;
      
      
      
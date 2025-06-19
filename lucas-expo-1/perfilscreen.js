import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  } from 'react-native';


import Header from './header.js'; // ou './components/Header' se estiver numa pastaconst App = () => {

     const PerfilScreen = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>

        {/* Círculo decorativo superior */}
        <View style={styles.topCircle} />

        {/* Avatar + Informações */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>Sua foto</Text>
          </View>

          <View style={styles.infoSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome:</Text>
              <TextInput style={styles.input} placeholder="Digite seu nome" />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Idade:</Text>
              <TextInput style={styles.input} placeholder="Digite sua idade" keyboardType="numeric" />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email:</Text>
              <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address" />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Gênero:</Text>
              <TextInput style={styles.input} placeholder="Digite seu gênero" keyboardType="email-address" />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd', // fundo cinza claro
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  avatarText: {
    fontWeight: 'bold',
  },
  infoSection: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});

export default PerfilScreen;
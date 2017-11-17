import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navigation from '../components/Navigation'
import RepositoryList from '../components/RepositoryList'

const data = [
  { name: 'Repository Name1', id: 1 },
  { name: 'Repository Name2', id: 2 },
  { name: 'Repository Name3', id: 3 },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      <RepositoryList items={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home

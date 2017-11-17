import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const RepositoryList = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={items}
        renderItem={({item}) => <Text>{item.name}</Text>} 
        keyExtractor={ item => item.id }
      />
    </View>
  )
}

RepositoryList.propTypes = {
  items: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

export default RepositoryList

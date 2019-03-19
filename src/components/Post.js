import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  author: {
    marginTop: 3,
    marginBottom: 8,
    opacity: 0.8,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    margin: 8,
    padding: 5,
  },
  bordaHorizontal: {
    alignSelf: 'stretch',
    marginTop: 8,
    marginBottom: 8,
    borderBottomWidth: 2,
    opacity: 0.1,
    marginStart: 5,
    marginEnd: 5,
  },
  postHeader: {
    alignSelf: 'stretch',
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
  },
  content: {},
});
const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
      <View style={styles.bordaHorizontal} />
    </View>
    <Text style={styles.content}>{data.content}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;

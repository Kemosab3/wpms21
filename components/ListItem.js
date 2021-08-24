import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';

const ListItem = ({singleMedia}) => {
  return (
    <TouchableOpacity style={styles.rivi}>
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  rivi: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 6,
    flex: 1,
  },

  image: {
    flex: 1,
    borderRadius: 6,
  },
  imagebox: {
    flex: 1,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },

  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default ListItem;

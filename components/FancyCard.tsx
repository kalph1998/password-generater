import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1683660108214-147c23fe909d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Palace</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {
    backgroundColor: 'white',
  },
  cardTitle: {
    fontSize: 18,
    paddingVertical: 20,
    color: 'black',
    textAlign: 'center',
  },
});

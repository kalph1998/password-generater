import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.cardContainer}>
          <View style={[styles.card, styles.redCard]}>
            <Text style={styles.flatCardText}>Red</Text>
          </View>
          <View style={[styles.card, styles.greenCard]}>
            <Text style={styles.flatCardText}>Green</Text>
          </View>
          <View style={[styles.card, styles.greenCard]}>
            <Text style={styles.flatCardText}>Green</Text>
          </View>
        </View>
      </ScrollView>
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
  cardContainer: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    borderRadius: 10,
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCard: {
    backgroundColor: 'red',
  },
  greenCard: {
    backgroundColor: 'limegreen',
  },
  flatCardText: {
    fontSize: 18,
  },
});

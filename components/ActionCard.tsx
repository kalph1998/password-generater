import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  async function openWebsite(websiteLink: string) {
    try {
      await Linking.openURL(websiteLink);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JS</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          }}
        />
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('www.google.com');
            }}>
            <Text style={styles.footerCta}>Read More</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  elevatedCard: {},
  headingContainer: {
    paddingVertical: 10,
  },
  headerText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  cardImage: {
    height: 150,
  },
  footerContainer: {
    paddingVertical: 20,
  },
  footerCta: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'center',
  },
});

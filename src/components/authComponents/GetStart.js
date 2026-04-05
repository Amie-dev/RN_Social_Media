import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';

const COLORS = {
  background: '#0F172A',
  primary: '#d8d100',
  text: '#F9FAFB',
  textSecondary: '#9CA3AF',
  buttonText: '#111827',
  card: '#1E293B',
};

const GetStart = ({ step, setStep }) => {
  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>

      {/* Logo Circle */}
      <View style={styles.logoContainer}>
        <Text style={[styles.logoText, { color: COLORS.primary }]}>
          S
        </Text>
      </View>

      {/* App Name */}
      <Text style={[styles.title, { color: COLORS.text }]}>
        SocialApp
      </Text>

      {/* Tagline */}
      <Text style={[styles.subtitle, { color: COLORS.textSecondary }]}>
        Share your life. Discover stories.{"\n"}Connect with the world instantly.
      </Text>

      {/* Feature Highlights */}
      <View style={[styles.card, { backgroundColor: COLORS.card }]}>
        <Text style={[styles.featureText, { color: COLORS.textSecondary }]}>
          📸 Post photos & videos
        </Text>
        <Text style={[styles.featureText, { color: COLORS.textSecondary }]}>
          ❤️ Like & interact with posts
        </Text>
        <Text style={[styles.featureText, { color: COLORS.textSecondary }]}>
          👥 Follow and connect
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: COLORS.primary }]}
        activeOpacity={0.85}
        onPress={() => setStep(prev => prev + 1)}
      >
        <View style={styles.buttonContent}>
          <Text style={[styles.buttonText, { color: COLORS.buttonText }]}>
            Get Started
          </Text>
          <Ionicons
            name="arrow-forward-circle"
            size={22}
            color={COLORS.buttonText}
            style={{ marginLeft: 8 }}
          />
        </View>
      </TouchableOpacity>

      {/* Footer Hint */}
      <Text style={[styles.footerText, { color: COLORS.textSecondary }]}>
        Already have an account? Log in
      </Text>

    </View>
  );
};

export default GetStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },

  card: {
    width: '100%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 40,
  },

  featureText: {
    fontSize: 14,
    marginBottom: 6,
  },

  button: {
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 50,
    elevation: 5,
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },

  footerText: {
    marginTop: 20,
    fontSize: 13,
  },
});
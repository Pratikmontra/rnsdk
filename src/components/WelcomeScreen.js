import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

const WelcomeScreen = ({ navigation, route }) => {
  const { callbacks, initialData, theme } = route.params;

  useEffect(() => {
    // Trigger callback when screen loads
    if (callbacks.onWelcomeComplete) {
      callbacks.onWelcomeComplete({
        screen: 'welcome',
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  const handleContinue = () => {
    navigation.navigate('Form');
  };

  const handleCancel = () => {
    Alert.alert(
      'Cancel SDK',
      'Are you sure you want to cancel?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            if (callbacks.onSDKCancel) {
              callbacks.onSDKCancel({
                screen: 'welcome',
                reason: 'user_cancelled',
              });
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme?.primaryColor || '#6200EE' }]}>
          Welcome to My SDK
        </Text>
        <Text style={styles.subtitle}>
          This SDK will guide you through a simple process
        </Text>
        
        {initialData && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Initial Data:</Text>
            <Text style={styles.dataText}>
              {JSON.stringify(initialData, null, 2)}
            </Text>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton, 
                   { backgroundColor: theme?.primaryColor || '#6200EE' }]}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={handleCancel}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default {WelcomeScreen};
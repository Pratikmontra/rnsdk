import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ResultScreen = ({ navigation, route }) => {
  const { callbacks, theme, formData } = route.params;

  useEffect(() => {
    // Trigger SDK completion callback
    if (callbacks.onSDKComplete) {
      callbacks.onSDKComplete({
        screen: 'result',
        formData,
        timestamp: new Date().toISOString(),
        status: 'success',
      });
    }
  }, []);

  const handleFinish = () => {
    // Additional completion callback if needed
    if (callbacks.onSDKComplete) {
      callbacks.onSDKComplete({
        screen: 'result',
        formData,
        timestamp: new Date().toISOString(),
        status: 'user_finished',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme?.primaryColor || '#6200EE' }]}>
          ✅ Success!
        </Text>
        <Text style={styles.subtitle}>
          Your information has been processed successfully
        </Text>

        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Submitted Data:</Text>
          <Text style={styles.resultText}>Name: {formData?.name}</Text>
          <Text style={styles.resultText}>Email: {formData?.email}</Text>
          {formData?.phone && (
            <Text style={styles.resultText}>Phone: {formData.phone}</Text>
          )}
        </View>

        <TouchableOpacity
          style={[styles.finishButton, 
                 { backgroundColor: theme?.primaryColor || '#6200EE' }]}
          onPress={handleFinish}
        >
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#6200EE',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6200EE',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#6200EE',
  },
  dataContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  dataText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'monospace',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 8,
    marginVertical: 30,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  finishButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default {ResultScreen};
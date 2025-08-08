import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SDKNavigator from './src/navigation/SDKNavigator';

class MySampleSDK {
  constructor() {
    this.callbacks = {};
  }

  // Method to initialize SDK with callbacks
  initialize(callbacks = {}) {
    this.callbacks = {
      onWelcomeComplete: callbacks.onWelcomeComplete || (() => {}),
      onFormSubmit: callbacks.onFormSubmit || (() => {}),
      onSDKComplete: callbacks.onSDKComplete || (() => {}),
      onSDKCancel: callbacks.onSDKCancel || (() => {}),
      onError: callbacks.onError || (() => {}),
    };
    return this;
  }

  // Method to get the SDK component
  getSDKComponent(props = {}) {
    return (
      <NavigationContainer independent={true}>
        <SDKNavigator 
          callbacks={this.callbacks}
          initialData={props.initialData}
          theme={props.theme}
        />
      </NavigationContainer>
    );
  }

  // Static method for easy usage
  static create(callbacks) {
    return new MySampleSDK().initialize(callbacks);
  }
}

export default MySampleSDK;

export { default as WelcomeScreen } from './src/components/WelcomeScreen';
export { default as FormScreen } from './src/components/FormScreen';
export { default as ResultScreen } from './src/components/ResultScreen';
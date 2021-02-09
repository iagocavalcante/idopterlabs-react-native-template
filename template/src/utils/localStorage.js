import AsyncStorage from '@react-native-community/async-storage';

// Low-level call to AsyncStorage
export const writeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    //TODO: add track event
    console.log('Error setting AsyncStorage: ' + key);
  }
};

// Low-level call to AsyncStorage
export const readItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    //TODO: add track event
    console.log('Error reading AsyncStorage: ' + key);
  }
};

export const clear = async () => {
  await AsyncStorage.clear();
};

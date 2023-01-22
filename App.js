import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';

const App = () => {
  const [countdown, setCountdown] = useState(4);
  const [opacity] = useState(new Animated.Value(0));
  const {height} = Dimensions.get('window');
  const [position] = useState(new Animated.Value(height));

  useEffect(() => {
    if (countdown > 1) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 1) {
      // do something here
    }
  }, [countdown]);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);

  useEffect(() => {
    if (countdown === 1) {
      Animated.timing(position, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
  }, [countdown]);

  return (
    <View>
      {countdown > 2 && (
        <Animated.Text style={{opacity}}>Fading in text</Animated.Text>
      )}
      {countdown !== 1 && countdown !== 4 && <Text>{countdown}</Text>}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: position,
          height: '50%',
        }}>
        <Text>This is a block of text that will scroll up</Text>
      </Animated.View>
    </View>
  );
};

export default App;

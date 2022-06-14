import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, KBText, KBContainer } from 'react-native-kbui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <KBContainer>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <KBText>adadad</KBText>
      </View>
    </KBContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

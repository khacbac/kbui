import * as React from 'react';

import { Text, View } from 'react-native';
import { multiply, KBText } from 'react-native-kbui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View>
      <Text>Result: {result}</Text>
      <KBText>adadad</KBText>
    </View>
  );
}

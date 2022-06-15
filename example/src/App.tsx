import * as React from 'react';

import { Text } from 'react-native';
import { multiply, KBText, KBContainer } from 'react-native-kbui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <KBContainer>
      <Text>Result: {result}</Text>
      <KBText>adadad</KBText>
    </KBContainer>
  );
}

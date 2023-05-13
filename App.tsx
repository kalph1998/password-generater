import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required()
    .min(4, 'should be min of 4 ')
    .max(16, 'should be max of 16'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setisPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

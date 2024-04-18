import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const request = await fetch('http://localhost:3000/api');
    console.log('request', request);

    const user = (await request.json()).data;
    setUser(user);
  };

  return (
    <View>
      <Button onPress={getUser} title="Carregar user"></Button>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
}

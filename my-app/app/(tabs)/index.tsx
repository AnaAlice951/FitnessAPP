import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import UserRepository, { Users } from '../../database/UserRepository';

const repository = new UserRepository();

export default function Home() {
  const [users, setUsers] = useState<Users[]>([]);

  const create = async () => {
    const id = await repository.create({
      name: 'Ana',
      age: 21,
      weight: 20,
      id: '',
      height: 160,
    });
    console.log('Created: ', id);

    await all();
  };

  const all = async () => {
    const users = await repository.all();
    setUsers(users);

    console.log(users);
  };

  return (
    <View>
      <Button onPress={create} title="create" />
      <Button onPress={all} title="all" />

      {users.map((user) => (
        <View key={user.id}>
          <Text>{user.id} - </Text>
          <Text>
            {user.name} {user.age} {user.height}
          </Text>
        </View>
      ))}
    </View>
  );
}

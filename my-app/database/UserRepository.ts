import { executeTransaction } from './SQLiteDatabase';

export type Users = {
  id: string;
  name: string;
  age: number;
  weight: number;
  height: number;
  observation?: string;
};

export default class UserRepository {
  constructor() {
    this.up();
    console.log('entrou aq');
  }

  public async up() {
    console.log('opa');
    await executeTransaction(
      'CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT, age INTEGER, weight NUMBER, height NUMBER, observation TEXT);'
    );
    console.log('criou');
  }

  public async down() {
    await executeTransaction('DROP TABLE users;');
  }

  public async create(user: Users) {
    const result = await executeTransaction(
      'INSERT INTO users (name, age, weight, height, observation) values (?, ?, ?, ?, ?);',
      [user.name, user.age, user.weight, user.height, user.observation ?? '']
    );
    return result.insertId;
  }

  public async all() {
    const result = await executeTransaction('SELECT * from users;');
    return result.rows._array;
  }

  public async remove(id: string) {
    const result = await executeTransaction('SELECT * from users;');
    return result.rows._array;
  }
}

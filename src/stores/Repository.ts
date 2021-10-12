import AsyncStorage from '@react-native-async-storage/async-storage';

class Repository<T> {
  private cache?: T;

  constructor(private readonly KEY: string, private readonly defaultValue: T = null) {}

  async get(): Promise<T | undefined> {
    if (this.cache) return this.cache;
    const data = await AsyncStorage.getItem(this.KEY);
    this.cache = data ? JSON.parse(data) : this.defaultValue;
    return this.cache;
  }

  set(data: T): void {
    AsyncStorage.setItem(this.KEY, JSON.stringify(data));
    this.cache = data;
  }
}

export default Repository;

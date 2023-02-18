// 全局共享数据示例
import { DEFAULT_NAME, DEFAULT_AGE } from '@/constants';
import { useState, useCallback } from 'react';

const useUser = () => {
  const [name] = useState<string>(DEFAULT_NAME);
  const [age, setAge] = useState<number>(DEFAULT_AGE);
  const increment = useCallback(() => setAge((c:number) => c + 1), []);
  const decrement = useCallback(() => setAge((c:number) => c - 1), []);
  return {
    name,
    age,
    increment,
    decrement
  };
};

export default useUser;

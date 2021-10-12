import React, { useCallback, useEffect, useState } from 'react';
import Repository from '@stores/Repository';
import { isEqual } from 'lodash';

const useRepository = <T extends any>(key: string, defaultValue?: T): [T, (state: T) => void, Repository<T>] => {
  const repository: Repository<T> = new Repository<T>(key, defaultValue);
  const [cache, setCache] = useState<T>();

  useEffect(() => {
    repository.get().then((value: T) => {
      if (isEqual(cache, value)) return;
      setCache(value);
    });
  }, []);

  const handleData = useCallback<(data: T) => void>((data: T) => {
    if (!data) return;
    setCache(data);
    repository.set(data);
  }, []);

  return [cache, handleData, repository];
};

export default useRepository;

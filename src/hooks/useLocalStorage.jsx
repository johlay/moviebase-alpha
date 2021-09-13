import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = JSON.parse(localStorage.getItem(key));

    // If "key" does exists in local storage then return "initialValue"
    if (!jsonValue) return initialValue;

    // If "key" does exists in local storage then return the stored value in local storage.
    if (jsonValue) return jsonValue;
  });

  useEffect(() => {
    // stringify the new value
    const newJsonValue = JSON.stringify(value);

    // save the value into local storage.
    localStorage.setItem(key, newJsonValue);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

import { useEffect, useState } from 'react'

export function useLocalStorage<T>(item: string, inititalValue: T) {
  const [value, setValue] = useState<T>(inititalValue)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const value = localStorage.getItem(item)
    if (value) setValue(JSON.parse(value))
  }, [window])

  function updateLocalStorage(newValue: T) {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return {
    value,
    updateLocalStorage,
  }
}

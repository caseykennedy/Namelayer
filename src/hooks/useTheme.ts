import { useEffect, useState } from 'react'

function useTheme() {
  const [theme, setTheme] = useState('default')

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'darkMode' : 'default')
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      document.documentElement.setAttribute('data-theme', localTheme)
    }
  }, [])

  return { toggleTheme, theme, setTheme }
}

export default useTheme

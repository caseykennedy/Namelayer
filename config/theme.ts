// Theme / Design system:

type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  initialColorModeName?: string
  useColorSchemeMediaQuery?: boolean
  useBodyStyles?: boolean
  useRootStyles?: boolean
  useLocalStorage?: boolean
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: string
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  fontWeights: {
    [key: string]: number
  }
  buttons: {
    [key: string]: {
      [key: string]: unknown
    }
  }
  maxWidth: string
  siteWidth: string
  grid: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  radius: string
}

// Theme
// ___________________________________________________________________

const breakpoints: string[] = ['768px', '1025px']

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`,
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    black: 'var(--color-black)',
    white: 'var(--color-white)',
    gray: 'var(--color-gray)',

    text: 'var(--color-white)',
    background: 'var(--color-bg)',

    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    muted: 'var(--color-muted)',
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0', // 0
    'var(--space-xxxxs)', // 1
    'var(--space-xxxs)', // 2
    'var(--space-xxs)', // 3
    'var(--space-xs)', // 4
    'var(--space-sm)', // 5
    'var(--space-md)', // 6
    'var(--space-lg)', // 7
    'var(--space-xl)', // 8
    'var(--space-xxl)', // 9
    'var(--space-xxxl)', // 10
    'var(--space-xxxxl)', // 11
    '10rem', // 12
    '12rem', // 13
  ],

  // Gutter
  // ___________________________________________________________________

  gutter: 'var(--gutter)',

  // Constants
  // ___________________________________________________________________

  maxWidth: '100%',
  siteWidth: '100%',
  border: '1px solid white',
  radius: '1rem',

  grid: {
    gap: '0.5rem',
  },

  transition: {
    all: 'all 0.11s ease-in-out 0s',
    global: '0.11s ease-in-out 0s',
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)',
    },
  },

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"DMMono", Liberation Mono, Menlo, Courier, monospace`,
    heading: `"DMMono", Liberation Mono, Menlo, Courier, monospace`,
    sans: `"Karla", Arial, Liberation Mono, Menlo, Courier, monospace`,
    mono: `"DMMono", Consolas, Liberation Mono, Menlo, Courier, monospace`,
  },

  fontSizes: [
    'var(--text-xs)', // 0
    'var(--text-sm)', // 1
    'var(--text-base-size)', // 2
    'var(--text-md)', // 3
    'var(--text-lg)', // 4
    'var(--text-xl)', // 5
    'var(--text-xxl)', // 6
    'var(--text-xxxl)', // 7
    'var(--text-xxxxl)', // 7
  ],

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700,
  },

  // Button
  // ___________________________________________________________________

  buttons: {
    primary: {
      bg: 'transparent',
      color: 'midgray',
      borderColor: 'midgray',
      borderRadius: 0,
      cursor: 'pointer',
      fontSize: 1,
      py: 2,
      px: 4,
      '&:hover': {
        bg: 'midgray',
      },
    },
  },
}

export default theme

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      secondary: 'blue',
      neutral: 'neutral',
      warning: 'orange',
      success: 'green',
      error: 'red',
    },

    theme: {
      colors: {
        // Red (Primary)
        red: {
          50: '#Fdeeee',
          100: '#Fbcaca',
          200: '#F59a9a',
          300: '#F06b6b',
          400: '#E54848',
          500: '#D32f2f',
          600: '#A32626',
          700: '#7A1d1d',
          800: '#5C1414',
          900: '#3B0d0d',
        },
        // Indigo/Blue
        blue: {
          50: '#Eef4fb',
          100: '#D6e3f5',
          200: '#A5c0e8',
          300: '#7fa6d6',
          400: '#5f86b8',
          500: '#3f6aa1',
          600: '#355d8a',
          700: '#2c4a73',
          800: '#22385c',
          900: '#1a2a44',
        },
        // Green (Success)
        green: {
          100: '#D7ead9',
          300: '#7fb77e',
          500: '#3a7d44',
          700: '#1f5134',
          900: '#0f2f1f',
        },
        // Orange (Warning)
        orange: {
          100: '#Fce0c3',
          300: '#F6b46a',
          500: '#E98a2a',
          700: '#9c5315',
          900: '#5a2e0c',
        },
        // Neutral
        neutral: {
          50: '#F6f3ee',
          100: '#Eae7e1',
          300: '#B5b5b5',
          500: '#7a7a7a',
          700: '#4a4a4a',
          900: '#1a1a1a',
        },
        // Base
        'base-white': '#faf7f2',
        'base-black': '#111111',
      },

    },

    button: {
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'ghost',
          class: '[color:var(--color-icon-1)] hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated',
        },
      ],
    },

    tooltip: {
      slots: {
        content: 'z-20 bg-neutral-900 text-base-white shadow-lg rounded-xl ring-0 h-auto! px-3 py-2 text-sm font-normal max-w-xs',
        text: 'whitespace-normal!',
      },
    },

    formField: {
      slots: {
        root: '',
        wrapper: '',
        labelWrapper: 'flex content-center items-center justify-between gap-1',
        label: 'block font-medium text-default',
        container: 'relative',
        description: 'text-muted',
        error: 'mt-1 text-error',
        hint: 'text-muted',
        help: 'mt-2 text-muted',
      },
      variants: {
        size: {
          xs: {
            root: 'text-xs',
          },
          sm: {
            root: 'text-xs',
          },
          md: {
            root: 'text-sm',
          },
          lg: {
            root: 'text-sm',
          },
          xl: {
            root: 'text-base',
          },
        },
        required: {
          true: {
            label: 'after:content-[\'*\'] after:ms-0.5 after:text-error',
          },
        },
        orientation: {
          vertical: {
            container: 'mt-1',
          },
          horizontal: {
            root: 'flex justify-between place-items-baseline gap-2',
          },
        },
      },
      defaultVariants: {
        size: 'md',
      },
    },

  },
});

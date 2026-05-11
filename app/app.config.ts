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
        size: 'lg',
      },

      slots: {
        base: [
          'inline-flex items-center justify-center gap-2 rounded-xl b2-m!',
          'transition-colors duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        ],
      },

      variants: {
        color: {
          primary: '',
          secondary: '',
          neutral: '',
          success: '',
          warning: '',
          error: '',
        },

        variant: {
          solid: '',
          outline: '',
          ghost: '',
          soft: '',
          link: '',
        },

        size: {
          xs: {
            base: 'px-2 py-1',
          },
          sm: {
            base: 'px-3 py-1.5',
          },
          md: {
            base: 'px-4 py-2',
          },
          lg: {
            base: 'px-5 py-3',
          },
          xl: {
            base: 'px-6 py-4',
          },
        },
      },

      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-button-primary-default text-base-white hover:bg-button-primary-hover! active:bg-accent-primary-pressed!',
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'border border-button-primary-default text-button-primary-default hover:bg-surface-brand-primary',
        },
        {
          color: 'primary',
          variant: 'ghost',
          class: 'text-button-primary-default hover:bg-surface-brand-primary',
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'bg-surface-brand-primary text-button-primary-default hover:bg-surface-brand-secondary',
        },
        {
          color: 'primary',
          variant: 'link',
          class: 'text-button-primary-default underline-offset-4 hover:underline',
        },

        {
          color: 'neutral',
          variant: 'solid',
          class: 'bg-neutral-900 text-base-white hover:bg-neutral-700',
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'border border-neutral-300 text-text-1 hover:bg-surface-2',
        },
        {
          color: 'neutral',
          variant: 'ghost',
          class: 'text-icon-1 hover:bg-surface-2',
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: 'bg-surface-2 text-text-1 hover:bg-surface-3)]',
        },
        {
          color: 'neutral',
          variant: 'link',
          class: 'text-text-2 hover:text-text-1 underline',
        },

        {
          color: 'success',
          variant: 'solid',
          class: 'bg-success text-white hover:brightness-110',
        },
        {
          color: 'success',
          variant: 'outline',
          class: 'border border-success text-success',
        },

        {
          color: 'warning',
          variant: 'solid',
          class: 'bg-warning text-white',
        },
        {
          color: 'warning',
          variant: 'outline',
          class: 'border border-warning text-warning',
        },

        {
          color: 'error',
          variant: 'solid',
          class: 'bg-error text-white',
        },
        {
          color: 'error',
          variant: 'outline',
          class: 'border border-error text-error',
        },

        {
          size: 'xs',
          square: true,
          class: 'p-1',
        },
        {
          size: 'sm',
          square: true,
          class: 'p-1.5',
        },
        {
          size: 'md',
          square: true,
          class: 'p-1.5',
        },
        {
          size: 'lg',
          square: true,
          class: 'p-2',
        },
        {
          size: 'xl',
          square: true,
          class: 'py-2 px-4',
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin',
          },
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin',
          },
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
        label: 'block b2-m text-default mobile:c1-m',
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

    input: {
      slots: {
        root: 'relative inline-flex items-center',
        base: [
          'w-full rounded-md border-0 appearance-none placeholder:b2-m focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors b2-m!',
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 text-dimmed',
      },
    },

    checkbox: {
      slots: {
        root: 'relative flex items-start',
        container: 'flex items-center',
        base: 'rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2',
        indicator: 'flex items-center justify-center size-full text-inverted',
        icon: 'shrink-0 size-full',
        wrapper: 'w-full',
        label: 'block b2-s',
        description: 'text-muted',
      },
    },

    select: {
      slots: {
        base: [
          'relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors',
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 text-dimmed',
        value: 'truncate pointer-events-none b2-m',
        placeholder: 'truncate b2-m!',
        arrow: 'fill-bg stroke-default',
        content: 'max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col',
        viewport: 'relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1',
        group: 'p-1 isolate',
        empty: 'text-center text-muted',
        label: 'font-semibold text-highlighted',
        separator: '-mx-1 my-1 h-px bg-border',
        item: [
          'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50',
          'transition-colors before:transition-colors',
        ],
        itemLeadingIcon: [
          'shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default',
          'transition-colors',
        ],
        itemLeadingAvatar: 'shrink-0',
        itemLeadingAvatarSize: '',
        itemLeadingChip: 'shrink-0',
        itemLeadingChipSize: '',
        itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
        itemTrailingIcon: 'shrink-0',
        itemWrapper: 'flex-1 flex flex-col min-w-0',
        itemLabel: 'truncate b2-m',
        itemDescription: 'truncate text-muted',
      },
    },

  },
});

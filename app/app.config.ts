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
          'inline-flex items-center justify-center gap-2 rounded-3xl b2-m',
          'transition-colors duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2',
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
          class: 'border-button-primary-default text-button-primary-default hover:bg-surface-brand-primary',
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
          color: 'secondary',
          variant: 'solid',
          class: 'bg-blue-100 text-blue-500 hover:bg-blue-200 active:bg-blue-300',
        },
        {
          color: 'secondary',
          variant: 'outline',
          class: 'text-blue-500 hover:bg-blue-50 active:bg-blue-200',
        },

        {
          color: 'neutral',
          variant: 'solid',
          class: 'bg-neutral-900 text-base-white hover:bg-neutral-700',
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'border-neutral-300 text-text-1 hover:bg-surface-2',
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

    sidebar: {
      slots: {
        root: 'peer [--sidebar-width:16rem] [--sidebar-width-icon:5rem] bg-base-white',
        gap: 'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
        container: 'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear lg:flex',
        inner: 'flex size-full flex-col overflow-hidden divide-y divide-default',
        header: 'flex items-center gap-1.5 overflow-hidden px-4 min-h-(--ui-header-height)',
        wrapper: 'min-w-0 flex-1',
        title: 'text-highlighted font-semibold truncate',
        description: 'text-muted text-sm truncate',
        actions: 'flex items-center gap-1.5 shrink-0',
        close: '',
        body: 'flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4',
        footer: 'flex items-center gap-1.5 overflow-hidden p-4',
        rail: [
          'absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-px lg:flex hover:after:bg-(--ui-border-accented)',
          'after:transition-colors',
        ],
      },
      variants: {
        side: {
          left: {
            container: 'left-0 border-e border-default',
            rail: 'end-0 translate-x-1/2',
          },
          right: {
            container: 'right-0 border-s border-default',
            rail: '-start-px -translate-x-1/2',
          },
        },
        collapsible: {
          offcanvas: {
            root: 'group/sidebar hidden lg:block',
            gap: 'data-[state=collapsed]:w-0',
          },
          icon: {
            root: 'group/sidebar hidden lg:block',
            gap: 'data-[state=collapsed]:w-(--sidebar-width-icon)',
            container: 'data-[state=collapsed]:w-(--sidebar-width-icon)',
            actions: 'group-data-[state=collapsed]/sidebar:hidden',
            body: 'group-data-[state=collapsed]/sidebar:overflow-hidden',
          },
          none: {
            root: 'h-full w-(--sidebar-width)',
          },
        },
        variant: {
          sidebar: {},
          floating: {
            container: 'p-4 border-transparent',
            inner: 'rounded-lg ring ring-default shadow-lg',
            rail: 'inset-y-4',
          },
          inset: {
            container: 'py-4 border-transparent',
            inner: 'divide-transparent',
            rail: 'inset-y-4',
          },
        },
      },
      compoundVariants: [
        {
          side: 'left',
          collapsible: [
            'offcanvas',
            'icon',
          ],
          class: {
            rail: 'cursor-w-resize data-[state=collapsed]:cursor-e-resize',
          },
        },
        {
          side: 'right',
          collapsible: [
            'offcanvas',
            'icon',
          ],
          class: {
            rail: 'cursor-e-resize data-[state=collapsed]:cursor-w-resize',
          },
        },
        {
          side: 'left',
          collapsible: 'none',
          class: {
            root: 'border-e border-default',
          },
        },
        {
          side: 'right',
          collapsible: 'none',
          class: {
            root: 'border-s border-default',
          },
        },
        {
          side: 'left',
          collapsible: 'offcanvas',
          class: {
            container: 'data-[state=collapsed]:-left-(--sidebar-width)',
          },
        },
        {
          side: 'right',
          collapsible: 'offcanvas',
          class: {
            container: 'data-[state=collapsed]:-right-(--sidebar-width)',
          },
        },
        {
          variant: 'floating',
          collapsible: 'icon',
          class: {
            gap: 'data-[state=collapsed]:w-[calc(var(--sidebar-width-icon)+--spacing(8))]',
            container: 'data-[state=collapsed]:w-[calc(var(--sidebar-width-icon)+--spacing(8)+2px)]',
          },
        },
        {
          variant: 'floating',
          collapsible: 'none',
          class: {
            root: 'p-4 border-0',
          },
        },
        {
          variant: 'inset',
          collapsible: 'none',
          class: {
            root: 'py-4 border-0',
          },
        },
        {
          variant: 'floating',
          side: 'left',
          class: {
            rail: 'end-4',
          },
        },
        {
          variant: 'floating',
          side: 'right',
          class: {
            rail: 'start-[calc(--spacing(4)-1px)]',
          },
        },
      ],
    },

    navigationMenu: {
      slots: {
        root: 'relative flex gap-1.5 [&>div]:min-w-0',
        list: 'isolate min-w-0 space-y-1',
        label: 'w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5',
        item: 'min-w-0',
        link: 'group relative w-full flex items-center gap-1.5 before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
        linkLeadingIcon: 'shrink-0 size-6',
        linkLeadingAvatar: 'shrink-0',
        linkLeadingAvatarSize: '2xs',
        linkLeadingChipSize: 'sm',
        linkTrailing: 'group ms-auto inline-flex gap-1.5 items-center',
        linkTrailingBadge: 'shrink-0',
        linkTrailingBadgeSize: 'sm',
        linkTrailingIcon: 'size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200',
        linkLabel: 'truncate b2-m',
        linkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
        childList: 'isolate',
        childLabel: 'text-xs text-highlighted',
        childItem: '',
        childLink: 'group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
        childLinkWrapper: 'min-w-0',
        childLinkIcon: 'size-5 shrink-0',
        childLinkLabel: 'truncate',
        childLinkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
        childLinkDescription: 'text-muted',
        separator: 'px-2 h-px bg-border',
        viewportWrapper: 'absolute top-full left-0 flex w-full',
        viewport: 'relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left,right] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-1',
        content: '',
        indicator: 'absolute left-0 data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-2 w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200',
        arrow: 'relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-1 rounded-xs',
      },
      variants: {
        color: {
          primary: {
            link: 'focus-visible:before:ring-primary',
            childLink: 'focus-visible:before:ring-primary',
          },
          secondary: {
            link: 'focus-visible:before:ring-secondary',
            childLink: 'focus-visible:before:ring-secondary',
          },
        },
        highlightColor: {
          primary: '',
          secondary: '',
        },
        variant: {
          pill: '',
          link: '',
        },
        orientation: {
          horizontal: {
            root: 'items-center justify-between',
            list: 'flex items-center',
            item: 'py-2',
            link: 'px-2.5 py-1.5 before:inset-x-px before:inset-y-0',
            childList: 'grid p-2',
            childLink: 'px-3 py-2 gap-2 before:inset-x-px before:inset-y-0',
            childLinkLabel: 'font-medium',
            content: 'absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto',
          },
          vertical: {
            root: 'flex-col',
            link: 'flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0',
            childLabel: 'px-1.5 py-0.5',
            childLink: 'p-1.5 gap-1.5 before:inset-y-px before:inset-x-0',
          },
        },
        contentOrientation: {
          horizontal: {
            viewportWrapper: 'justify-center',
            content: 'data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]',
          },
          vertical: {
            viewport: 'sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left) rtl:left-auto rtl:right-[calc(100%-var(--reka-navigation-menu-viewport-left)-var(--reka-navigation-menu-viewport-width))]',
          },
        },
        active: {
          true: {
            link: 'before:bg-surface-brand-primary!',
            childLink: 'text-highlighted',
            childLinkIcon: 'text-default',
          },
          false: {
            link: 'text-muted',
            linkLeadingIcon: 'text-dimmed',
            childLink: [
              'hover:before:bg-elevated/50 text-default hover:text-highlighted',
              'transition-colors before:transition-colors',
            ],
            childLinkIcon: [
              'text-dimmed group-hover:text-default',
              'transition-colors',
            ],
          },
        },
        disabled: {
          true: {
            link: 'cursor-not-allowed opacity-75',
          },
        },
        highlight: {
          true: '',
        },
        level: {
          true: '',
        },
        collapsed: {
          true: '',
        },
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          contentOrientation: 'horizontal',
          class: {
            childList: 'grid-cols-2 gap-2',
          },
        },
        {
          orientation: 'horizontal',
          contentOrientation: 'vertical',
          class: {
            childList: 'gap-1',
            content: 'w-60',
          },
        },
        {
          orientation: 'vertical',
          collapsed: false,
          class: {
            childList: 'ms-5 border-s border-default',
            childItem: 'ps-1.5 -ms-px',
            content: 'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden',
          },
        },
        {
          orientation: 'vertical',
          collapsed: true,
          class: {
            link: 'px-1.5',
            linkLabel: 'hidden',
            linkTrailing: 'hidden',
            content: 'shadow-sm rounded-sm min-h-6 p-1',
          },
        },
        {
          orientation: 'horizontal',
          highlight: true,
          class: {
            link: [
              'after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full',
              'after:transition-colors',
            ],
          },
        },
        {
          orientation: 'vertical',
          highlight: true,
          level: true,
          class: {
            link: [
              'after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full',
              'after:transition-colors',
            ],
          },
        },
        {
          disabled: false,
          active: false,
          variant: 'pill',
          class: {
            link: [
              'hover:text-highlighted hover:before:bg-surface-3',
              'transition-colors before:transition-colors',
            ],
            linkLeadingIcon: [
              'group-hover:text-default',
              'transition-colors',
            ],
          },
        },
        {
          disabled: false,
          active: false,
          variant: 'pill',
          orientation: 'horizontal',
          class: {
            link: 'data-[state=open]:text-highlighted',
            linkLeadingIcon: 'group-data-[state=open]:text-default',
          },
        },
        {
          disabled: false,
          variant: 'pill',
          highlight: true,
          orientation: 'horizontal',
          class: {
            link: 'data-[state=open]:before:bg-elevated/50',
          },
        },
        {
          disabled: false,
          variant: 'pill',
          highlight: false,
          active: false,
          orientation: 'horizontal',
          class: {
            link: 'data-[state=open]:before:bg-elevated/50',
          },
        },
        {
          color: 'primary',
          variant: 'pill',
          active: true,
          class: {
            link: 'text-primary',
            linkLeadingIcon: 'text-primary group-data-[state=open]:text-primary',
          },
        },
        {
          color: 'neutral',
          variant: 'pill',
          active: true,
          class: {
            link: 'text-highlighted',
            linkLeadingIcon: 'text-highlighted group-data-[state=open]:text-highlighted',
          },
        },
        {
          variant: 'pill',
          active: true,
          highlight: false,
          class: {
            link: 'before:bg-elevated',
          },
        },
        {
          variant: 'pill',
          active: true,
          highlight: true,
          disabled: false,
          class: {
            link: [
              'hover:before:bg-elevated/50',
              'before:transition-colors',
            ],
          },
        },
        {
          disabled: false,
          active: false,
          variant: 'link',
          class: {
            link: [
              'hover:text-highlighted',
              'transition-colors',
            ],
            linkLeadingIcon: [
              'group-hover:text-default',
              'transition-colors',
            ],
          },
        },
        {
          disabled: false,
          active: false,
          variant: 'link',
          orientation: 'horizontal',
          class: {
            link: 'data-[state=open]:text-highlighted',
            linkLeadingIcon: 'group-data-[state=open]:text-default',
          },
        },
        {
          color: 'primary',
          variant: 'link',
          active: true,
          class: {
            link: 'text-primary',
            linkLeadingIcon: 'text-primary group-data-[state=open]:text-primary',
          },
        },
        {
          color: 'neutral',
          variant: 'link',
          active: true,
          class: {
            link: 'text-highlighted',
            linkLeadingIcon: 'text-highlighted group-data-[state=open]:text-highlighted',
          },
        },
        {
          highlightColor: 'primary',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-primary',
          },
        },
        {
          highlightColor: 'neutral',
          highlight: true,
          level: true,
          active: true,
          class: {
            link: 'after:bg-inverted',
          },
        },
      ],
      defaultVariants: {
        color: 'primary',
        highlightColor: 'primary',
        variant: 'pill',
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
      variants: {
        fieldGroup: {
          horizontal: {
            root: 'group has-focus-visible:z-[1]',
            base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none',
          },
          vertical: {
            root: 'group has-focus-visible:z-[1]',
            base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none',
          },
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-sm/4 gap-1',
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
          },
          sm: {
            base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
          },
          md: {
            base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
          },
          lg: {
            base: 'px-3 py-2 text-base/5 gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
          },
          xl: {
            base: 'px-3 py-5 gap-2 h5-b! placeholder:h5-b!',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6',
          },
        },
        variant: {
          outline: 'text-highlighted bg-default ring ring-inset ring-accented',
          soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
          subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
          ghost: 'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'text-highlighted bg-transparent',
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: '',
        },
        leading: {
          true: '',
        },
        trailing: {
          true: '',
        },
        loading: {
          true: '',
        },
        highlight: {
          true: '',
        },
        fixed: {
          false: '',
        },
        type: {
          file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none',
        },
      },
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'outline',
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

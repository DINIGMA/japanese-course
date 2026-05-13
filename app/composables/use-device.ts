export const useDevice = () => {
  const isMobile = computed(() => {
    const viewport = useViewport();
    return viewport.isLessThan('tablet');
  });

  const isTablet = computed(() => {
    const viewport = useViewport();
    return viewport.isGreaterOrEquals('tablet') && viewport.isLessThan('desktop');
  });

  const isDesktop = computed(() => {
    const viewport = useViewport();
    return viewport.isGreaterOrEquals('desktop');
  });

  const isTouch = computed(() => 'ontouchstart' in window || navigator?.maxTouchPoints > 0);

  return { isDesktop, isTablet, isMobile, isTouch };
};

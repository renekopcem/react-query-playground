const defaultStaleTime = 30000;

export const QueryConfigPresets = {
  MANUAL_LOAD: { staleTime: defaultStaleTime, enabled: false },

  /**
   * Will load query only once on component mount, skipping all react-query automatic refetching.
   */
  MANUAL_REFRESH: {
    staleTime: defaultStaleTime,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  },

  MANUAL_CONTROL: {
    staleTime: defaultStaleTime,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: false,
  },

  /**
   * Will load query only once on component mount and cache it, skipping all react-query automatic refetching.
   */
  CACHE_RESULT: {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  },

  /**
   * Will load query when component is mounted -> on page load and not refetched again
   */
  REFRESH_ON_MOUNT: {
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  },
};

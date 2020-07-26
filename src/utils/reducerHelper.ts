export const setErrorReducer = (state: any, action: any, type: string) => {
  return {
    ...state,
    loading: false,
    success: {
      type: '',
      status: false,
      payload: {},
    },
    error: {
      type,
      status: true,
      payload: action.payload,
    },
  };
};

export const setSuccessReducer = (state: any, action: any, type: string) => {
  return {
    ...state,
    loading: false,
    success: {
      type,
      status: true,
      payload: action.payload.Response || '',
    },
    error: {
      type: '',
      status: false,
      payload: {},
    },
  };
};

export const setLoadingReducer = (state: any) => {
  return {
    ...state,
    loading: true,
    success: {
      type: '',
      status: false,
      payload: {},
    },
    error: {
      type: '',
      status: false,
      payload: {},
    },
  };
};

export const resetAPIResponseReducer = (state: any) => {
  return {
    ...state,
    loading: false,
    success: {
      type: '',
      status: false,
      payload: {},
    },
    error: {
      type: '',
      status: false,
      payload: {},
    },
  };
};

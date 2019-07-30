const Types = {
  POST_LOGIN_REQUEST: 'login/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS: 'login/POST_LOGIN_SUCCESS',
  POST_LOGIN_FAILURE: 'login/POST_LOGIN_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST_LOGIN_REQUEST: {
      return {
        loading: true,
      };
    }
    case Types.POST_LOGIN_SUCCESS:
    case Types.POST_LOGIN_FAILURE: {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  postLoginRequest: data => ({
    type: Types.POST_LOGIN_REQUEST,
    payload: { data },
  }),

  postLoginSuccess: data => ({
    type: Types.POST_LOGIN_SUCCESS,
    payload: {
      data,
    },
  }),

  postLoginFailure: () => ({
    type: Types.POST_LOGIN_FAILURE,
  }),
};

export const LoginTypes = Types;

export const LoginActions = Creators;

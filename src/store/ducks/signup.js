const Types = {
  POST_SIGNUP_REQUEST: 'signup/POST_SIGNUP_REQUEST',
  POST_SIGNUP_SUCCESS: 'signup/POST_SIGNUP_SUCCESS',
  POST_SIGNUP_FAILURE: 'signup/POST_SIGNUP_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST_SIGNUP_REQUEST: {
      return {
        loading: true,
      };
    }
    case Types.POST_SIGNUP_SUCCESS:
    case Types.POST_SIGNUP_FAILURE: {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  postSignupRequest: data => ({
    type: Types.POST_SIGNUP_REQUEST,
    payload: { data },
  }),

  postSignupSuccess: data => ({
    type: Types.POST_SIGNUP_SUCCESS,
    payload: {
      data,
    },
  }),

  postSignupFailure: () => ({
    type: Types.POST_SIGNUP_FAILURE,
  }),
};

export const SignupTypes = Types;

export const SignupActions = Creators;

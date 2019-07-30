const Types = {
  SET_USER: 'auth/SET_USER',
  LOGOUT_USER: 'auth/LOGOUT_USER',
};

const INITIAL_STATE = {
  logged: false,
  data: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER: {
      return {
        ...state,
        logged: true,
        data: action.payload.data,
      };
    }

    case Types.LOGOUT_USER: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}

export const Creators = {
  setUser: data => ({
    type: Types.SET_USER,
    payload: {
      data,
    },
  }),

  logoutUser: () => ({
    type: Types.LOGOUT_USER,
  }),
};

export const AuthTypes = Types;

export const AuthActions = Creators;

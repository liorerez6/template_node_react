import {
  HEALTH_PING_REQUEST,
  HEALTH_PING_SUCCESS,
  HEALTH_PING_FAIL,
  HEALTH_PING_RESET,
  HEALTH_ECHO_REQUEST,
  HEALTH_ECHO_SUCCESS,
  HEALTH_ECHO_FAIL,
  HEALTH_ECHO_RESET,
} from "../actions/healthActions";

const initialState = {
  ping: { data: null, loading: false, error: null },
  echo: { data: null, loading: false, error: null },
};

export default function healthReducer(state = initialState, action) {
  switch (action.type) {
    // PING
    case HEALTH_PING_REQUEST:
      return {
        ...state,
        ping: { data: null, loading: true, error: null },
      };
    case HEALTH_PING_SUCCESS:
      return {
        ...state,
        ping: { data: action.payload, loading: false, error: null },
      };
    case HEALTH_PING_FAIL:
      return {
        ...state,
        ping: { data: null, loading: false, error: action.payload },
      };
    case HEALTH_PING_RESET:
      return {
        ...state,
        ping: { data: null, loading: false, error: null },
      };

    // ECHO
    case HEALTH_ECHO_REQUEST:
      return {
        ...state,
        echo: { data: null, loading: true, error: null },
      };
    case HEALTH_ECHO_SUCCESS:
      return {
        ...state,
        echo: { data: action.payload, loading: false, error: null },
      };
    case HEALTH_ECHO_FAIL:
      return {
        ...state,
        echo: { data: null, loading: false, error: action.payload },
      };
    case HEALTH_ECHO_RESET:
      return {
        ...state,
        echo: { data: null, loading: false, error: null },
      };

    default:
      return state;
  }
}

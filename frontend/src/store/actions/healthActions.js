import * as healthService from "../../api/healthService";

// Action Types
export const HEALTH_PING_REQUEST = "HEALTH_PING_REQUEST";
export const HEALTH_PING_SUCCESS = "HEALTH_PING_SUCCESS";
export const HEALTH_PING_FAIL    = "HEALTH_PING_FAIL";
export const HEALTH_PING_RESET   = "HEALTH_PING_RESET";

export const HEALTH_ECHO_REQUEST = "HEALTH_ECHO_REQUEST";
export const HEALTH_ECHO_SUCCESS = "HEALTH_ECHO_SUCCESS";
export const HEALTH_ECHO_FAIL    = "HEALTH_ECHO_FAIL";
export const HEALTH_ECHO_RESET   = "HEALTH_ECHO_RESET";

// Thunks (async action creators) — דורש redux-thunk
export const pingAction = () => async (dispatch) => {
  try {
    dispatch({ type: HEALTH_PING_REQUEST });
    const data = await healthService.ping();
    dispatch({ type: HEALTH_PING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: HEALTH_PING_FAIL,
      payload: err?.message || "Ping failed",
    });
  }
};

export const echoAction = (message) => async (dispatch) => {
  try {
    dispatch({ type: HEALTH_ECHO_REQUEST });
    const data = await healthService.echo(message);
    dispatch({ type: HEALTH_ECHO_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: HEALTH_ECHO_FAIL,
      payload: err?.message || "Echo failed",
    });
  }
};

// Action creators לסינכרוני (איפוס)
export const resetPing = () => ({ type: HEALTH_PING_RESET });
export const resetEcho = () => ({ type: HEALTH_ECHO_RESET });

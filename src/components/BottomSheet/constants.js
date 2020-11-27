// import errorImage from './images/error_image.png';
// import heavyTrafficImage from './images/traffic.svg';
// import noNetworkImage from '../../assets/ill-no-internet.png';
// import { COMMON_CONSTANT } from '../../constants/Translation/CommonTextConstant';
let COMMON_CONSTANT = {}
// import { CUSTOM_OVERLAY_STATES } from '../../constants/AppConstant';
const CUSTOM_OVERLAY_STATES = {
    unset: 'unset',
    trafficError: 'trafficError',
    networkError: 'networkError',
    noResponse: 'noResponse',
    scoreLoading: 'scoreLoading',
    statusScreen: 'statusScreen',
    pauseOnboarding: 'pauseOnboarding',
    retry: 'retry',
    errorScreen: 'errorScreen',
    otpOverlay: 'otpOverlay',
    alert: 'alert',
  };


export const SET_OVERLAY = 'SET_OVERLAY';
export const SHOW_LOADER = 'SHOW_LOADER';
export const SET_APP_RESUME_STATE = 'SET_APP_RESUME_STATE';
export const SET_CUSTOM_OVERLAY_STATE = 'SET_CUSTOM_OVERLAY_STATE';
export const SET_STATUS_BAR_HEIGHT = 'SET_STATUS_BAR_HEIGHT';
export const SET_HEADER_PROPS = 'SET_HEADER_PROPS';

export const ERROR_MARKUPS = {
  [CUSTOM_OVERLAY_STATES.networkError]: {
    // image: noNetworkImage,
    title: COMMON_CONSTANT.DATA_CONNECTIVITY_LOST,
    subtitle: COMMON_CONSTANT.CHECK_CONNECTION_TRY_AGAIN,
    buttonText: COMMON_CONSTANT.OK_GOT_IT_LOWER,
    exit: true,
  },
  [CUSTOM_OVERLAY_STATES.noDebitCard]: {
    // image: errorImage,
    title: COMMON_CONSTANT.NO_DC,
    subtitle: COMMON_CONSTANT.YOU_DONT_HAVE_DC_RETRY_AFTER_SOMETIME,
    buttonText: COMMON_CONSTANT.OK_GOT_IT_LOWER,
    exit: true,
  },
  [CUSTOM_OVERLAY_STATES.trafficError]: {
    // image: heavyTrafficImage,
    title: COMMON_CONSTANT.EXPERIENCING_HEAVY_TRAFFIC_AT_MOMENT,
    subtitle: COMMON_CONSTANT.PLEASE_RETRY_AFTER_SOMETIME,
    buttonText: COMMON_CONSTANT.OK_GOT_IT_LOWER,
  },
  [CUSTOM_OVERLAY_STATES.noResponse]: {
    // image: errorImage,
    title: COMMON_CONSTANT.COULDNT_GET_RESPONSE_FROM_SERVER,
    subtitle: COMMON_CONSTANT.CHECK_CONNECTION_TRY_AGAIN,
    buttonText: COMMON_CONSTANT.OK_GOT_IT_LOWER,
  },
  [CUSTOM_OVERLAY_STATES.otpOverlay]: {
    title: COMMON_CONSTANT.ENTER_PASSCODE,
    buttonText: COMMON_CONSTANT.SUBMIT,
  },
  [CUSTOM_OVERLAY_STATES.alert]: {
    buttonText: COMMON_CONSTANT.OK_GOT_IT_LOWER,
    unset: true
  },
  [CUSTOM_OVERLAY_STATES.serviceUnavailable]: {
    fullScreen: true,
    title: COMMON_CONSTANT.SERVICE_UNAVAILABLE,
  },
  [CUSTOM_OVERLAY_STATES.errorScreen]: {
    title: COMMON_CONSTANT.SOMETHING_WENT_WRONG_EXCLAMATION,
    subtitle: COMMON_CONSTANT.PLEASE_TRY_AGAIN_LATER,
    buttonText: COMMON_CONSTANT.BACK_TO_HOME_PAGE,
    exit: true,
    // fullScreen: true
  },
};

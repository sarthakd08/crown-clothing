import {
    SET_OVERLAY,
    SHOW_LOADER,
    SET_CUSTOM_OVERLAY_STATE,
    SET_STATUS_BAR_HEIGHT,
    SET_HEADER_PROPS,
    SET_APP_RESUME_STATE,
  } from './constants';


  const setOverlaySuccess = ({ showOverlay, overlayConfig }) => ({
    type: SET_OVERLAY,
    showOverlay,
    overlayConfig,
  });
  
  const setOverlay = ({
    showOverlay,
    overlayConfig = { children: null },
  }) => dispatch =>
      new Promise(resolve => {
        dispatch(setOverlaySuccess({ showOverlay, overlayConfig }));
        resolve(true);
      });



      export {
        setOverlay,
        // showLoader,
        // setCustomOverlayState,
        // setStatusBarHeight,
        // updateHeaderProps,
        // setAppResumeState
      };



const INITIAL_STATE = {
    showOverlay: false,
    statusBarHeight: 0,
    overlayConfig: {
      children: null,
      fullScreen: false,
      showClose: false,
      headerText: '',
      backHandler: () => { },
    },
    loaderVisible: false,
    
}

const BottomsheetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default BottomsheetReducer;
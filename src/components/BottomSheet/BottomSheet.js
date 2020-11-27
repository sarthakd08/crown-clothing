import React from 'react';
import s from './Bottomsheet.scss'
import {cx} from '../../utils/utils';
import { useDispatch, useSelector, shallowEqual, connect } from 'react-redux';


const BottomSheet = () => {

    const { showOverlay, overlayConfig } = useSelector(state => state?.BottomSheet, shallowEqual);
    const {children} = overlayConfig;

    if (!showOverlay) return;
    else {
        const footer = true;
        return (
            <React.Fragment>
                <h3>BottomSheet</h3>
              <div
                className={cx(s, {
                  sheetWrapper: true,
                //   sheetWrapper__show: showSheet,
                //   sheetWrapper__hide: !showSheet,
                //   sheetWrapper__transparentBg: transparentBg
                })}
                onClick={this.onSheetClose}
              />
              <div
                className={`${cx(s, {
                  sheet: true,
                  sheet__show: true,
                //   sheet__hide: !showSheet,
                //   sheet__full: fullScreen,
                //   sheet__noPadding: noPadding,
                //   sheet_bottomLine: showBottomLines,
                //   sheet__noBottomPadding: removeBottomPadding,
                //   sheet__transparentBg: transparentBg,
                //   sheet__noRightPadding: removeRightPadding,
                //   sheet__noLeftPadding: removeLeftPadding,
                //   sheet_extraRoundCorners: extraRoundCorners,
                })}`}
                // style={customStyle}
              >
                {this.defaultHeaderTemplate()}
                <div className={footer ? s.children_mb : ''}>{children}</div>
                {this.defaultFooterTemplate()}
              </div>
            </React.Fragment>
          );
    }
}

export default BottomSheet;
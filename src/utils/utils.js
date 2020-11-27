export const objectCompare = function (obj1, obj2) {
    //Loop through properties in object 1
    for (var p in obj1) {
      //Check property exists on both objects
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
  
      switch (typeof obj1[p]) {
        //Deep compare objects
        case 'object':
          if (!objectCompare(obj1[p], obj2[p])) return false;
          break;
        //Compare function code
        case 'function':
          if (
            typeof obj2[p] === 'undefined' ||
            (p !== 'compare' && obj1[p].toString() !== obj2[p].toString())
          )
            return false;
          break;
        //Compare values
        default:
          if (obj1[p] !== obj2[p]) return false;
      }
    }
  
    //Check object 2 for any extra properties
    for (var q in obj2) {
      if (typeof obj1[q] === 'undefined') return false;
    }
    return true;
  };

 export function cx(from, style = {}) {
    return Object.keys(style).reduce((pv, cv) => {
      if (style[cv]) return `${pv}${from[cv]} `;
      return pv;
    }, '');
  }

  // import { INPUT_TYPES, REGEX, DEVICE_TYPE } from '../constants/CommonConstant';
  // import { login } from '../../bridgeUtils';
  // import DeviceInfoProvider from './Providers/DeviceInfoProvider';
  // import { ANDROID_BASE_VERSIONS, IOS_BASE_VERSIONS, GTM_KEYS, GTM_KEYS_IOS } from '../../../constants/AppConstant';
  // import { getGtmValues } from './BridgeToHost/BridgeToHost';
  
  // const month = [
  //   'Jan',
  //   'Feb',
  //   'Mar',
  //   'Apr',
  //   'May',
  //   'Jun',
  //   'Jul',
  //   'Aug',
  //   'Sep',
  //   'Oct',
  //   'Nov',
  //   'Dec',
  // ];
  
  // function cLog(data) {
  //   const { title, value } = data;
  //   let loggingEnabled = true;
  //   if (process.env.PROD) {
  //     loggingEnabled = false;
  //   }
  //   if (loggingEnabled || localStorage.getItem('isDebugOn')) {
  //     // eslint-disable-next-line no-console
  //     console.log(
  //       '%c Called from cLog -> ',
  //       'font-weight:bold;color:red',
  //       title,
  //       value,
  //       '',
  //     );
  //     console.trace();
  //   }
  // }
  
  // const removePrecedingZeros = value => value.toString().replace(/,/g, '');
  
  // const errorLogFunction = (title, error) => {
  //   cLog(title, error);
  //   // throw errorObjectTemplate(error)
  //   // eslint-disable-next-line no-throw-literal
  //   throw 'Something went wrong';
  // };
  
  // const scrollToTop = () => window.scroll(0, 0);
  
  // function cx(from, style = {}) {
  //   return Object.keys(style).reduce((pv, cv) => {
  //     if (style[cv]) return `${pv}${from[cv]} `;
  //     return pv;
  //   }, '');
  // }
  
  // function debouncer(fn, wait) {
  //   let timeout;
  //   return function () {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       fn(...arguments);
  //     }, wait);
  //   };
  // }
  
  // function disableBodyScroll() {
  //   // const body = document.getElementsByTagName('body');
  //   // const html = document.getElementsByTagName('html');
  //   // body[0].style.overflow = 'hidden';
  //   // html[0].style.overflow = 'hidden';
  
  //   // if (DeviceInfoProvider.getDeviceType() === DEVICE_TYPE.IOS) {
  //   try {
  
  //     const rootDiv = document.getElementById('root');
  //     if (rootDiv) {
  //       rootDiv.style.overflow = 'hidden';
  //       if (DeviceInfoProvider.getDeviceType() == DEVICE_TYPE.IOS) {
  //         rootDiv.style.height = '100vh';
  //       }
  //     }
  //   }
  //   catch (e) {
  //     //Handle Error
  //   }
  //   // }
  // }
  
  // function enableBodyScroll() {
  //   // const body = document.getElementsByTagName('body');
  //   // const html = document.getElementsByTagName('html');
  //   // body[0].style.overflow = 'auto';
  //   // html[0].style.overflow = 'auto';
  //   // html[0].style.scrollbarWidth = 'none';
  
  //   // if (DeviceInfoProvider.getDeviceType() === DEVICE_TYPE.IOS) {
  //   try {
  //     const rootDiv = document.getElementById('root');
  //     if (rootDiv) {
  //       rootDiv.style.overflow = 'auto';
  //       if (DeviceInfoProvider.getDeviceType() == DEVICE_TYPE.IOS) {
  //         rootDiv.style.overflow = 'revert';
  //         rootDiv.style.height = '100%';
  //       }
  //     }
  //   }
  //   catch (e) {
  //     //handle error
  //   }
  //   // }
  // }
  
  // function getInputType(title) {
  //   switch (true) {
  //     case title.includes('mobile'):
  //     case title.includes('price'):
  //     case title.includes('amount'):
  //       return INPUT_TYPES.NATIVE.tel;
  //     default:
  //       return INPUT_TYPES.NATIVE.text;
  //   }
  // }
  
  // // eslint-disable-next-line camelcase
  // function parse_query_string(query) {
  //   const vars = query.split('&');
  //   const queryString = {};
  //   for (let i = 0; i < vars.length; i += 1) {
  //     const pair = vars[i].split('=');
  //     const key = decodeURIComponent(pair[0]);
  //     const value = decodeURIComponent(pair[1]);
  //     if (!queryString[key]) {
  //       queryString[key] = decodeURIComponent(value);
  //     }
  //   }
  //   return queryString;
  // }
  
  // const _ = {
  //   map(collection, callback) {
  //     if (collection && collection.map) {
  //       return collection.map((...args) => callback(...args));
  //     }
  //     if (typeof collection === 'object') {
  //       Object.keys(collection).map(value => callback(collection[value], value));
  //     }
  //   },
  //   first(array) {
  //     if (array && array.length && array.length > 0) {
  //       return array[0];
  //     }
  //   },
  //   size(collection) {
  //     if (typeof collection === 'object') {
  //       return Object.keys(collection).length;
  //     }
  //     return 0;
  //   },
  //   get(object, pathString, defaultValue) {
  //     // Coerce pathString to a string (even it turns into "[object Object]").
  //     const parts = `${pathString}`.split('.');
  //     const { length } = parts;
  //     let i = 0;
  //     // In case object isn't a real object, set it to undefined.
  //     let value = object === Object(object) ? object : undefined;
  //     while (value != null && i < length) {
  //       value = value[parts[i++]];
  //     }
  //     /**
  //      * lodash.get() returns the resolved value if
  //      * 1. iteration happened (i > 0)
  //      * 2. iteration completed (i === length)
  //      * 3. the value at the path is found in the data structure (not undefined). Note that if the path is found but the
  //      * value is null, then null is returned.
  //      * If any of those checks fails, return the defaultValue param, if provided.
  //      */
  //     return i && i === length && value !== undefined ? value : defaultValue;
  //   },
  //   isEmpty(value) {
  //     return (
  //       value === undefined ||
  //       value === null ||
  //       (typeof value === 'object' && Object.keys(value).length === 0) ||
  //       (typeof value === 'string' && value.trim().length === 0)
  //     );
  //   },
  //   throttle(func, wait, options) {
  //     let context;
  //     let args;
  //     let result;
  //     let timeout = null;
  //     let previous = 0;
  //     if (!options) options = {};
  //     const later = function () {
  //       previous = options.leading === false ? 0 : Date.now();
  //       timeout = null;
  //       result = func.apply(context, args);
  //       if (!timeout) context = args = null;
  //     };
  //     return function () {
  //       const now = Date.now();
  //       if (!previous && options.leading === false) previous = now;
  //       const remaining = wait - (now - previous);
  //       context = this;
  //       args = arguments;
  //       if (remaining <= 0 || remaining > wait) {
  //         if (timeout) {
  //           clearTimeout(timeout);
  //           timeout = null;
  //         }
  //         previous = now;
  //         result = func.apply(context, args);
  //         if (!timeout) context = args = null;
  //       } else if (!timeout && options.trailing !== false) {
  //         timeout = setTimeout(later, remaining);
  //       }
  //       return result;
  //     };
  //   },
  //   renameObjectKey(obj, oldKey, newKey) {
  //     if (oldKey !== newKey) {
  //       const descriptor = Object.getOwnPropertyDescriptor(obj, oldKey);
  //       if (!descriptor) return -1;
  //       Object.defineProperty(obj, newKey, descriptor);
  //       obj[oldKey] = undefined;
  //       return 1;
  //     }
  //     return 0;
  //   },
  //   chunk(array, size = 1) {
  //     const chunked_arr = [];
  //     let index = 0;
  //     var length = array == null ? 0 : array.length;
  //     if (!length || size < 1) {
  //       return [];
  //     }
  //     while (index < array.length) {
  //       chunked_arr.push(array.slice(index, size + index));
  //       index += size;
  //     }
  //     return chunked_arr;
  //   }
  // };
  
  // function parseJson(jsonText) {
  //   let parsedJson = {};
  //   try {
  //     parsedJson = JSON.parse(jsonText);
  //   } catch (e) {
  //     cLog({ title: 'ERROR WHILE PARSING JSON', value: e });
  //   }
  //   return parsedJson;
  // }
  
  // function validateDate(inputText) {
  //   // Match the date format through regular expression
  //   if (inputText.match(REGEX.DATE)) {
  //     // Test which seperator is used '/' or '-'
  //     const opera1 = inputText.split('/');
  //     const opera2 = inputText.split('-');
  //     const lopera1 = opera1.length;
  //     const lopera2 = opera2.length;
  //     let pdate;
  //     // Extract the string into month, date and year
  //     if (lopera1 > 1) pdate = inputText.split('/');
  //     else if (lopera2 > 1) pdate = inputText.split('-');
  //     const dd = parseInt(pdate[0]);
  //     const mm = parseInt(pdate[1]);
  //     const yy = parseInt(pdate[2]);
  //     // Create list of days of a month [assume there is no leap year by default]
  //     const ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //     if (mm === 1 || mm > 2) if (dd > ListofDays[mm - 1]) return false;
  //     if (mm === 2) {
  //       let lyear = false;
  //       if ((!(yy % 4) && yy % 100) || !(yy % 400)) lyear = true;
  //       if (lyear === false && dd >= 29) return false;
  //       if (lyear === true && dd > 29) return false;
  //     }
  //   } else return false;
  //   return true;
  // }
  // const getDate = timeStamp => {
  //   const dateObj = new Date(timeStamp);
  //   return `${dateObj.getDate()}-${
  //     month[dateObj.getMonth()]
  //     }-${dateObj.getFullYear()}`;
  // };
  
  // const updateCookies = cookies => {
  //   cookies.forEach(cookie => (document.cookie = cookie));
  // };
  
  // const cookieParser = () => {
  //   const cookiesArray = document.cookie.split('; ');
  //   const cookieObject = {};
  //   cookiesArray.forEach(
  //     cookie => (cookieObject[cookie.split('=')[0]] = cookie.split('=')[1]),
  //   );
  //   return cookieObject;
  // };
  
  // const isAmountValid = (value, min, max) =>
  //   (value <= max && value >= min) || value > 0;
  
  // function placeholderReplacer(template, valueObject) {
  //   let finalTemplate = template;
  //   let re = '';
  //   Object.keys(valueObject).forEach(key => {
  //     // eslint-disable-next-line no-useless-concat
  //     re = new RegExp('\\${' + `${key}` + '}');
  //     finalTemplate = finalTemplate.replace(re, valueObject[`${key}`]);
  //   });
  //   return finalTemplate;
  // }
  
  // function formatNumber(rawAmt, uptoDecimalPlaces) {
  //   let amt = uptoDecimalPlaces ? Math.abs(rawAmt).toFixed(uptoDecimalPlaces) : Math.abs(rawAmt);
  //   if (amt !== 0) {
  //     amt = amt.toString();
  //     let afterPoint = '';
  //     if (amt.indexOf('.') > 0) {
  //       afterPoint = amt.substring(amt.indexOf('.'), amt.length);
  //     }
  //     amt = Math.floor(amt);
  //     amt = amt.toString();
  //     let lastThree = amt.substring(amt.length - 3);
  //     const otherNumbers = amt.substring(0, amt.length - 3);
  //     if (otherNumbers !== '') {
  //       lastThree = `,${lastThree}`;
  //     }
  //     let formattedAmount =
  //       otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
  //       lastThree +
  //       afterPoint;
  //     if (rawAmt < 0) {
  //       formattedAmount = `- + ${formattedAmount}`;
  //     }
  //     return formattedAmount;
  //   }
  //   return 0;
  // }
  
  // function formatWidth(total, used) {
  //   const totalWidth = 602;
  //   let calcWidth = 0;
  //   const total1 = Number(total);
  //   const used1 = Number(used);
  //   if (total1 < used1) {
  //     calcWidth = totalWidth;
  //   } else if (total1 !== 0 && total1 >= used1) {
  //     calcWidth = (used1 / total1) * totalWidth;
  //   }
  //   return calcWidth;
  // }
  
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  // }
  
  // function trimSentence(string, charLimit) {
  //   if (string.length < charLimit) {
  //     return string.substring(0, charLimit);
  //   }
  //   return `${string.substring(0, charLimit)}...`;
  // }
  
  // function evaluateCreditScoreCategory(score) {
  //   if (score >= 800 && score <= 900) {
  //     return 'Excellent';
  //   }
  //   if (score >= 700 && score <= 799) {
  //     return 'Good';
  //   }
  //   if (score >= 500 && score <= 699) {
  //     return 'Average';
  //   }
  //   if (score >= 300 && score <= 499) {
  //     return 'Poor';
  //   }
  //   return 'Poor';
  // }
  // // Sort the Report/Accounts/Bureau-info List by bureau order defined in '../constants/index.js'.
  // function getBureauTabOrder(orderList, bureauData) {
  //   let bureauFound = [];
  //   const bureauNotFound = [];
  //   let bureauName = '';
  //   for (let i = 0; i < bureauData.length; i++) {
  //     bureauName = bureauData[i].name || bureauData[i].bureau;
  //     if (orderList.indexOf(bureauName) != -1) {
  //       bureauFound[orderList.indexOf(bureauName)] = bureauData[i];
  //     } else {
  //       bureauNotFound.push(bureauData[i]);
  //     }
  //   }
  //   bureauFound = bureauFound.filter(n => n);
  //   return [...bureauFound, ...bureauNotFound];
  // }
  
  // function yyyy_mm_ddTodd_mmm_yyyy(d) {
  //   const date = new Date(d);
  
  //   if (isNaN(date.getTime())) {
  //     return d;
  //   }
  //   let day = date.getDate();
  
  //   if (day < 10) {
  //     day = `0${day}`;
  //   }
  //   console.log(
  //     'in date converter check yyyy_mm_ddTodd_mmm_yyyy for both h5 and androif and iphone',
  //     d,
  //     { converted: `${day}-${month[date.getMonth()]}-${date.getFullYear()}` },
  //   );
  
  //   return `${day}-${month[date.getMonth()]}-${date.getFullYear()}`;
  // }
  
  // function isMweb() {
  //   let check = true;
  //   (function (a) {
  //     if (
  //       /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
  //         a,
  //       ) ||
  //       /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
  //         a.substr(0, 4),
  //       )
  //     )
  //       check = true;
  //   })(navigator.userAgent || navigator.vendor || window.opera);
  //   return check;
  // }
  // function getMobileOperatingSystem() {
  //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  //   // Windows Phone must come first because its UA also contains "Android"
  
  //   if (/android/i.test(userAgent)) {
  //     return DEVICE_TYPE.ANDROID;
  //   }
  
  //   // iOS detection from: http://stackoverflow.com/a/9039885/177710
  //   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  //     return DEVICE_TYPE.IOS;
  //   }
  
  //   return DEVICE_TYPE.UNKNOWN;
  // }
  
  // function getMaxDate(difYear, date = Date.now()) {
  //   const localDate = new Date(date);
  //   let localMonth = `${localDate.getMonth() + 1}`;
  //   let localDay = `${localDate.getDate()}`;
  //   const localYear = localDate.getFullYear();
  
  //   if (localMonth.length < 2) localMonth = `0${localMonth}`;
  //   if (localDay.length < 2) localDay = `0${localDay}`;
  
  //   return [parseInt(localYear) - parseInt(difYear), localMonth, localDay].join(
  //     '-',
  //   );
  // }
  
  // function makeId(length = 6) {
  //   var result = '';
  //   var characters =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   var charactersLength = characters.length;
  //   for (var i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }
  
  // function cText(key, defText) {
  //   key = false; //testing
  //   return key || defText;
  // }
  
  // function validateEmail(str) {
  //   if (str) {
  //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
  //   }
  //   return false;
  // }
  
  // export const processQueryParams = (searchString) => {
  //   const data = searchString.substring(1);
  //   const array = data.split('&');
  //   return array.reduce((oldData, currentData) => {
  //     const split = currentData.split('=');
  //     oldData[split[0]] = split[1];
  //     return oldData;
  //   }, {})
  // }
  
  // function amountToWords(num) {
  //   var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
  //   var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  //   if ((num = num.toString()).length > 9) return 'overflow';
  //   let decimal = (num - Math.floor(num)).toFixed(2);
  //   num = Math.floor(num);
  //   let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  //   if (!n) return; var str = '';
  //   str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
  //   str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
  //   str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
  //   str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
  //   str += (n[5] != 0) ? ((str != '') ? (decimal != 0.00 ? '' : 'and ') : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
  
  //   if (decimal != 0.00) {
  //     str += 'and ' + amountToWords((decimal * 100).toFixed(2)) + 'paise ';
  //   }
  //   return str;
  // }
  
  // const loginUser = () => {
  //   if (window.isLoginRunning) return;
  //   const currentWorkingUrl = window.location.href;
  //   login(flag => {
  //     if (flag) window.location.href = currentWorkingUrl;
  //   });
  // };
  
  // function isCurrentVersionGtOrEqToBase(current, base) {
  //   const baseArray = base.split('.').map((ele) => parseInt(ele, 10));
  //   const currentArray = current.split('.').map((ele) => parseInt(ele, 10));
  
  //   for (let i = 0; i < Math.min(baseArray.length, currentArray.length); i += 1) {
  //     if (currentArray[i] > baseArray[i]) {
  //       return true;
  //     }
  //     if (currentArray[i] < baseArray[i]) {
  //       return false;
  //     }
  //   }
  //   if (currentArray.length > baseArray.length) {
  //     return true;
  //   }
  //   if (currentArray.length < baseArray.length) {
  //     const x = baseArray.slice(currentArray.length).find((n) => n > 0);
  //     if (x) {
  //       return false;
  //     }
  //     return true;
  //   }
  //   return true;
  // }
  
  // async function checkBaseVerions(baseVersionKey, skipGtmCheck) {
  //   let isBaseVersion = false;
  //   if (DeviceInfoProvider.getDeviceType() === DEVICE_TYPE.ANDROID)
  //     isBaseVersion = isCurrentVersionGtOrEqToBase(DeviceInfoProvider.getAppVersionName(), ANDROID_BASE_VERSIONS[baseVersionKey]); // current, base
  //   if (DeviceInfoProvider.getDeviceType() === DEVICE_TYPE.IOS)
  //     isBaseVersion = isCurrentVersionGtOrEqToBase(DeviceInfoProvider.getAppVersionName(), IOS_BASE_VERSIONS[baseVersionKey]);
  
  //   if (skipGtmCheck) return isBaseVersion;
  //   if (!isBaseVersion) return false;
  //   let gtmResponse = await getGtmValues();
  //   let isGtmEnabled = false;
  //   if (DeviceInfoProvider.getDeviceType() === DEVICE_TYPE.IOS)
  //     isGtmEnabled = gtmResponse?.data?.[GTM_KEYS_IOS[baseVersionKey]];
  //   else
  //     isGtmEnabled = gtmResponse?.data?.[GTM_KEYS[baseVersionKey]];
  
  //   return isBaseVersion && (isGtmEnabled === 'true' || isGtmEnabled === true);
  // }
  
  // export {
  //   month,
  //   getMaxDate,
  //   getMobileOperatingSystem,
  //   isMweb,
  //   _,
  //   cText,
  //   cLog,
  //   errorLogFunction,
  //   scrollToTop,
  //   cx,
  //   debouncer,
  //   enableBodyScroll,
  //   disableBodyScroll,
  //   getInputType,
  //   isAmountValid,
  //   cookieParser,
  //   updateCookies,
  //   validateDate,
  //   parseJson,
  //   getDate,
  //   parse_query_string,
  //   removePrecedingZeros,
  //   yyyy_mm_ddTodd_mmm_yyyy,
  //   placeholderReplacer,
  //   formatWidth,
  //   capitalizeFirstLetter,
  //   trimSentence,
  //   evaluateCreditScoreCategory,
  //   getBureauTabOrder,
  //   formatNumber,
  //   makeId,
  //   validateEmail,
  //   amountToWords,
  //   loginUser,
  //   isCurrentVersionGtOrEqToBase,
  //   checkBaseVerions
  // };
  

//   export function getThrottledFunction(
//     callback: (...args: any) => void,
//     timeLimit: number
//   ): (...args: any) => void {
//     let isThrottle = false;
//     return function (...args: any) {
//       if (!isThrottle) {
//         callback(...args);
//         isThrottle = true;
//         setTimeout(() => {
//           isThrottle = false;
//         }, timeLimit);
//       }
//     };
//   }
  
//   export function getDebouncedFunction(
//     callback: (...args: any) => void,
//     timeDelay: number
//   ): (...args: any) => void {
//     let timerId: ReturnType<typeof setTimeout>;
//     return function (...args: any) {
//       if (timerId) {
//         clearTimeout(timerId);
//       }
//       timerId = setTimeout(() => {
//         callback(...args);
//       }, timeDelay);
//     };
//   }

// export function formatAmount(
//     amount: string | number,
//     isShowZeroDecimal = false
//   ) {
//     // Create our number formatter.
//     const formatter = new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//     });
  
//     const formattedAmount = formatter.format(Number(amount));
//     const [formattedWithoutDecimal, decimalAmount] = formattedAmount.split('.');
  
//     let decimalPostFix = '';
//     if (isShowZeroDecimal) {
//       decimalPostFix = `.${decimalAmount}`;
//     } else if (decimalAmount === '0' || decimalAmount === '00') {
//       decimalPostFix = '';
//     } else {
//       decimalPostFix = `.${decimalAmount}`;
//     }
//     return formattedWithoutDecimal + decimalPostFix;
//   }
  
//   export const camelToNormalCase = (text: string): string => {
//     let mText = '';
//     for (let i = 0; i < text.length; i += 1) {
//       if (i === 0) {
//         mText = `${mText}${text[i].toUpperCase()}`;
//       } else if (text[i] === text[i].toUpperCase()) {
//         mText = `${mText} ${text[i].toUpperCase()}`;
//       } else {
//         mText = `${mText}${text[i]}`;
//       }
//     }
//     return mText;
//   };
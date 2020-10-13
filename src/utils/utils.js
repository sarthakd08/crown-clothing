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
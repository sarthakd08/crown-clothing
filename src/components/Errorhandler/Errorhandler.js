import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

const ErrorStatusContext = React.createContext();

const ErrorHandler = ({children}) => {

    const history = useHistory();
    const [errorStatusCode, setErrorStatusCode ] = useState();

    // Make sure to "remove" this status code whenever the user 
    // navigates to a new URL. If we didn't do that, then the user
    // would be "trapped" into error pages forever
    React.useEffect(() => {
        // Listen for changes to the current location.
        const unlisten = history.listen(() => setErrorStatusCode(undefined));
        // cleanup the listener on unmount
        return unlisten;
    }, [])


    const renderContent = () => {
        if (errorStatusCode === 404) {
            return <PageNotFound />
          }
      
          // ... more HTTP codes handled here
      
        return children;
    }

    const contextPayload = React.useMemo(
        () => ({ setErrorStatusCode }), 
        [setErrorStatusCode]
      );

    return (
        <ErrorStatusContext.Provider value={contextPayload}>
            {renderContent()}
        </ErrorStatusContext.Provider>
    )

}

export default ErrorHandler;

export  const useErrorStatus = () => React.useContext(ErrorStatusContext);
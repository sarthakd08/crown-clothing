import React, { useState } from 'react';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

const ErrorStatusContext = React.createContext();

const ErrorHandler = ({children}) => {

    const [errorStatusCode, setErrorStatusCode ] = useState();


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
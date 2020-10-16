import React, { useEffect, useState } from 'react';
import {useErrorStatus} from '../components/Errorhandler/Errorhandler'

const useGetQuery = ({url}) => {

    const [apiData, setApiData] = useState();
    const { setErrorStatusCode } = useErrorStatus();

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(({code, status, ...apiData}) => {
                if(code == 404) {
                    console.log('400 error')
                    // Call function of ErrorHandler Context
                    setErrorStatusCode(404);
                } else {
                    setApiData(apiData); 
                }
            } )
    }, [url])

    return { data: apiData}
}

export default useGetQuery;
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useMakeMultipleApiRequests = (requests = []) => {
    const [countOfRequests, setCountOfRequests] = useState(requests.length);
    const [callbackFns, setCallbackFns] = useState([]);
    const [errorFns, setErrorFns] = useState([]);
    
    useEffect(() => {
        if(!requests.length) return;

        requests.map((req) => {
            const {url, cb} = req;
          axios.get(url).then((res) => {
            console.log('Res', res);
            setCallbackFns((prevState) => ([...prevState, res.data.message]))
          }).catch((e) => {
              console.log('ERROR in', url, e)
              setErrorFns((prevState) => ([...prevState, url]))
          })
        })
    }, [])

    return {'SuccessFns': callbackFns, 'FailedFns': errorFns};
}

export default useMakeMultipleApiRequests;

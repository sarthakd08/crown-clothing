import {useReducer, useEffect} from 'react';
import axios from 'axios';

const INITIAL_STATE = {
    jobs: [],
    loading: false,
    error: false,
}

//https://cors-anywhere.herokuapp.com/
const BASE_URL = 'https://jobs.github.com/positions.json'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, jobs: []};
        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs};
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs: []};
        default:
            return state;
    }
}

const useFetchJobs = (params, page) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        dispatch({type: ACTIONS.MAKE_REQUEST});
        axios.get(BASE_URL, {params: {mardown: true, page: page, ...params}})
        .then((res) => {
            console.log(res.data);
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}});
        }).catch((e) => {
            if(axios.isCancel(e)) {
                return;
            }
            dispatch({type: ACTIONS.ERROR, payload: {error: e}});
        })

        return () => {
            cancelToken.cancel() // If params or typed text changes then we clear out and cancel the previos axios call and new useEffect code is run.
        }
    }, [params, page])

    return state;
}

export default useFetchJobs;
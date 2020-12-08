import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const API_URL = `https://jobs.github.com/positions.json?`;
  
const initialValue = {
    loading: true,
    jobs: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_JOBS': {
            return {
                ...state,
                loading: false,
                jobs: action.allJobs
            }
        }
        case 'SEARCH_BY_TITLE': {
            return {
                ...state,
                jobs: action.newJob 
            }
        }

        case 'SEARCH_BY_TYPE': {
            return {
                ...state,
                jobs: action.newJobWithType 
            }
        }

        case 'SEARCH_BY_LOCATION': {
            return {
                ...state,
                jobs: action.newJobByLocation 
            }
        }

        case 'SEARCH_BY_CITIES': {
            return {
                ...state,
                jobs: action.newJobByCities 
            }
        }
        
        default: {
            return state
        }
    }
}

function useAppReducer() {
    const [ state, dispatch ] = useReducer(reducer, initialValue)

    useEffect(async() => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/${API_URL}`)
        const data = response.data
        dispatch({type: 'FETCH_JOBS', allJobs: data})
    }, [])

    return [state, dispatch]
}

export default useAppReducer

import React, { useEffect, useReducer } from 'react'

const CORS_API = 'https://cors-anywhere.herokuapp.com/'
const description= ''
const location= ''
const fulltime=''
const API_URL = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fulltime}`;
  
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

        case 'SEARCH_BY_COMPANY': {
            return {
                ...state,
                jobs: action.newJob 
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
        const response = await fetch(`${CORS_API}${API_URL}`)
        const data = await response.json()
        dispatch({type: 'FETCH_JOBS', allJobs: data})
    }, [])

    return [state, dispatch]
}

export default useAppReducer

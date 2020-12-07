import React, { useEffect, useReducer } from 'react'

const description= ''
const location= ''
const fulltime=''
const API_URL = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fulltime}`;
  
const CORS_API = 'https://cors-anywhere.herokuapp.com/'

const initialValue = {
    jobs: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_JOBS': {
            return {
                ...state,
                jobs: [...state.jobs, action.allJobs]
            }
        }
        default: {
            return state
        }
    }
}

function useAppReducer() {
    const [ state, dispatch ] = useReducer(reducer, initialValue)
    const { jobs } = state

    useEffect(async () => {
        const response = await fetch(`${CORS_API}${API_URL}`)
        console.log(response);
        const data = await response.json()
        console.log(data);
        dispatch({type: 'FETCH_JOBS', allJobs: data})
    }, [])

    return [jobs, dispatch]
}

export default useAppReducer

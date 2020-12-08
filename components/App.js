import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Import files
import Jobs from './Jobs';
import Header from './Header'
import MainSearch from './search/MainSearch';
import Details from './Details';
import FilterByType from './search/FilterByType';
import FilterByLocation from './search/FilterByLocation';

// Imort style
import { ArticleStyle } from './styles/style'

function App() {
    
    return (
        <ArticleStyle>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <MainSearch/>
                    <FilterByType/>
                    <FilterByLocation/>
                    <Jobs/>
                </Route>
                <Route path='/:id'>
                    <span>Description</span>
                    <Details/>
                </Route>
            </Switch>
        </ArticleStyle>
    )
}

export default App

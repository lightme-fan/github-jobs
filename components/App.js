import React, { useContext } from 'react'
import Jobs from './Jobs';
import Header from './Header'
import MainSearch from './search/MainSearch';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Details from './Details';

const ArticleStyle = styled.article`
    max-width: 1000px;
    margin: auto;
`
function App() {
    
    return (
        <ArticleStyle>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <MainSearch/>
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

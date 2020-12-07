import React, { useContext } from 'react'
import Jobs from './Jobs';
import Header from './Header'
import MainSearch from './search/MainSearch';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const ArticleStyle = styled.article`
    max-width: 1000px;
    margin: auto;
`
function App() {
    
    return (
        <ArticleStyle>
            <Header/>
            <MainSearch/>
            <Jobs/>
            {/* <Switch>
                <Route exact path='/'>
                </Route>
                <Route path='/description'>
                    Description
                </Route>
            </Switch> */}
        </ArticleStyle>
    )
}

export default App

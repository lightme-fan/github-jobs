import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom';

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
            <div className='container details'>
            <Switch>
                <Route exact path='/'>
                    <MainSearch/>
                    <div>
                        <div>                        
                            <FilterByType/>
                            <FilterByLocation/>
                        </div>    
                        <Jobs/>
                    </div>
                </Route>
                <Route path='/:id'>
                    <Details/>
                </Route>
            </Switch>
            </div>
        </ArticleStyle>
    )
}

export default App

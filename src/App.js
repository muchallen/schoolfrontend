import React ,{Fragment} from 'react'
import {Provider} from 'react-redux'
import myStore from './components/store'
import Users from './components/layouts/Users'
import Header from './components/layouts/Header'
import Home from './components/layouts/content/Home'
import Dashboard from './components/layouts/Dashboard'


export default function App() {
    return (
        <Provider store={myStore}>
        <Fragment>
         <Dashboard/>
        </Fragment>

        </Provider>
        
    )
}

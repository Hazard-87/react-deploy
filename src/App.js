import React from 'react';
import {withRouter, Route, HashRouter} from "react-router-dom";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavContainer from "./components/Nav/NavContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const MessagesContainer = React.lazy(()=> import('./components/Messages/MessagesContainer'))
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(()=> import('./components/Users/UsersContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
           return <Preloader />
        }
        return (
            <HashRouter>
                <div className='appWrapper'>
                    <HeaderContainer/>
                    <NavContainer/>
                    <div className='.content'>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/messages' render={withSuspense(MessagesContainer)}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

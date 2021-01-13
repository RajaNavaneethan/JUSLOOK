import React from 'react';
import logo from './logo.svg';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import './Main.css';
// import SingleLineGridList from './SingleLineGridList';

export default class Header extends React.Component{
    constructor(props: {} | Readonly<{}>)
    {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="mainSelector">
                <div className="header">
                    <div className="title">JUSLOOK</div>
                    <div className="avatar">Raja Navaneethan{'\u00A0'}{'\u00A0'}
                    <HomeIcon fontSize='large'></HomeIcon>{'\u00A0'}
                    <AccountBoxIcon fontSize='large'/></div>
                </div>
            </div>
        )
    }
}



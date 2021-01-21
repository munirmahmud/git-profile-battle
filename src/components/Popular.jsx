import PropTypes from 'prop-types';
import React, { Component } from 'react';

function LanguagesNav({ selected, onUpdateLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        
    return (
        <div className="row nav-menu justify-center">
            <ul className="nav-menus flex-center">
                {languages.map((language) => (
                    <li key={language}>
                        <button 
                            className="btn-clear nav-link"
                            style={(language === selected) ? {color: 'rgb(187, 46, 31)'} : null}
                            onClick={() => onUpdateLanguage(language)}>{language}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }

    render() {
        const { selectedLanguage } = this.state;

        return (
            <LanguagesNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
        )
    }
}

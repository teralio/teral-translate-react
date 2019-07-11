import React, { Component } from 'react'
import PropTypes from 'prop-types';

require('../lib/main.min.js')

export default class Teral extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        if (typeof window.Teral !== 'undefined' && this.props.apiKey.length > 0 && this.props.sourceLanguage.length > 0) {
            window.Teral.init({
                'apiKey': this.props.apiKey,
                'sourceLanguage' : this.props.sourceLanguage,
                'spa' : true })
        }
    }

    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

Teral.propTypes = {
    apiKey: PropTypes.string,
    sourceLanguage: PropTypes.string,
};

Teral.defaultProps = {
    apiKey: "",
    sourceLanguage: "en",
};

import React, { Component } from 'react'
import Box from './Boxapunte';
import PropTypes from 'prop-types'

export default class Article extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    }
    render() {
        return (
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.author}</em></p>
                <Box>{this.props.date}</Box>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}
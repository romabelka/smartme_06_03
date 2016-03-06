import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import {articles} from '../fixtures'

class Container extends Component {
    render() {
        return (
            <div>
                <ArticleList articles = {articles} />
            </div>
        )
    }
}

export default Container
import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import { articleStore } from '../stores'

class Container extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.__onChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.__onChange)
    }

    render() {
        const { articles } = this.state
        return (
            <div>
                <ArticleList articles = {articles} />
            </div>
        )
    }

    __onChange = () => {
        this.setState({
            articles: articleStore.getAll()
        })
    }
}

export default Container
import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import { articleStore } from '../stores'
import { loadAllArticles } from '../actions/articles'

class Container extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            articles: articleStore.getAll(),
            loading: articleStore.loading
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.__onChange)
        loadAllArticles()
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.__onChange)
    }

    render() {
        const { articles, loading } = this.state
        const loader = loading ? <h3>Loading...</h3> : null
        return (
            <div>
                <h1>News App!</h1>
                <ArticleList articles = {articles} />
                {loader}
            </div>
        )
    }

    __onChange = () => {
        this.setState({
            articles: articleStore.getAll(),
            loading: articleStore.loading
        })
    }
}

export default Container
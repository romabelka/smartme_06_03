import React, { Component, PropTypes } from 'react'
import Article from './Article'
import CommentList from './CommentList'

class ArticleList extends Component {
    render() {
        const articles = this.props.articles.map((article) =>
            <li key={article.id}>
                <Article
                    article={article}
                />
            </li>
        )
        return (
            <div>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }
}

export default ArticleList
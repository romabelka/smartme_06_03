import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../HOC/toggleOpen'
import { deleteArticle } from '../actions/articles'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object,

        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        return (
            <div>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    getTitle() {
        const {toggleOpen, article: { title }} = this.props
        return  (
            <h3 onClick={toggleOpen} >
                {title}
                <a href = "#" onClick = {this.handleDelete}>delete this article</a>
            </h3>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <div key="article">
                <p>{article.text}</p>
                <CommentList article = {article}/>
            </div>
        )
    }
}

export default toggleOpen(Article)
import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import SimpleStore from './SimpleStore'

let stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores)
})

export const articleStore = stores.articles
export const commentStore = stores.comments

window.stores = stores

export default stores
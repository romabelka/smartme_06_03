import ArticleStore from './ArticleStore'
import SimpleStore from './SimpleStore'
import { articles, comments } from '../fixtures'

let stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores, articles),
    comments: new SimpleStore(stores, comments)
})

export const articleStore = stores.articles
export const commentStore = stores.comments

window.stores = stores

export default stores
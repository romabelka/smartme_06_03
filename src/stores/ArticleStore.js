import Dispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT } from '../actions/constants'
import  SimpleStore from './SimpleStore'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = Dispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__remove(data.id)
                    this.emitChange()
                    break;

                case ADD_COMMENT:
                    Dispatcher.waitFor([this.__stores.comments.dispatchToken])
                    const article = this.getById(data.articleId)
                    article.comments.push(data.id)
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore
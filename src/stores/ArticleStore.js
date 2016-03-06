import Dispatcher from '../dispatcher'
import { DELETE_ARTICLE } from '../actions/constants'
import  SimpleStore from './SimpleStore'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        Dispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__remove(data.id)
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore
import Dispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT,
    LOAD_ALL_ARTICLES_FAIL, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS
} from '../actions/constants'
import  SimpleStore from './SimpleStore'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = Dispatcher.register((action) => {
            const { type, data, response, error } = action

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

                case LOAD_ALL_ARTICLES_START:
                    this.loading = true
                    this.emitChange()
                    break;

                case LOAD_ALL_ARTICLES_SUCCESS:
                    this.loading = false
                    response.forEach(this.__add)
                    this.emitChange()
                    break;

                case LOAD_ALL_ARTICLES_FAIL:
                    //todo fail
                    break;
            }
        })
    }
}

export default ArticleStore
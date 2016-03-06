import Dispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_ALL_ARTICLES_SUCCESS } from '../actions/constants'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = Dispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add(data)
                    break;

                case LOAD_ALL_ARTICLES_SUCCESS:
                    response.forEach((article) => {
                        (article.comments || []).forEach((id) => this.__add({ id }))
                    })
                    break;
            }
        })
    }
}

export default CommentStore
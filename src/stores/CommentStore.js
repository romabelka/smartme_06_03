import Dispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT } from '../actions/constants'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = Dispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add(data)
                    break;
            }
        })
    }
}

export default CommentStore
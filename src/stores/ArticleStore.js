import { EventEmitter} from 'events'
const STORE_CHANGE_EVENT = 'STORE_CHANGE_EVENT'
import Dispatcher from '../dispatcher'

class ArticleStore extends EventEmitter {
    constructor(initialState) {
        super()
        this.__items = initialState

        Dispatcher.register((action) => {

        })
    }

    getAll() {
        return this.__items.slice()
    }



    emitChange() {
        this.emit(STORE_CHANGE_EVENT)
    }

    addChangeListener(callback) {
        this.on(STORE_CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(STORE_CHANGE_EVENT, callback)
    }
}

export default ArticleStore
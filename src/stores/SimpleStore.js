import { EventEmitter} from 'events'
const STORE_CHANGE_EVENT = 'STORE_CHANGE_EVENT'
import Model from './Model'

class SimpleStore extends EventEmitter {
    constructor(stores, initialState) {
        super()
        this.__items = []
        this.__stores = stores
        if (initialState) initialState.forEach(this.__add)
    }

    getAll() {
        return this.__items.slice()
    }

    getById = (id) => {
        return this.__items.filter(item => item.id == id)[0]
    }


    __remove(id) {
        this.__items = this.__items.filter(item => item.id != id)
    }

    __add = (data) => {
        this.__items.push(new Model(data, this))
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

export default SimpleStore
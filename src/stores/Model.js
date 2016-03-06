class Model {
    constructor(data, store) {
        Object.assign(this, data)
        this.__store = store
    }

    getRelation(relation) {
        const store = this.__store.__stores[relation]
        if (!store || !this[relation]) return []

        return this[relation].map(store.getById)
    }
}

export default Model
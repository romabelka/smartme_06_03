import Dispatcher from '../dispatcher'

export function deleteArticle(id) {
    Dispatcher.dispatch({
        type: 'DELETE_ARTICLE',
        data: { id }
    })
}
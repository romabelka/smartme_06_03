import Dispatcher from '../dispatcher'
import { DELETE_ARTICLE } from './constants'

export function deleteArticle(id) {
    Dispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}
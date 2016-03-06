import { ADD_COMMENT } from './constants'
import Dispatcher from '../dispatcher'

export function addComment(text, articleId) {
    Dispatcher.dispatch({
        data: {
            text, articleId,
            id: Date.now()
        },
        type: ADD_COMMENT
    })
}
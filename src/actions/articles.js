import Dispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES_FAIL, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS } from './constants'
import { loadAll } from './api/articles'

export function deleteArticle(id) {
    Dispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export function loadAllArticles() {
    Dispatcher.dispatch({
        type: LOAD_ALL_ARTICLES_START
    })

    //емітація затримки мережевого запиту
    setTimeout(() => {
        loadAll()
            .done(response => Dispatcher.dispatch({
                type: LOAD_ALL_ARTICLES_SUCCESS,
                response
            }))
            .fail(error => Dispatcher.dispatch({
                type: LOAD_ALL_ARTICLES_FAIL,
                error
            }))
    }, 1000)
}
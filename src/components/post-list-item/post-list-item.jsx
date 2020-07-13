import React from 'react'

import './post-list-item.css'

export default class PostListItem extends React.Component {


    render() {
        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;               // получаем из неизменяемой части
        let classNames = 'app-list-item d-flex justify-content-between';    // динамически изменяется

        if(important) {
            classNames +=' important';  
        }
        if(like) {
            classNames +=' like';   
        }

        return (
            <div className={classNames} >   
                <span className="app-list-item-label" onClick={onToggleLike} >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={onToggleImportant} >
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

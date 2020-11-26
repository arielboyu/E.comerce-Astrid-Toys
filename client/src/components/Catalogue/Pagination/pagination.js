import React from 'react';
import style from '../catalogue.module.css'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={`${style.pagination}`}>
                {pageNumbers.map(number => (
                <a onClick={ () => paginate(number) } className={`${style.pageLink}`}>
                    <button className={`${style.pageItem}`} style={{outline: "none"}}>
                        {number}
                    </button>
                </a>  
                ) ) }
            </ul>
        </nav>
    )
}

export default Pagination;
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
                    <li className={`${style.pageItem}`}>
                        <a onClick={ () => paginate(number) } href='#' className={`${style.pageLink}`}>
                            {number}
                        </a>
                    </li>
                ) ) }
            </ul>
        </nav>
    )
}

export default Pagination;
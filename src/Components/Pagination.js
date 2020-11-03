import React from 'react'

const Pagination = ({postsPerpage, totalPost, Paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postsPerpage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="mb-5 pagination">
                {pageNumbers.map(number => (
                    <li key = {number} className ="page-item">
                        <a onClick = {() => Paginate(number)} href ="#" className="page-link">
                            {number}
                        </a>
                    </li>
                )
            
                )}
            </ul>
        </nav>
    )
}

export default Pagination
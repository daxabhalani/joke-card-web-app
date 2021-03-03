
import React from 'react'
import Card from '../../modules/common/Card';
import downArrow from '../../assets/image/downArrow.png'
import CategoryLabel from '../../modules/common/CategoryLabel';

function JokeList({ jokes = [], selectedCategoryName, selectedCategoryColor, visibleJokesCount, handleViewMoreJokes }) {
    const visibleJokes = jokes.slice(0, visibleJokesCount);
    return (
        <>
            <CategoryLabel
                category={selectedCategoryName}
                color={selectedCategoryColor}
            />
            <div className="all-jokes-box">
                <div className="jokes-box">
                    {
                        visibleJokes.map((item, index) =>
                            <Card
                                category={selectedCategoryName}
                                key={index}
                                joke={item.value}
                            />
                        )
                    }
                </div>
                {
                    jokes.length > visibleJokesCount
                    &&
                    <div
                        className="view-more-btn"
                        align="center">
                        <button
                            className="buttons view-all-btn"
                            color="#f9f9f9"
                            onClick={handleViewMoreJokes}>
                            VIEW MORE
                            <span className="downArrow">
                                <img src={downArrow} alt="downArrow" />
                            </span>
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

export default React.memo(JokeList);

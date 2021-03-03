
import React from 'react'
import Button from '../../modules/common/Button';
import downArrow from '../../assets/image/downArrow.png'

function CategoryList({ categories = [], viewAll, jokesByCategories, handleCategorySelect, handleViewAllCategories }) {
    const visibleCategories = !viewAll ? categories.slice(0, 6) : categories.slice();
    return (
        <>
            <div className="joke-categories">
                <div className="btn-group">
                    {
                        visibleCategories.map((category) =>
                            <Button
                                key={category}
                                color={jokesByCategories[category].color}
                                onChange={handleCategorySelect.bind(this, jokesByCategories[category].label)}>
                                {jokesByCategories[category].label}
                            </Button>
                        )
                    }
                    {
                        !viewAll
                        && <button
                            className="buttons view-all-btn"
                            onClick={handleViewAllCategories}>
                            VIEW ALL
                                            <span>
                                <img src={downArrow} alt="downArrow" />
                            </span>
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default React.memo(CategoryList);

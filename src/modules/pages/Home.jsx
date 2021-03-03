import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryList from '../../components/Home/CategoryList'
import JokeList from '../../components/Home/JokeList'
import HomeCover from '../../components/Home/HomeCover'
import '../../assets/css/home.css'
import Loader from '../../components/Home/Loader'

// Get random color in category button
function getRandomColor() {
    const color = [
        {
            color: '#ff5b5b'
        },
        {
            color: '#ff915b'
        },
        {
            color: '#ffbe5b'
        },
        {
            color: '#ffdf5b'
        },
        {
            color: '#8fe360'
        },
        {
            color: '#57e690'
        },
        {
            color: '#57dbe6'
        },
    ];
    const index = Math.floor((Math.random() * color.length - 1) + 1);
    return color[index].color;
}

// Initial category 
function initJokeByCategoryObj(label) {
    return {
        jokes: [],
        label,
        color: getRandomColor()
    }
}

export default function Home() {
    const [jokesByCategories, setJokesByCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('unCategorized');
    const [viewAllCategories, setViewAllCategories] = useState(false);
    const [visibleJokeCount, setVisibleJokeCount] = useState(6);

    useEffect(() => {
        getAllJokes()
    }, []);

    // Get all jokes
    const getAllJokes = async () => {
        try {
            const allJokesResponse = await axios.get('https://api.chucknorris.io/jokes/search?query=all');
            const initialObj = {
                unCategorized: initJokeByCategoryObj('unCategorized')
            };
            const jokesGroupedByCategories = allJokesResponse.data.result.reduce((obj, joke) => {
                if (!joke.categories.length) {
                    initialObj.unCategorized.jokes.push(joke);
                } else {
                    joke.categories.forEach(jokeCategory => {
                        if (!obj[jokeCategory]) {
                            obj[jokeCategory] = initJokeByCategoryObj(jokeCategory);
                        }
                        obj[jokeCategory].jokes.push(joke);
                    });
                }
                return obj;
            }, initialObj);
            setJokesByCategories(jokesGroupedByCategories);
        } catch (error) {
            console.log('Error', error);
        }
    }

    // Handle category selection
    const handleCategorySelection = (categoryName) => {
        setSelectedCategory(categoryName)
        setVisibleJokeCount(6)
    }

    // Handle View More Jokes
    const handleViewMoreJokes = () => {
        setVisibleJokeCount(currentCount => currentCount + 6);
    }

    // Handle View All Categories
    const handleViewAllCategories = () => setViewAllCategories(true);

    return (
        <>
            <HomeCover />
            <div className="container">
                {
                    !jokesByCategories ? <Loader /> :
                        <>
                            <CategoryList
                                categories={Object.keys(jokesByCategories)}
                                viewAll={viewAllCategories}
                                jokesByCategories={jokesByCategories}
                                handleCategorySelect={handleCategorySelection}
                                handleViewAllCategories={handleViewAllCategories}
                            />
                            <JokeList
                                jokes={jokesByCategories[selectedCategory].jokes}
                                selectedCategoryName={selectedCategory}
                                selectedCategoryColor={jokesByCategories[selectedCategory].color}
                                visibleJokesCount={visibleJokeCount}
                                handleViewMoreJokes={handleViewMoreJokes}
                            />
                        </>
                }

            </div>
        </>
    )
}

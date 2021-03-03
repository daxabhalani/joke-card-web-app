import React from 'react'

function HomeCover() {
    console.log('rendered');
    return (
        <div className="banner-bg">
            <div className="banner-content">
                <h1>The Joke Bible</h1>
                <h4>Daily Laughs for you and yours</h4>
                <div className="search_wrap">
                    <input type="text" id="search" className="search" placeholder="How can we make you laugh today?" />
                    <button type="submit" value="submit" id="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fillRule="nonzero" d="M23.718 22.263l-6.674-6.736a9.54 9.54 0 0 0 2.093-5.967c0-5.28-4.28-9.56-9.568-9.56C4.28 0 0 4.286 0 9.566c0 5.28 4.281 9.56 9.569 9.56 2.287 0 4.38-.8 6.03-2.137l6.632 6.692c.2.213.475.319.744.319.256 0 .512-.094.706-.281a1.034 1.034 0 0 0 .037-1.456zm-14.15-5.192a7.466 7.466 0 0 1-5.312-2.2 7.458 7.458 0 0 1-2.2-5.305c0-2.005.781-3.892 2.2-5.305A7.466 7.466 0 0 1 9.57 2.062c2.006 0 3.893.781 5.312 2.2a7.458 7.458 0 0 1 2.2 5.304 7.437 7.437 0 0 1-2.2 5.305 7.466 7.466 0 0 1-5.312 2.2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(HomeCover)

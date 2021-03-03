import React, { memo } from 'react'
import '../../assets/css/button.css'
import green from '../../assets/image/green-light-copy.png'
import path from '../../assets/image/path.png'

function Card({ category, joke }) {
    return (
        <div className="jokes-card">
            <div className="jokes-card-inner">
                <h2 className="text-uppercase"><span className="green"><img src={green} alt="green" /></span>{category} Joke</h2>
                <p className="joke-content">{joke}</p>
                <span className="see-stats">see stats<img src={path} alt="path"></img></span>
            </div>
        </div>
    )
}
export default memo(Card);

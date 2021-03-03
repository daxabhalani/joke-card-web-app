import React from 'react'
import '../../assets/css/footer.css';
import path from '../../assets/image/path.png';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-text">
                    <h1>Got jokes? Get paid <br /> for submitting!</h1>
                    <span className="submit-joke">Submit Joke</span><img src={path} alt="path" />
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer);

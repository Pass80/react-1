import React from 'react';
import './Head.css';

const Head = () => {
    return (
        <header>
            <h3>Hello There</h3>
            <h1>We are Glint</h1>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                magni et ea officiis reiciendis laboriosam possimus fugiat,
                voluptatem atque natus impedit unde, fuga quam omnis inventore
                aut. Provident, recusandae excepturi!
            </p>
            <div className="statistics">
                <div>
                    <p>127</p>
                    <p>Awards received</p>
                </div>
                <div>
                    <p>1505</p>
                    <p>Cups of Coffee</p>
                </div>
                <div>
                    <p>109</p>
                    <p>Projects completed</p>
                </div>
                <div>
                    <p>102</p>
                    <p>Happy Clients</p>
                </div>
            </div>
        </header>
    );
};

export default Head;

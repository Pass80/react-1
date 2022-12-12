import React from 'react';
import './FirstSection.css';

const FirstSection = () => {
    return (
        <div>
            <div className="about">
                <h3>What We Do</h3>
                <h2>
                    We've got everything you need to launch and grow your
                    business
                </h2>
            </div>
            <div className="services">
                <div>
                    <img src={require('../../images/brand.png')} alt="" />
                    <div>
                        <h4>Brand Identity</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Doloribus quod quidem fugiat distinctio cum,
                            repudiandae obcaecati ipsam itaque quibusdam error.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={require('../../images/paint.png')} alt="" />
                    <div>
                        <h4>Illustration</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Doloribus quod quidem fugiat distinctio cum,
                            repudiandae obcaecati ipsam itaque quibusdam error.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={require('../../images/profit.png')} alt="" />
                    <div>
                        <h4>Marketing</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Doloribus quod quidem fugiat distinctio cum,
                            repudiandae obcaecati ipsam itaque quibusdam error.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={require('../../images/computer.png')} alt="" />
                    <div>
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Doloribus quod quidem fugiat distinctio cum,
                            repudiandae obcaecati ipsam itaque quibusdam error.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;

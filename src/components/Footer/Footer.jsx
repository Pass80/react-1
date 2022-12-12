import React from 'react';
import './Footer.css';

const data = [
    {
        id: 1,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '12 €',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 2,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '22 €',
        image: 'https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 3,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '18 €',
        image: 'https://images.unsplash.com/photo-1628840045720-3a800b89d353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 4,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '16 €',
        image: 'https://images.unsplash.com/photo-1527133256227-fc3549f55332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 5,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '13 €',
        image: 'https://images.unsplash.com/photo-1670148815909-e79a18e16ddd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 6,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '10 €',
        image: 'https://images.unsplash.com/photo-1655741138085-e5bd28f5b7f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 7,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '14 €',
        image: 'https://images.unsplash.com/photo-1654722906311-19970c50bed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 8,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '12 €',
        image: 'https://images.unsplash.com/photo-1625215740221-1800b95852f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 9,
        name: 'Lorem ipsum.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquidagni.',
        price: '8 €',
        image: 'https://images.unsplash.com/photo-1644398324665-57647e829ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
];

const Footer = () => {
    return (
        <div className="product-container">
            {data.map((object) => {
                return (
                    <div className="product" key={object.id}>
                        <img src={object.image} alt="pizza" />
                        <p>{object.price}</p>
                        <p>{object.name}</p>
                        <p>{object.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Footer;

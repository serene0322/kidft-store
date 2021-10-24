import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

//use class component because we need to store the state value of those
//menu items that we want to pass and create our menu items with

class Directory extends React.Component {
    constructor() {
        super(); //pull in all the things we need from REACT component into our class

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/s5fcKF7/1.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'bags',
                  imageUrl: 'https://i.ibb.co/L1HqfNT/3.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'shoes',
                  imageUrl: 'https://i.ibb.co/R47RTqQ/2.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'girls',
                  imageUrl: 'https://i.ibb.co/LPjRy85/girl.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'boys',
                  imageUrl: 'https://i.ibb.co/7NXn5MJ/2.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;
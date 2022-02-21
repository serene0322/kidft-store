const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/s5fcKF7/1.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'bags',
            imageUrl: 'https://i.ibb.co/L1HqfNT/3.png',
            id: 2,
            linkUrl: 'shop/bags'
        },
        {
            title: 'shoes',
            imageUrl: 'https://i.ibb.co/R47RTqQ/2.png',
            id: 3,
            linkUrl: 'shop/shoes'
        },
        {
            title: 'girls',
            imageUrl: 'https://i.ibb.co/LPjRy85/girl.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/girls'
        },
        {
            title: 'boys',
            imageUrl: 'https://i.ibb.co/7NXn5MJ/2.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/boys'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;

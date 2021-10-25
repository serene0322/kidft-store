import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.styles.scss'

//functional component
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4) //to filter only 4 items
                    .map(({ id, ...otheritemProps }) => (
                        <CollectionItem key={id} { ...otheritemProps }/>
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;
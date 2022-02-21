//decide on how it should render the list of items

import React from "react";
import { withRouter } from "react-router";

import CollectionItemCantclick from "../collection-item/collection-item-cantclick";

import './collection-preview.styles.scss'

//functional component
const CollectionPreview = ({ title, items, history, match }) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4) //to filter only 4 items
                    .map(item => (
                        <CollectionItemCantclick key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);
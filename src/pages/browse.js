import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.development';
import { BrowseContainer } from '../containers/browse';
import useContent from '../hooks/use-content'
import selectionMap from '../utils/selection-map'

export default function Browse() {

    const  {films}= useContent('films')
    const {series} = useContent('series')
    const slides = selectionMap({films,series})

    

    return <BrowseContainer slides={slides}/>;
}
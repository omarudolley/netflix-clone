

import React from 'react';
import { Container,Item, Inner, Title, SubTitle,Image,Pane } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Title = function JumbotContainer({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}


Jumbotron.SubTitle = function JumbotContainer({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}
Jumbotron.Pane = function JumboPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Image = function JumbotContainer({ children,source, ...restProps }) {
    return <Image {...restProps}></Image>;
}



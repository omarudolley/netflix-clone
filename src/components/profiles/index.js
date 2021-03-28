import React from 'react'
import { Container,Title,List,Item,Picture,Name } from './styles.js/profiles'







export default function Profiles({children, ...rest}){
    return <Container {...rest} >{children}</Container>
}


Profiles.Title = function ProfileTitle({children,...rest}){
    return <Title {...rest}>{children}</Title>
}


Profiles.List = function ProfileList({children,...rest}){
    return <List {...rest}>{children}</List>
}


Profiles.User = function ProfileUser({children, ...rest}){
    return <Item {...rest}>{children}</Item>
}


Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` :
    '/images/misc/loading.gif'} />;
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}
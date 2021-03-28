

import React, { useContext, useState,createContext } from 'react'
import {
    Container,
    Section,
    Title,
    Text,
    SubTitle,
    Meta,
    Entity,
    Feature,
    Item,
    Inner,
    Picture,
    FeatureTitle,
    FeatureText,
    Maturity,
    SubInner,
    FeatureClose,
    Overlay,
    VideoInner,
    Close,

} from './styles/card'
import ReactDOM from 'react-dom';


const FeatureContext = createContext()

export default function Card({children, ...rest}){
    const [showFeature,setShowFeature] = useState(false)
    const [featureItem,setFeatureItem] = useState({})
    const [playVideo,setPlayVideo] = useState(false)


    
    return <FeatureContext.Provider value={{playVideo,setPlayVideo,showFeature,setShowFeature,featureItem,setFeatureItem}}>
        <Container>{children}</Container>
        </FeatureContext.Provider>
}


Card.Section = function CardSection({children,...rest}){
    return <Section>{children}</Section>
}

Card.Title = function CardTitle({children,...rest}){
    return <Title>{children}</Title>
}


Card.Text = function CardText({children,...rest}){
    return <Text>{children}</Text>
}


Card.SubTitle = function CardSubTitle({children,...rest}){
    return <SubTitle>{children}</SubTitle>
}

Card.Entity = function CardEntity({children,...rest}){
    return <Entity>{children}</Entity>
}


Card.Meta = function CardMeta({children,item,...rest}){
   const {showFeature,setShowFeature,setFeatureItem}= useContext(FeatureContext)
   const handleClick = () =>{
       setFeatureItem(item)
       setShowFeature(!showFeature)
      
   }
    return <Meta {...rest} onClick={handleClick}>{children}</Meta>
}



Card.Picture = function CardPicture({...rest}){
    const {setPlayVideo} = useContext(FeatureContext)
    return <Picture onClick={()=>setPlayVideo(true)} {...rest}/>
}


Card.Item = function CardItem({children,...rest}){
   
    return <Item >{children}</Item>
}


Card.Feature = function CardFeature({children,category,...rest}){

    const {showFeature,setShowFeature,featureItem,setFeatureItem}= useContext(FeatureContext)

    return showFeature
    ?ReactDOM.createPortal(
       
        <Feature onClick={() => setShowFeature(false)}>
       
        <Inner src={`/images/${category}/${featureItem.genre}/${featureItem.slug}/large.jpg`}>
            <FeatureTitle>{featureItem.title}</FeatureTitle>
            <FeatureText>{featureItem.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
                <img src="/images/icons/close.png" alt="Close" />
            </FeatureClose>
            <SubInner margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={featureItem.maturity}>{featureItem.maturity < 12 ? 'PG' : featureItem.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {featureItem.genre.charAt(0).toUpperCase() + featureItem.genre.slice(1)}
                    </FeatureText>
            </SubInner>
        </Inner>
       
    </Feature>,
    document.body
    ):null;
    
}

Card.Player = function CardPlayer({...rest}){
    const {playVideo,setPlayVideo}=useContext(FeatureContext)
    return playVideo
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setPlayVideo(false)}>
            <VideoInner>
                <video id="netflix-player" controls autoplay>
                    <source src="/videos/bunny.mp4" type="video/mp4" />
                </video>
                <FeatureClose onClick={()=>setPlayVideo(false)}/>
            </VideoInner>
        </Overlay>,
        document.body
    ) : null;
}


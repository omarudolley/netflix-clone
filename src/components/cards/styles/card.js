import styled from 'styled-components'


export const Title  = styled.h1`
    color:white;
    margin-left:40px;
    font-size:20px;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 50px;
margin-left:40px;
box-sizing: border-box;

> ${Title} {
    @media (max-width: 1000px) {
        margin-left: 30px;
    }
}

&:last-of-type {
    margin-bottom: 0;
}
 
   
`
export const Section = styled.div`
    display:flex;
    flex-direction:column;
    `

export const Text  = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: white;
    margin-bottom: 0;
    user-select: none;
    line-height: normal;
    border:1px solid white;
    margin-left: 5px;
`
export const SubTitle = styled.p`
    font-size: 14px;
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
`

export const Meta = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    padding:5px;
    
   
`

export const Entity = styled.div`
    display:flex;
    flex-direction: row;
`
export const Player = styled.div``
export const Video  = styled.video``


export const Item   = styled.div`
    display:flex;
    flex-direction:column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform 0.2;

    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }
    
    @media (min-width: 1000px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: flex;
            background-color:rgb(64,64,64);
            z-index: 100;
        }
    }
    
    &:first-of-type {
        margin-left: 56px;
        
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }
    
    &:last-of-type {
        margin-right: 56px;
        
        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
`


export const SubInner = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`


export const Picture = styled.img`
    border: 0;
    width: 100%;
    max-width: 305px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
   
`













export const Maturity = styled.div`
    background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`;

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    
    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;


export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;



export const FeatureText = styled.p`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) => fontWeight === 'bold' ? 'bold' : 'normal'}};
    margin: 0;
    
    @media (max-width: 800px) {
        line-height: 22px;
    }
`;

export const Feature = styled.div`

        display: flex; 
        @media (max-width: 1000px) {
        height: auto;
        background-size: auto;

        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;
        }
        }
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        margin: 0 20px;
   
`;


export const Inner = styled.div`

    position:relative;
    background: url(${({ src }) => src});
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
    max-width:800px;
    height:100%;
    padding: 50px;
    line-height: normal;
    background-color:black;
    opacity:0.5;
    margin-top:25px;
   

     
    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
        
        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;
        }
    }
   

    @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
}`


export const Overlay = styled.div`
    display: flex; 
    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
        
        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;
        }
    }
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`;


export const VideoInner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;
    
    video {
        height: 100%;
        width: 100%;
    }
`;
import React, { useContext,useState,useEffect } from 'react';
import {Header,Loading} from '../components'
import {FooterContainer} from './footer'
import FirebaseContext from '../context/firebase'
import {SelectProfileContainer} from './profiles'
import {Card} from '../components'
import Fuse from 'fuse.js'



export function BrowseContainer({slides}) {
    const [category, setCategory] = useState('series');
    const [loading, setLoading] = useState(true);
    const [searchTerm,setSearchTerm] =useState('')
    const [data,setData] = useState([]) 

   
    

    const [profile,setProfile] = useState({})

    const {firebase} = useContext(FirebaseContext)

    const user = [
        {
            displayName:"Solo",
            photoUrl:'1'
         },
         {
            displayName:"Bakary",
            photoUrl:'2'
        },
        {
            displayName:"Sidiki",
            photoUrl:'3'
        },
        {
            displayName:"Mohammed",
            photoUrl:'4'
         }
        ]


        useEffect(()=>{
            setData(slides[category])
            if(data){
                setLoading(false)
            }
            
        },[data,user])

        // useEffect(() => {
        //     setTimeout(() => {
        //         setLoading(false)
        //     }, 3000);
        // }, [user])

        useEffect(() => {
            const fuse = new Fuse(data, { keys: ['data.description', 'data.title', 'data.genre'] });
            const results = fuse.search(searchTerm).map(({ item }) => item);
            
            if (data.length > 0 && searchTerm.length > 3 && results.length > 0) {
                setData(results);
            } else {
                setData(slides[category]);
            }
          }, [searchTerm])

    return (
        profile.displayName ?(
            <>
               {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
                <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={'/'} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.Link 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>
                            Series
                        </Header.Link>
                        <Header.Link 
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>
                            Films
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Group>
                                <Header.Picture src={profile.photoURL} />
                                <Header.Arrow/>

                            </Header.Group>
                        
                            <Header.Dropdown>
                                {user.map(item =>(
                                    <Header.Group key={item.photoUrl} 
                                    onClick={() => setProfile({
                                        displayName: item.displayName,
                                        photoURL: item.photoUrl
                                    })}
                                    
                                    >
                                    <Header.Picture src={item.photoUrl} />
                                    <Header.Link>{item.displayName}</Header.Link>
                                </Header.Group>
                                ))}
                                
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign out</Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card>
                {data.map( section => (
                    <Card.Section>
                        <Card.Title>{section.title}</Card.Title>
                        <Card.Entity>
                        {section.data.map( item =>(
                            <Card.Item>
                                <Card.Picture src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                <Card.Meta item={item}>
                                    <Card.SubTitle>{item.title}</Card.SubTitle>
                                    <Card.Text>{item.maturity}</Card.Text>
                                </Card.Meta>
                              
                            </Card.Item>
                        ))}
                        </Card.Entity>
                        <Card.Feature category={category}>
                          
                        </Card.Feature>
                        <Card.Player/>
                    </Card.Section>
                ))}
            </Card>
            <FooterContainer />
            </>
        ):
        (<SelectProfileContainer user={user} setProfile={setProfile}/>)
    );
}
import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export function SelectProfileContainer({user,setProfile}) {

   
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo 
                        to={ROUTES.HOME} 
                        src="/images/misc/logo.svg"
                        alt="Netflix"
                    />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    {
                        user.map((profile,index) =>
                        (
                            <Profiles.User key={index}
                                onClick={() => setProfile({
                                    displayName: profile.displayName,
                                    photoURL: profile.photoUrl
                                })}
                            >
                                
                                <Profiles.Picture src={profile.photoUrl} />
                                <Profiles.Name>{profile.displayName}</Profiles.Name>
                            </Profiles.User>
                            ))
                    }
                   
                </Profiles.List>
            </Profiles>
        </>
    )
}
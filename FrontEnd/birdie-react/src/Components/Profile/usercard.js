
import { Card, Icon, Image } from 'semantic-ui-react'
import React, { Component } from 'react'


const Card1 = () => (
<Card>

<Image src='/user.jpg' />
<Card.Content>
<Card.Header>
User
</Card.Header>
<Card.Meta>
<span className='date'>
Joined in xxx
</span>
</Card.Meta>
<Card.Description>
Profile
</Card.Description>
</Card.Content>
<Card.Content extra>
<a>
<Icon name='user' />
Birdie User
</a>
</Card.Content>
</Card>
)
export default Card1;

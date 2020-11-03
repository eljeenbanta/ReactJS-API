import React from 'react'
import { Card } from 'react-bootstrap'


const Posts = ({items, query}) => {
  

    return (
        items.map((item) => 
            <div key = {item.data.id}>
                <Card>
                  <Card.Header> 
                      posted by: u/{item.data.author}
                  </Card.Header>
                  <Card.Body>
                        <Card.Title><a rel="noopener noreferrer" target = "_blank" href = {item.data.url}> {item.data.title} </a></Card.Title>
                        <Card.Text>
                        {item.data.num_comments} Comments     {item.data.ups} Votes
                        </Card.Text>
                        
                    </Card.Body>
                   
                    </Card><br />
            </div>
        )
    )
}
    export default Posts;
import React from 'react';

import GivenData from './GivenData';
import Card from 'react-bootstrap/Card'; 

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <>
                <div className='col-6 '>
                    <Card style={ { width: 'auto', height: 'auto' } } >
                        <Card.Body>
                            <Card.Title style = {{ textAlign: 'center' }} > <u> User Records </u> </Card.Title>
                            <Card.Text>
                                <GivenData userda = { this.props.userdata } />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    } 
}
 
export default UserCard;
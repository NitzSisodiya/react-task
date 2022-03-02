import React from "react";

import UserCard from "./UserCard.js";
import Photo from "./Photo.js";

class Body extends React.Component {
    state = {
        user: [
            { id: 1, name: "user1", email: "user1@gml.com", contact: 112233 },
            { id: 2, name: "user2", email: "user2@gml.com", contact: 445566 },
            { id: 3, name: "user3", email: "user3@gml.com", contact: 778899 },
            {id: 4, name: "user3", email: "user3@gml.com", contact: 778899 }
        ]
    };
 
    render() {
        return (  
            <>
                <div className="container row g-4" style={{ marginTop: '0', marginLeft: '0' }}>
                    {this.state.user.map((element, index) => (
                        <>
                            <UserCard userdata={element} />
                              <Photo />
                        </>
                    ))}
                </div>
            </>
        );
    }
}
export default Body; 
import list from "../../SampleData/UserDetails.json";
import React from "react";

class UserComponent extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {list['userList'].map((user) =>
                        <li key={user.id}>{user.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default UserComponent;
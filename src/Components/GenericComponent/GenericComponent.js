import React from "react";

class GenericComponent extends React.Component{
    render(){
        return(
            <div>Welocome to {this.props.pageName} page!</div>
        )
    }
}

export default GenericComponent;
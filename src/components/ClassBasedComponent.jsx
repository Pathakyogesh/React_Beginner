import React, { Component } from 'react';                                 // To use modules and components defined as or in others files we import them first

class ClassBasedComponent extends Component{
    render(){
        return(
            <div>Example of Class Based Component Rendering</div>
        )
    }
};

export default ClassBasedComponent;                      // exporting our components to be used at other places also
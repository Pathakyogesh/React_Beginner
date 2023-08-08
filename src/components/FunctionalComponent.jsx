import React from 'react';
import PropsExample from '../props/propsExample';

function ChildComponent(){
    return(
        <div>Rendering Child Component first</div>
    )
}

function FunctionalComponent(){
    const parentComponenetHandler = () => {
        console.log("This is the example of passing function as a prop from one component to other.")
    }
        return(

            <div>
                <ChildComponent/>
                Rendering functional component
                <PropsExample parentComponenetHandler = {parentComponenetHandler} data = "Here, data is passed as property. " flag = {false} />
            </div>
        )
};

export default FunctionalComponent;
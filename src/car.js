import React from 'react';

function Car(props) {
    return ( 
        <div class='card' key={props.id}>
            <h1>{props.name}</h1> 
        <img src={props.image} alt = {props.name}/>
        <div class="container">
            <h6>Description: </h6>
             <p>{props.des}</p> 
        </div>
</div>
     );
}

export default Car;
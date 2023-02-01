import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user){
    if (user) {
        return (
            <div>
                <Welcome name={formatName(user)} />
                <Welcome name="Eram Mansoor" />
            </div>
        );
    }
    return <h1>Hello, Stranger.</h1>
}

const user = {
    firstName: 'Nae',
    lastName: 'ImUam'
};
function tick(){
    
    const element = (
        <div>
            <h1>{getGreeting(user)}</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000);

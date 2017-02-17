import React from 'react';

class Hello extends React.Component {
    render() {
        const {fruit, onDeleteFruit} = this.props;
        return <div>
            <h1>Hello, I like:</h1>
            <ul>
                {
                    fruit.map((name, index) => <li>
                        <div key={index}>
                            {name}
                            <button title="delete" onClick={() => onDeleteFruit(name)}>x</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    }
}

export default Hello;
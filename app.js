'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppMap/>
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
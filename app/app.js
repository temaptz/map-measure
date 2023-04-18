'use strict';

function App() {

    const [zoom, setZoom] = React.useState(19);
    const [bounds, setBounds] = React.useState([[], []]);
    const [width, setWidth] = React.useState(1120);
    const [height, setHeight] = React.useState(710);
    const [rectBounds, setRectBounds] = React.useState();

    return (
        <div>
            <MapComponent
                zoom={zoom}
                width={width}
                height={height}
                onZoom={setZoom}
                onBounds={setBounds}
                onRectBounds={setRectBounds}
            />

            <Controls
                zoom={zoom}
                bounds={bounds}
                width={width}
                height={height}
                rectBounds={rectBounds}
                onZoom={setZoom}
                onBounds={setBounds}
                onWidth={setWidth}
                onHeight={setHeight}
            />
        </div>
    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
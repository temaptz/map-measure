'use strict';

const MapComponent = React.memo((props) => {

    const yandexMap = React.useRef();
    const [center] = React.useState([61.811419, 34.327891]);

    ymaps.ready(() => initMap());

    const initMap = () => {
        destroyMapIfAlreadyExists();

        const map = new ymaps.Map('map', {
            center: center,
            zoom: props.zoom, // от 0 (весь мир) до 19
            type: 'yandex#hybrid',
            controls: [],
        }, {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
            avoidFractionalZoom: false,
            minZoom: props.zoom,
            maxZoom: props.zoom,
        });

        yandexMap.current = map;
        initEventListeners(map);
        initMapRectangle(map);

        props.onBounds(map.getBounds());
    }

    const initEventListeners = (map) => {
        map.events.add('boundschange', (e) => {
            props.onBounds(e.get('newBounds'));
            props.onZoom(e.get('newZoom'));
        });
    }

    const initMapRectangle = (map) => {
        const rectangle = new ymaps.Rectangle(
            [[61.81119376689868,34.32713998147583],[61.811644231426506,34.328642018524164]],
            {},
            {
                draggable: true,
                fillColor: '#0000ff',
                fillOpacity: .3,
                strokeWidth: 5,
            });

        rectangle.geometry.events.add('change', (e) => {
            props.onRectBounds(e.get('newCoordinates'));
        });

        map.geoObjects.add(rectangle);

        props.onRectBounds(rectangle.geometry.getBounds());
    }

    const destroyMapIfAlreadyExists = () => {
        if (yandexMap && yandexMap.current && 'destroy' in yandexMap.current) {
            yandexMap.current.destroy();
        }
    }

    return (
        <div
            id="map"
            style={{
                width: props.width,
                height: props.height,
            }}
        ></div>
    );
});

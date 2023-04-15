export class Map {

    map;
    initCenter = [61.811419, 34.327891];
    initZoom = 19; // от 0 (весь мир) до 19

    constructor(ymaps) {
        ymaps.ready(() => this.initMap());
    }

    initMap() {
        this.map = new ymaps.Map('map', {
            center: this.initCenter,
            zoom: this.initZoom,
            type: 'yandex#hybrid',
        }, {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
        });
    }
}

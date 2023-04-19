'use strict';

const Controls = React.memo((props) => {

    const deltaBounds = React.useMemo(() => {
        let lon = 0;
        let lat = 0;

        try {
            lon = props.bounds[1][0] - props.bounds[0][0];
            lat = props.bounds[1][1] - props.bounds[0][1];
        } catch (e) {
            console.warn('No bounds');
        }

        return {lon, lat};
    }, [props.bounds]);

    const deltaBoundsRect = React.useMemo(() => {
        let lon = 0;
        let lat = 0;

        try {
            lon = props.rectBounds[1][0] - props.rectBounds[0][0];
            lat = props.rectBounds[1][1] - props.rectBounds[0][1];
        } catch (e) {
            console.warn('No rect bounds');
        }

        return {lon, lat};
    }, [props.rectBounds]);

    return (
        <table>
            <tbody>
                <tr>
                    <td>Width</td>
                    <td>{props.width}</td>
                    <td>
                        <input
                            type="number"
                            value={props.width}
                            onChange={(e) => props.onWidth(e.target.value)}
                        />
                    </td>
                </tr>

                <tr>
                    <td>Height</td>
                    <td>{props.height}</td>
                    <td>
                        <input
                            type="number"
                            value={props.height}
                            onChange={(e) => props.onHeight(e.target.value)}
                        />
                    </td>
                </tr>

                <tr>
                    <td>Bounds</td>
                    <td>{props.bounds && JSON.stringify(props.bounds)}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Bounds delta Lon</td>
                    <td>{deltaBounds.lon}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Bounds delta Lat</td>
                    <td>{deltaBounds.lat}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Zoom</td>
                    <td>{props.zoom}</td>
                    <td>
                        <input
                            type="number"
                            min={0}
                            max={19}
                            value={props.zoom}
                            onChange={(e) => props.onZoom(e.target.value)}
                        />
                    </td>
                </tr>

                <tr>
                    <td>Rectangle bounds</td>
                    <td>{props.rectBounds && JSON.stringify(props.rectBounds)}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Rectangle bounds delta Lon</td>
                    <td>{deltaBoundsRect.lon}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Rectangle bounds delta Lat</td>
                    <td>{deltaBoundsRect.lat}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
});

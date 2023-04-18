'use strict';

const Controls = React.memo((props) => {

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
                    <td>{JSON.stringify(props.bounds)}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Bounds delta Lon</td>
                    <td>{props.bounds && (props.bounds[1][0] - props.bounds[0][0])}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Bounds delta Lat</td>
                    <td>{props.bounds && (props.bounds[1][1] - props.bounds[0][1])}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Zoom</td>
                    <td>{props.zoom}</td>
                    <td>
                        <input
                            type="range"
                            min="0"
                            max="19"
                            value={props.zoom}
                            onChange={(e) => props.onZoom(e.target.value)}
                        />
                    </td>
                </tr>

                <tr>
                    <td>Rectangle bounds</td>
                    <td>{JSON.stringify(props.rectBounds)}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Rectangle bounds delta Lon</td>
                    <td>{props.rectBounds && (props.rectBounds[1][0] - props.rectBounds[0][0])}</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Rectangle bounds delta Lat</td>
                    <td>{props.rectBounds && (props.rectBounds[1][1] - props.rectBounds[0][1])}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
});

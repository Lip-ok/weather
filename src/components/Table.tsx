import React from "react";
import '../css/Table.css'
import {useSortableData} from "../helpers/useSortableData";

interface Items {
    products: [{
        humidity: number,
        id: number,
        temperature: number,
        time: string
    }];
}


export const TableWeather = (props:Items) => {

    const { items, requestSort, sortConfig } = useSortableData(props.products);

    const getClassNamesFor = (name:string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <caption className='tableTitle'>Weather</caption>
            <thead>
            <tr>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('time')}
                        className={getClassNamesFor('time')}
                    >
                            Time
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('temperature')}
                        className={getClassNamesFor('temperature')}
                    >
                            Temperature
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('humidity')}
                        className={getClassNamesFor('humidity')}
                    >
                            Humidity
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.time}</td>
                    <td>{item.temperature}℃</td>
                    <td>{item.humidity}%</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

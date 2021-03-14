import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../redux/weatherReducer";
import '../css/SearchCity.css';

export const  SearchCity = () =>  {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch();
    const onChange = (e:any) => setValue(e.currentTarget.value);
    const onClick = () => {
        dispatch(getWeather(value));
        setValue('');
    };
    return (
        <div className='searchWrapper'>
            <input value={value} type="text" onChange={onChange}/>
            <button onClick={onClick}>Find</button>
        </div>
    );
};

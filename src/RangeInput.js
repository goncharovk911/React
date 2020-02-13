import React from 'react'
import { RangeInput } from 'react-instantsearch-dom';

export default function RInput(){
    return  (
        <div>
            <input></input>
            <RangeInput
                
                min={0}
                max={10}
                step={1}
                onChange={event => this.setState({ value: event.target.value })}
            />
        </div>
    );
}
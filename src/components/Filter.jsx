import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
        return (
            <>
                <h3>Find contacts by name</h3>
                <input
                    type='text'
                    name='filter'
                    value={value}
                    onChange={(event) => onChangeFilter(event.target.value)}
                    placeholder='Enter Name'
                />
            </>
        )
    }

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}
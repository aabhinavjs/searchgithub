import React from 'react';
import PropTypes from 'prop-types';

import {InputMd,InputSubmit} from "./elements/input";

const Picker = props => {
    let input;
    const { onSubmit } = props;
    return (
        <div className="search-span-block">
            <h1 className="search-header">Search for a Github username</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (input.value !== '') {
                        onSubmit(input.value);
                    }
                }}
            >
                <InputMd 
                    className="search-input"
                    type="text"
                    ref={node => {
                        input = node;
                    }}
                />
                <InputSubmit customMargin="0px 14px" className="input-submit" type="submit" value="Search" />
            </form>
        </div>
    );
};

Picker.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Picker;

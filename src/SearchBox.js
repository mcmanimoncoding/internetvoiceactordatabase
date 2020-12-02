import React from 'react';

const SearchBox = (props) => {
    return (
        <input type="search"
        className="search"
        placeholder={props.placeholder}
        // onChange={props.handleChange}

        style={{
            fontSize: 24,
            display: 'block',
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
        }}
        />
    );
}

export default SearchBox;

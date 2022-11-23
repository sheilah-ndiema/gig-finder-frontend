import React from "react";

    function Filter({ category, onCategoryChange }) {
    return (
        <div className="Filter">
            <label id='label'>select categories</label>
            <select name="filter" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="all">All</option>
                <option value="tech">Tech</option>
                <option value="entertainment">Entertainment</option>
                <option value="freelance">Freelance</option>
            </select>
        </div>
    );
    }

export default Filter;
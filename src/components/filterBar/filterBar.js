import React from 'react';
import { applyFilter } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const FilterBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const listedCountries = ['us', 'gb', 'ca', 'fr', 'de'];

  const handleClick = e =>
    dispatch(applyFilter(e.target.getAttribute('label')));

  return (
    <ul className="newsDeck__filterBar">
      {listedCountries.map((country, idx, arr) => (
        <li
          className={`newsDeck__filterBar-item${
            country === filter ? '--selected' : ''
          }`}
          value={country}
          key={idx}
          onClick={handleClick}
        >
          <p
            label={country}
            className="newsDeck__filterBar-item--country"
            value
          >
            {country.toUpperCase()}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FilterBar;

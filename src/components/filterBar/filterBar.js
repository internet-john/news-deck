import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { applyFilter } from '../../actions';
import { COUNTRIES, CATEGORIES } from '../../constants';

const FilterBar = () => {
  const dispatch = useDispatch();
  const countryFilter = useSelector(state => state.countryFilter);
  const categoryFilter = useSelector(state => state.categoryFilter);

  const handleClick = e =>
    dispatch(applyFilter(e.target.getAttribute('label')));

  return (
    <nav>
      <ul className="newsDeck__filterBar countries">
        {COUNTRIES.map((country, idx, arr) => (
          <li
            className={`newsDeck__filterBar-item${
              country === countryFilter ? '--selected' : ''
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
      <ul className="newsDeck__filterBar categories">
        {CATEGORIES.map((category, idx, arr) => (
          <li
            className={`newsDeck__filterBar-item${
              category === categoryFilter ? '--selected' : ''
            }`}
            value={category}
            key={idx}
            onClick={handleClick}
          >
            <p
              label={category}
              className="newsDeck__filterBar-item--category"
              value
            >
              {category.toUpperCase()}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FilterBar;

import PropTypes from 'prop-types';
import React from 'react';

export default function IngredientListItem(props) {
  const { name, measure, testId, hasCheckbox, checked, onToggle } = props;
  return (
    <li
      key={ name }
      data-testid={ testId }
    >
      {hasCheckbox && (
        <label htmlFor="ingredients">
          <input
            className="checkbox"
            type="checkbox"
            checked={ checked }
            onChange={ onToggle }
          />
        </label>
      )}
      {
        measure
          ? <span id="ingredients">{`${name} - ${measure}`}</span>
          : <span id="ingredients">{name}</span>
      }
    </li>
  );
}
/* t */
IngredientListItem.propTypes = {
  name: PropTypes.string.isRequired,
  measure: PropTypes.string,
  testId: PropTypes.string.isRequired,
  hasCheckbox: PropTypes.bool,
  checked: PropTypes.bool,
  onToggle: PropTypes.func,
};

IngredientListItem.defaultProps = {
  measure: '',
  hasCheckbox: false,
  checked: false,
  onToggle: () => {},
};

import PropTypes from 'prop-types';

const outingShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
  ageId: PropTypes.string.isRequired,
  seasonId: PropTypes.string.isRequired,
  isIndoor: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { outingShape };

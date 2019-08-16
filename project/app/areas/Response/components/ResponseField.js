import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

const ResponseField = ({ label, value, children, tag: Tag, ...rest }) => (
  <Tag {...rest}>
    <h5 className="text-label">{label}</h5>
    <p>{children || value}</p>
  </Tag>
);

ResponseField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.symbol, PropTypes.func]),
  children: PropTypes.node,
};
ResponseField.defaultProps = {
  tag: Col,
};

export default ResponseField;

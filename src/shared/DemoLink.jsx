import React from 'react';
import { Link } from 'react-router-dom';

const DemoLink = ({ to, state, target, onClick, text, children }) => (
  <Link
    {...{
      to,
      state,
      target,
      onClick
    }}
  >
    {text}
    {children}
  </Link>
);
export default DemoLink;
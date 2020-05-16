import React, {FC} from 'react';
import {Dropdown} from 'react-bootstrap';
import {FaCog} from 'react-icons/fa';

const Settings: FC = ({children}) => (
  <Dropdown
    alignRight
    drop="down"
  >
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      <FaCog />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      {children}
    </Dropdown.Menu>
  </Dropdown>
);

export default Settings;

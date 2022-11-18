import {PersonCircle} from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'

const UserAvator1 = (props) => {
 console.log('props', props)
  return (
      <>
        <Dropdown>
          <Dropdown.Toggle size={'xs'}>
            <PersonCircle color="white"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item  >
              Save

            </Dropdown.Item>
            <Dropdown.Item href="#">
              Download
            </Dropdown.Item>
            <Dropdown.Item href="#">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </>
  )
}

export default UserAvator1;

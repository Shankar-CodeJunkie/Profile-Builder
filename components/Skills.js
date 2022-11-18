import {
  useState, useReducer, React
} from 'react';
import {Edit} from '@carbon/icons-react'
import {Modal, TextArea} from 'carbon-components-react';
import {AddSkills} from "../redux/actions/updateSkills";
import {useDispatch, useSelector} from "react-redux";
import {Grid, Column, Tile, Button } from '@carbon/react'
import {HorizontalRule} from "@carbon/ibmdotcom-react";


const Skills = (props) => {

  const [modal, showModal] = useState(false);
  const dispatch = useDispatch();

  const [skills, updateSkills] = useState([]);
  const handleSubmit = () => {
    let arr = skills.split(',')
    dispatch(AddSkills(arr))
    showModal(false);
  }


  return (
      <div>
        <Tile style={{borderRadius: '25px'}}>
          <h3>
            Skills
            <Edit className={"card-header-img"} onClick={() => showModal(true)}/>

          </h3>
          <HorizontalRule weight="thin" />

          <Tile>
            {
              props.skills.length > 1 &&
              <div>
                {
                  props.skills.map((x, index) => {
                    return (<Button style={{borderRadius: '20px'}} variant="secondary" size={"sm"} key={index} className={"skills-list"}>{x}</Button>)
                  })
                }
              </div>
            }
          </Tile>
        </Tile>

        {
          modal &&

          <Modal
              modalHeading={'Skills'}
              open={modal}
              onRequestSubmit={() => handleSubmit()}
              onRequestClose={() => showModal(false)}
              primaryButtonText={'Submit'}
              secondaryButtonText={'Cancel'}
          >
            <TextArea
                labelText={'Add your skills'}
                placeholder={'Seperate your skills by comma'}
                //value={props.skills}
                onChange={(e) => updateSkills(e.target.value)}
            >

            </TextArea>
          </Modal>
        }
      </div>
  )

}
export default Skills

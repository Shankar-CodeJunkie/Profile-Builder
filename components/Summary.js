import {React, useState} from 'react';
import {Modal, TextArea} from 'carbon-components-react';
//import {Row, Card, CardGroup, Col} from 'react-bootstrap';
import Edit from "@carbon/icons-react/lib/Edit";
import {AddSummary} from "../redux/actions/updateSummary";
import {useSelector, useDispatch} from "react-redux";
import { Grid, Column, Tile, Row } from '@carbon/react';
import {HorizontalRule} from "@carbon/ibmdotcom-react";
/*
function Summary(props) {
  const [modal, showModal] = useState(false)
  const dispatch = useDispatch()
  const handleClose = () => {
    showModal(false)
  }
  const handleSubmit = () => {
    //dispatch(AddSummary(summary));
    showModal(false);
  }
  return (
      <>
        <Card>
          <Card.Header as="h5">
            Summary
            <Edit className={'card-header-img'} onClick={() => showModal(true)} />
          </Card.Header>

          <Card.Body>
            <Card.Text>
              {props.userData}
            </Card.Text>
          </Card.Body>
        </Card>
        {
         <Modal
           open={modal}
           modalHeading={'Add a summary for your profile'}
           primaryButtonText={'Submit'}
           secondaryButtonText={'Cancel'}
           onRequestClose={() => handleClose()}
           onRequestSubmit={() => handleSubmit()}

           >
           <TextArea
             placeholder={'Type a brief description of your profile'}
             labelText={'Descriptive summary'}
             onChange={(e) => dispatch(AddSummary(e.target.value))}
             id={'profile-summary'}

             />

         </Modal>

        }
      </>
  )

}*/

function Summary(props) {
  const [modal, showModal] = useState(false)
  const dispatch = useDispatch()
  const handleClose = () => {
    showModal(false)
  }
  const handleSubmit = () => {
    //dispatch(AddSummary(summary));
    showModal(false);
  }
  return (
      <>
        <Row >
          <Column lg={16} md={8} sm={4}>
            <Tile style={{borderRadius: '25px'}}>
              <h3>
                Summary
                <Edit className={'card-header-img'} onClick={() => showModal(true)} />
              </h3>
              <HorizontalRule weight="thin" />

              <Tile className={'info-card__body'}>
                {props.userData}
              </Tile>

            </Tile>
          </Column>
        </Row>

        {
          <Modal
              open={modal}
              modalHeading={'Add a summary for your profile'}
              primaryButtonText={'Submit'}
              secondaryButtonText={'Cancel'}
              onRequestClose={() => handleClose()}
              onRequestSubmit={() => handleSubmit()}

          >
            <TextArea
                placeholder={'Type a brief description of your profile'}
                labelText={'Descriptive summary'}
                onChange={(e) => dispatch(AddSummary(e.target.value))}
                id={'profile-summary'}

            />

          </Modal>

        }
      </>
  )

}

export default Summary

import {React, useState, useReducer} from "react";
import {Row, Col,  Card, CardGroup, Form, FormControl, FormLabel, FormText} from "react-bootstrap";
import {Pencil} from "react-bootstrap-icons";
import {Edit, RowDelete, TrashCan } from "@carbon/icons-react";

import {useDispatch, useSelector} from "react-redux";
import {AddAward, RemoveAward} from '../redux/actions/updateAwards';
import {Dropdown, Modal, TextInput, FormGroup, Stack, RadioButtonGroup, RadioButton, TextArea} from 'carbon-components-react';

import {Grid, Column, Tile, Button } from '@carbon/react'
import {HorizontalRule} from "@carbon/ibmdotcom-react";

const Awards = (props) => {

  const dispatch = useDispatch();

  const [modal, showModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const userAwards = useSelector((state) => state.awards)
  const [deleteAward, updateDeleteAward] = useState('');

  const reducer = (state, payload) => {
    switch (payload.type) {
      case 'awardName':
        return {
          ...state,
          awardName: payload.value
        }
      case 'awardYear':
        return {
          ...state,
          awardYear: payload.value
        }
      case 'awardIssuedBy':
        return {
          ...state,
          awardIssuedBy: payload.value
        }
      case 'awardJustification':
        return {
          ...state,
          awardJustification: payload.value
        }
      default:
        return state
    }
  }
  const [compstate, updateCompState] = useReducer(reducer,{
    awardName:'',
    awardYear:'',
    awardIssuedBy:'',
    awardJustification:''
  });

  const removeAwardFromList = (awardTitle) => {
    dispatch(RemoveAward(awardTitle))
    showDeleteModal(false)
  }

  const addAwardToList = () => {
    dispatch(AddAward([compstate]));
    showModal(false)
  }

  const handleClose = () => {
    showModal(false);
    showDeleteModal(false);
  }


  return (
      <div>
        <Tile style={{borderRadius: '25px'}}>
          <h3>
            Awards
            <Edit className={"card-header-img"} onClick={() => showModal(true)}/>
            <RowDelete style={{float: 'right'}} onClick={() => showDeleteModal(true)}/>

          </h3>
          <HorizontalRule weight="thin" />

          <Tile>

            <div>

              {
                props?.awards?.length > 0 &&
                <Row >
                  <Col xs={11} md={11}>
                    <ul>
                      {props.awards.map((x, index) => {
                        return (
                            <li key={index}>
                              <div className={'award-title font-weight-bold'}>
                                <h6>{x.awardName}</h6>
                              </div>
                              <div className={'award-date'}>
                                {x.awardYear}
                              </div>
                              <div className={'experience-companyname'}>
                                {x.awardIssuedBy}
                              </div>
                              <div className={'experience-task-list'}>
                                {x.awardJustification}
                              </div>
                            </li>
                        )
                      })}
                    </ul>
                  </Col>

                </Row>
              }

            </div>

          </Tile>

        </Tile>

        {
          modal &&
              <Modal
                  modalHeading={"Add an award"}
                  open={modal}
                  onRequestClose={e=> showModal(false)}
                  primaryButtonText="Submit"
                  secondaryButtonText="Cancel"
                  hasScrollingContent={true}
                  light={true}
                  size={'sm'}
                  onRequestSubmit={() => addAwardToList() }

              >
                <FormGroup  >
                      <Stack gap={7}>
                        <TextInput id="one" labelText="Award Title" onChange={(e) => updateCompState({type:'awardName', value: e.target.value}) } />
                        <TextInput id="two" labelText="Year"  onChange={(e) => updateCompState({type: 'awardYear', value: e.target.value})} />
                        <TextInput id='three' labelText={"Issued By"}  onChange={(e) => updateCompState({type:'awardIssuedBy', value: e.target.value})} />
                        <TextArea labelText={"Justification"} rows={10}  onChange={(e) => updateCompState({type:'awardJustification', value: e.target.value})} />
                      </Stack>
                </FormGroup>
              </Modal>
        }

        {
          deleteModal &&
              <div>
                <Modal
                    modalHeading="Delete an award?"
                    open={deleteModal}
                    onRequestClose={e => showDeleteModal(false)}
                    primaryButtonText="Submit"
                    secondaryButtonText="Cancel"
                    //light={true}
                    hasScrollingContent={true}
                    size={'sm'}
                    danger={true}
                    aria-label={'test1'}
                    onRequestSubmit={() => removeAwardFromList(deleteAward)}
                >
                  <Dropdown
                      label={'Award title'}
                      //items={userAwards.map(({name}) => {name})}
                      items = {userAwards.map(({awardName}) => ({awardName}.awardName))}
                      size={'sm'}
                      light={false}
                      renderSelectedItem={(e)=> {
                        console.log('selected item');
                        console.log(e)
                        updateDeleteAward(e)
                      }}
                  ></Dropdown>
                </Modal>

              </div>
        }

      </div>

  )
}

export default Awards

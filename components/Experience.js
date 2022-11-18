import {useState, useReducer, React} from "react";
import {Row, Col, CardGroup, Card, Container,  Form,  Button} from 'react-bootstrap';
import {Edit, Add, RowDelete} from '@carbon/icons-react';
import {Dropdown, Modal, TextInput, FormGroup, Stack, RadioButtonGroup, RadioButton, TextArea, OrderedList, ListItem} from 'carbon-components-react';
import {AddExperience, RemoveExperience} from "../redux/actions/updateExperiences";
import {useDispatch, useSelector} from "react-redux";
import {Grid, Column, Tile } from '@carbon/react'
import {HorizontalRule} from "@carbon/ibmdotcom-react";
/*
const Experience = (props) => {

  const [modal, showModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [deleteDesignation, updateDeleteDesignation] = useState(false);
  const handleClose = () => showModal(false);
  let userData1 = []
  let dispatch = useDispatch();
  let userExp = useSelector((state) => state.experiences)
  const reducer = (state = userData1, action) => {
    switch (action.type) {
      case "reset":
        return userData1;
    }
    switch (action.type) {
      case "add":
        return action.value
    }
  };

  const  stateReducer = (state, payload) => {
    switch (payload.type) {
      case 'from':
        return {
          ...state,
          from: payload.value
        };
      case 'to':
        return {
          ...state,
          to: payload.value
        };
      case 'designation':
        return {
          ...state,
          designation: payload.value
        }
      case 'company':
        return {
          ...state,
          companyName: payload.value
        }
      case 'tasks':
        let arr1 = payload.value.split(':')
        return {
          ...state,
          tasks: arr1
        }
    }
  }
  const [compState, updateCompState] = useReducer(stateReducer, {
    from: '',
    to: '',
    designation: '',
    companyName: '',
    tasks: []
  })

  const [userExperiences, updateExperiences] = useReducer(reducer, userData1)
  const handleSubmit = () => {
    dispatch(AddExperience([compState]));
    showModal(false)
  }

  const handleDeleteExp = (designation) => {
    dispatch(RemoveExperience(designation))
  }

  return (
      <>
        <Card >
          <Card.Header>
            WorkExperience
            <Edit className={"card-header-img"} onClick={() => showModal(true)}/>
            <RowDelete style={{float: "right"}} onClick={() => showDeleteModal(true)}/>
          </Card.Header>
          <Card.Body className={'experience'}>
            {props.userExp.length > 0 ?
                <div>
                  <OrderedList >
                    {props.userExp.map((item, i) => {
                      return (
                          <ListItem key={i}>
                            <h6><div className={'productive-heading-02'}>{item.designation}</div></h6>
                            <div className={'experience-companyname'}>{item.company}</div>
                            <div className={'experience-duration'}>{item.from} - {item.to}</div>
                            <div className={'helper-text-01'}>Accomplishments/Tasks: </div>
                            <ul>
                              {item?.tasks?.length > 0 &&  item.tasks.map((x, index) => {

                                return (
                                    <ListItem key={index} className={"experience-task-list"}>
                                      {x}
                                    </ListItem>
                                )
                              })
                              }
                            </ul>

                          </ListItem>
                      )
                    })
                    }
                    </OrderedList>

                </div>

                : <div></div>}
          </Card.Body>
        </Card>

        {
          modal ?
              <div>
                <Modal
                    modalHeading={"Add an experience"}
                    open={modal}
                    onRequestClose={() => handleClose()}
                    primaryButtonText="Submit"
                    secondaryButtonText="Cancel"
                    light={true}
                    onRequestSubmit={() => handleSubmit()}
                    >
                  <Row>
                    <Col>
                      <TextInput labelText={'Designation'} id={'designation'} onChange={(e) => updateCompState({type: 'designation', value:e.target.value})} />
                      <TextInput labelText={'From'} id={'from'} onChange={(e) => updateCompState({type: 'from', value:e.target.value})} />
                    </Col>
                    <Col>
                      <TextInput labelText={'Company Name'} id={'companyName'} onChange={(e) => updateCompState({type: 'company', value:e.target.value})}/>
                      <TextInput labelText={'To'} id={'to'} onChange={(e) => updateCompState({type: 'to', value:e.target.value})}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextArea labelText={'Roles & Responsibilities'} helperText={'For multiple lines, separate using :'} onChange={(e) => updateCompState({type: 'tasks', value:e.target.value})} />
                    </Col>
                  </Row>
                </Modal>

              </div>
              :
              <div>
              </div>
        }

        <Modal
            modalHeading="Delete an experience?"
            open={deleteModal}
            onRequestClose={e => showDeleteModal(false)}
            primaryButtonText="Submit"
            secondaryButtonText="Cancel"
            //light={true}
            hasScrollingContent={true}
            size={'sm'}
            danger={true}
            aria-label={'test'}
            onRequestSubmit={() => handleDeleteExp(deleteDesignation)}
        >
          <Dropdown
              label={'Designation'}
              items = {userExp.map(({designation}) => ({designation}.designation))}
              size={'sm'}
              light={false}
              renderSelectedItem={(e)=> {
                console.log('selected item');
                console.log(e)
                updateDeleteDesignation(e)
              }}
          ></Dropdown>
        </Modal>


      </>
  )
}
*/
const Experience = (props) => {

  const [modal, showModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [deleteDesignation, updateDeleteDesignation] = useState(false);
  const handleClose = () => showModal(false);
  let userData1 = []
  let dispatch = useDispatch();
  let userExp = useSelector((state) => state.experiences)
  const reducer = (state = userData1, action) => {
    switch (action.type) {
      case "reset":
        return userData1;
    }
    switch (action.type) {
      case "add":
        return action.value
    }
  };

  const  stateReducer = (state, payload) => {
    switch (payload.type) {
      case 'from':
        return {
          ...state,
          from: payload.value
        };
      case 'to':
        return {
          ...state,
          to: payload.value
        };
      case 'designation':
        return {
          ...state,
          designation: payload.value
        }
      case 'company':
        return {
          ...state,
          companyName: payload.value
        }
      case 'tasks':
        let arr1 = payload.value.split(':')
        return {
          ...state,
          tasks: arr1
        }
    }
  }
  const [compState, updateCompState] = useReducer(stateReducer, {
    from: '',
    to: '',
    designation: '',
    companyName: '',
    tasks: []
  })

  const [userExperiences, updateExperiences] = useReducer(reducer, userData1)
  const handleSubmit = () => {
    dispatch(AddExperience([compState]));
    showModal(false)
  }

  const handleDeleteExp = (designation) => {
    dispatch(RemoveExperience(designation))
  }

  return (
      <div>
        <Tile style={{borderRadius: '25px'}}>
          <h3>
            WorkExperience
            <Edit className={"card-header-img"} onClick={() => showModal(true)}/>
            <RowDelete style={{float: "right"}} onClick={() => showDeleteModal(true)}/>
          </h3>

          <HorizontalRule weight="thin" />

          <Tile>
            <div className={'experience info-card__body}'}>
              {props.userExp.length > 0 ?
                  <div>
                    <OrderedList >
                      {props.userExp.map((item, i) => {
                        return (
                            <ListItem key={i}>
                              <h6><div className={'productive-heading-02'}>{item.designation}</div></h6>
                              <div className={'experience-companyname'}>{item.company}</div>
                              <div className={'experience-duration'}>{item.from} - {item.to}</div>
                              <div className={'helper-text-01'}>Accomplishments/Tasks: </div>
                              <ul>
                                {item?.tasks?.length > 0 &&  item.tasks.map((x, index) => {

                                  return (
                                      <ListItem key={index} className={"experience-task-list"}>
                                        {x}
                                      </ListItem>
                                  )
                                })
                                }
                              </ul>

                            </ListItem>
                        )
                      })
                      }
                    </OrderedList>

                  </div>

                  : <div></div>}
            </div>
          </Tile>
        </Tile>

        {
          modal ?
              <div>
                <Modal
                    modalHeading={"Add an experience"}
                    open={modal}
                    onRequestClose={() => handleClose()}
                    primaryButtonText="Submit"
                    secondaryButtonText="Cancel"
                    light={true}
                    onRequestSubmit={() => handleSubmit()}
                >
                  <Row>
                    <Col>
                      <TextInput labelText={'Designation'} id={'designation'} onChange={(e) => updateCompState({type: 'designation', value:e.target.value})} />
                      <TextInput labelText={'From'} id={'from'} onChange={(e) => updateCompState({type: 'from', value:e.target.value})} />
                    </Col>
                    <Col>
                      <TextInput labelText={'Company Name'} id={'companyName'} onChange={(e) => updateCompState({type: 'company', value:e.target.value})}/>
                      <TextInput labelText={'To'} id={'to'} onChange={(e) => updateCompState({type: 'to', value:e.target.value})}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextArea labelText={'Roles & Responsibilities'} helperText={'For multiple lines, separate using :'} onChange={(e) => updateCompState({type: 'tasks', value:e.target.value})} />
                    </Col>
                  </Row>
                </Modal>

              </div>
              :
              <div>
              </div>
        }

        <Modal
            modalHeading="Delete an experience?"
            open={deleteModal}
            onRequestClose={e => showDeleteModal(false)}
            primaryButtonText="Submit"
            secondaryButtonText="Cancel"
            //light={true}
            hasScrollingContent={true}
            size={'sm'}
            danger={true}
            aria-label={'test'}
            onRequestSubmit={() => handleDeleteExp(deleteDesignation)}
        >
          <Dropdown
              label={'Designation'}
              items = {userExp.map(({designation}) => ({designation}.designation))}
              size={'sm'}
              light={false}
              renderSelectedItem={(e)=> {
                console.log('selected item');
                console.log(e)
                updateDeleteDesignation(e)
              }}
          ></Dropdown>
        </Modal>


      </div>
  )
}
export default Experience

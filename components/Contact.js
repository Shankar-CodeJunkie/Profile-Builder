import Container from "react-bootstrap/Container";
import {Grid, Column, Tile, Row } from '@carbon/react'
import {Link, ButtonSet, Dropdown, MultiSelect} from 'carbon-components-react';
import * as Icon from 'react-bootstrap-icons';
import {Email, ApplicationMobile, LogoGithub, LogoLinkedin, Share, Edit} from '@carbon/icons-react'
import {React, useState, useReducer} from "react";
import {Modal, TextInput, TextArea} from 'carbon-components-react';
import {useDispatch, useSelector} from "react-redux";
import {AddContact} from "../redux/actions/updateContact";
import {HorizontalRule} from "@carbon/ibmdotcom-react";

/*
const ContactDetails = (props) => {

  const [modal, showModal] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => showModal(false);
  const reducer = (state, payload) => {
    switch (payload.type) {
      case 'email':
       return {
         ...state,
         emailAddress: payload.value
       }
      case 'phoneNumber':
        return {
          ...state,
          phoneNumber: payload.value
        }
      case 'linkedIn':
        return {
          ...state,
          linkedIn: payload.value
        }
      case 'githubHandle':
        return {
          ...state,
          githubHandle: payload.value
        }
      case 'stackOverFlow':
        return {
          ...state,
          stackOverFlow: payload.value
        }
      case 'medium':
        return {
          ...state,
          medium: payload.value
        }
    }
  }
  const [contacts, updateContact] = useReducer(reducer, {
    emailAddress: '',
    phoneNumber: '',
    linkedIn: '',
    githubHandle: '',
    stackOverFlow: '',
    medium: ''
  })
  const handleSubmit = (event) => {
    let obj = {emailAddress: contacts.emailAddress, phoneNumber: contacts.phoneNumber, linkedIn: contacts.linkedIn, medium: contacts.medium, stackOverFlow: contacts.stackOverFlow, github: contacts.githubHandle}
    console.log('last obj', obj);
    dispatch(AddContact(obj));
    showModal(false);
  }
  return (
      <>
        <Container>
          <Card>
            <Card.Header>
              Contact Details
              <Edit className={'card-header-img'} onClick={() => showModal(true)}/>
            </Card.Header>
            <Card.Body>
              <Grid>
                <Column lg={8} md={4} sm={2}>
                  <Email size={20} className={'contact-details-img'} />
                  {props.contactDetails.emailAddress}
                </Column>
                <Column lg={8} md={4} sm={2}>
                  <LogoGithub size={20} className={'contact-details-img'} />
                  {props.contactDetails.github}
                </Column>
              </Grid>
              <Grid>
                <Column lg={8} md={4} sm={2}>
                  <ApplicationMobile  size={20} className={'contact-details-img'} />
                  {props.contactDetails.phoneNumber}
                </Column>
                <Column lg={8} md={4} sm={2}>
                  <Share size={20}  className={'contact-details-img'} />
                  {props.contactDetails.stackOverFlow}
                </Column>
              </Grid>
              <Grid>
                <Column lg={8} md={4} sm={2}>
                  <LogoLinkedin  size={20} className={'contact-details-img'} />
                  {props.contactDetails.linkedIn}
                </Column>
                <Column lg={8} md={4} sm={2}>
                  <Icon.Medium size={20} className={'contact-details-img'} />
                  {props.contactDetails.medium}
                </Column>
              </Grid>
            </Card.Body>
          </Card>
        </Container>
        {
          modal ?
              <div>
                <Modal
                    modalHeading={"Contact Details"}
                    open={modal}
                    onRequestClose={() => handleClose()}
                    primaryButtonText="Submit"
                    secondaryButtonText="Cancel"
                    light={true}
                    onRequestSubmit={() => handleSubmit()}
                >
                  <Row>
                    <Col xs={12} md={6}>
                      <TextInput labelText={'Email Address'} onChange={(e) => updateContact({type:'email', value: e.target.value})} id={'emailAddress'} />
                      <TextInput labelText={'Phone Number'} onChange={(e) => updateContact({type:'phoneNumber', value: e.target.value})}/>
                      <TextInput labelText={'LinkedIn'} onChange={(e) => updateContact({type:'linkedIn', value: e.target.value})}/>

                    </Col>
                    <Col xs={12} md={6}>
                      <TextInput labelText={'Github'} onChange={(e) => updateContact({type:'githubHandle', value: e.target.value})} />
                      <TextInput labelText={'Stackoverflow'} onChange={(e) => updateContact({type:'stackOverFlow', value: e.target.value})}/>
                      <TextInput labelText={'Medium'} onChange={(e) => updateContact({type:'medium', value: e.target.value})} />

                    </Col>
                  </Row>
                </Modal>
              </div>
              : <div></div>
        }
      </>
  )
}
*/

const ContactDetails = (props) => {

  const [modal, showModal] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => showModal(false);
  const reducer = (state, payload) => {
    switch (payload.type) {
      case 'email':
        return {
          ...state,
          emailAddress: payload.value
        }
      case 'phoneNumber':
        return {
          ...state,
          phoneNumber: payload.value
        }
      case 'linkedIn':
        return {
          ...state,
          linkedIn: payload.value
        }
      case 'githubHandle':
        return {
          ...state,
          githubHandle: payload.value
        }
      case 'stackOverFlow':
        return {
          ...state,
          stackOverFlow: payload.value
        }
      case 'medium':
        return {
          ...state,
          medium: payload.value
        }
    }
  }
  const [contacts, updateContact] = useReducer(reducer, {
    emailAddress: '',
    phoneNumber: '',
    linkedIn: '',
    githubHandle: '',
    stackOverFlow: '',
    medium: ''
  })
  const handleSubmit = (event) => {
    let obj = {emailAddress: contacts.emailAddress, phoneNumber: contacts.phoneNumber, linkedIn: contacts.linkedIn, medium: contacts.medium, stackOverFlow: contacts.stackOverFlow, github: contacts.githubHandle}
    console.log('last obj', obj);
    dispatch(AddContact(obj));
    showModal(false);
  }
  return (
      <>
        <Container>
          <Row>
            <Column lg={16} md={8} sm={4}>
              <Tile style={{borderRadius: '25px'}}>
                <h3>
                  Contact Details
                  <Edit className={'card-header-img'} onClick={() => showModal(true)}/>
                </h3>

                <HorizontalRule weight="thin" />

                <Tile className={'info-card__body'}>

                  <Row>
                    <Column lg={8} md={4} sm={4}>
                      <Email style={{float:'left'}} size={20} className={'contact-details-img'} />
                      {props.contactDetails.emailAddress}

                    </Column>
                    <Column lg={8} md={4} sm={4}>
                      <LogoGithub style={{float:'left'}} size={20} className={'contact-details-img'} />
                      {props.contactDetails.github}
                    </Column>
                  </Row>
                  <Row>
                    <Column lg={8} md={4} sm={4}>
                      <ApplicationMobile style={{float:'left'}} size={20} className={'contact-details-img'} />
                      {props.contactDetails.phoneNumber}
                    </Column>
                    <Column lg={8} md={4} sm={4}>
                      <Share style={{float:'left'}} size={20}  className={'contact-details-img'} />
                      {props.contactDetails.stackOverFlow}
                    </Column>
                  </Row>
                  <Row>
                    <Column lg={8} md={4} sm={4}>
                      <LogoLinkedin style={{float:'left'}}  size={20} className={'contact-details-img'} />
                      {props.contactDetails.linkedIn}
                    </Column>
                    <Column lg={8} md={4} sm={4}>
                      <Icon.Medium style={{float:'left'}} size={20} className={'contact-details-img'} />
                      {props.contactDetails.medium}
                    </Column>
                  </Row>
                </Tile>
              </Tile>

            </Column>
          </Row>

        </Container>
        {
          modal ?
              <div>
                <Modal
                    modalHeading={"Contact Details"}
                    open={modal}
                    onRequestClose={() => handleClose()}
                    primaryButtonText="Submit"
                    secondaryButtonText="Cancel"
                    light={true}
                    onRequestSubmit={() => handleSubmit()}
                >
                  <Row>
                    <Column lg={8} xs={2} md={4}>
                      <TextInput labelText={'Email Address'} onChange={(e) => updateContact({type:'email', value: e.target.value})} id={'emailAddress'} />
                      <TextInput labelText={'Phone Number'} onChange={(e) => updateContact({type:'phoneNumber', value: e.target.value})}/>
                      <TextInput labelText={'LinkedIn'} onChange={(e) => updateContact({type:'linkedIn', value: e.target.value})}/>

                    </Column>
                    <Column lg={8} xs={2} md={4}>
                      <TextInput labelText={'Github'} onChange={(e) => updateContact({type:'githubHandle', value: e.target.value})} />
                      <TextInput labelText={'Stackoverflow'} onChange={(e) => updateContact({type:'stackOverFlow', value: e.target.value})}/>
                      <TextInput labelText={'Medium'} onChange={(e) => updateContact({type:'medium', value: e.target.value})} />

                    </Column>
                  </Row>
                </Modal>
              </div>
              : <div></div>
        }
      </>
  )
}

export default ContactDetails

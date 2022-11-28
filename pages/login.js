//import { Card } from '@carbon/ibmdotcom-react';
import {Card, Col, Container} from "react-bootstrap";
import {Form, Stack, TextInput, TextArea, Button, SelectItem,Select, Heading} from '@carbon/react'
import {Add} from '@carbon/icons-react';
import {FcGoogle} from 'react-icons/fc';
import Background from './../public/login.png'
import {Grid, Row, Column} from '@carbon/react';
/*const login = (props) => {
  return (
      <div className={'intro'}>
        <Container className={'login-page'}>
          <Row>
            <Col>

            </Col>
            <Col>
              <div className={'login-component'}>
                <Heading>Profile Builder</Heading>
                <div style={{font: 'Arial', color: 'white', marginBottom: '1vh', fontSize: '2vh'}}>
                   Build your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide
                </div>
                <div style={{marginBottom:"1vh", color:'black'}}>
                  Try it for free.
                </div>
                <Form >
                  <Stack gap={2}>

                    <Button
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                        className={'button-center'}
                        renderIcon={FcGoogle}
                        onClick={() => window.open('http://localhost:3001/login/federated/google')}
                    >
                      Login
                    </Button>
                  </Stack>
                </Form>
              </div>
            </Col>
          </Row>

        </Container>

      </div>
  )
}*/

const login = (props) => {
  return (
      <>
          <Row style={{paddingTop: '3rem'}}>
            <Column lg={8} md={4} sm={2}> </Column>
            <Column style={{float:'right'}} lg={8} md={4} sm={2}>
              <Heading className={'main__heading'}>Profile Builder</Heading>
              <div className={'info-card__heading'} style={{ marginBottom: '1vh'}}>
                Build your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide
              </div>
              <div style={{marginBottom:"1vh", color:'black'}}>
                Try it for free.
              </div>
              <Form >
                <Stack gap={2}>

                  <Button
                      kind="primary"
                      tabIndex={0}
                      type="submit"
                      className={'button-center'}
                      renderIcon={FcGoogle}
                      onClick={() => window.open('https://buildmyprofile.netlify.app:3001/login/federated/google')}
                  >
                    Login
                  </Button>
                </Stack>
              </Form>



            </Column>
          </Row>
      </>
  )
}

export default login;

import { Card } from '@carbon/ibmdotcom-react';
import {Form, Stack, TextInput, TextArea, SelectItem,Select, Heading} from '@carbon/react'
import {Add} from '@carbon/icons-react';
import {FcGoogle} from 'react-icons/fc';
import Background from './../public/login.png'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  Tile,
  AspectRatio
} from '@carbon/react';
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
import Image from 'next/image'
import profilePic from './../public/login_background.jpg'
const login = (props) => {
  return (
      <Grid className="landing-page" fullWidth>

        <div style={{marginTop: '20vh'}}></div>

        <Column lg={16} md={8} sm={4}>
          <Grid>
            <Column lg={8} md={4} sm={4}>
              <Tile style={{borderRadius: '25px'}}>
                 <Heading className={'info-card__heading'}>Profile Builder</Heading>
                <p className="info-card__body">
                  Build your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide
                  </p>

              </Tile>
            </Column>
            <Column lg={8} md={4} sm={4}>

              <Form style={{paddingTop: '35px'}} >
                <Stack gap={2}>

                  <Button
                      kind="primary"
                      tabIndex={0}
                      type="submit"
                      className={'button-center'}
                      renderIcon={FcGoogle}
                      onClick={() => window.open('https://profilebuilder.herokuapp.com//login/federated/google')}
                  >
                    Login with Google
                  </Button>
                </Stack>
              </Form>

            </Column>


          </Grid>

        </Column>




      </Grid>
  )
}

export default login;

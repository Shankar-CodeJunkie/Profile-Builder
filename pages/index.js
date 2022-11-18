import Head from 'next/head'
import Header from "../components/Header";
//import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap';

export default function Home() {
  return (
      <div>
        <Head>
          <title>NextJS app with react-bootstrap</title>
        </Head>

        <Container>
          <Row>
            <Col>Shankar</Col>
          </Row>

        </Container>
      </div>
  )
}


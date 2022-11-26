
import ContactDetails from "../components/Contact";
import Experience from "../components/Experience";
import Skills from "../components/Skills"
import Awards from "../components/Awards";
import {connect, useDispatch } from "react-redux";
//import { useEffect } from "react";
import Summary from "../components/Summary";
import {Upload, Information, Download} from '@carbon/icons-react';
import {Toggletip, ToggletipButton, ToggletipContent } from '@carbon/react';
import axios from "axios";
import {AddContact} from "../redux/actions/updateContact";
import {AddSummary} from "../redux/actions/updateSummary";
import {AddExperience} from "../redux/actions/updateExperiences";
import {AddSkills} from "../redux/actions/updateSkills";
import {AddAward} from "../redux/actions/updateAwards";
import {useEffect} from "react";
import { Grid, Column, Tile, Row } from '@carbon/react';
import { Card } from '@carbon/ibmdotcom-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const printDocument = () => {

}

const Profile = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AddContact(props.userProfile.contact));
    dispatch(AddSummary(props.userProfile.summary));
    dispatch(AddExperience(props.userProfile.experiences));
    dispatch(AddSkills(props.userProfile.skills));
    dispatch(AddAward(props.userProfile.awards))
  }, [])

  return (
      <>
        <div id={'profile-page'} className="cds--grid" style={{paddingTop: '2.2rem'}}>
            <Row>
              <Column lg={16} md={8} sm={4}>
                <Tile >
                  <h2>
                    {props.user?.user?.displayName}
                    <Upload size={16} onClick={async () => {
                      await axios.post('http://localhost:3001/saveprofile', {
                        data: props,
                        headers: {
                          'Content-Type' : 'application/json'
                        }
                      })

                    }} />
                    <Download size={16} onClick={() => {
                      const input = document.getElementById('profile-page');
                      const divHeight = input.clientHeight
                      const divWidth = input.clientWidth
                      const ratio = divHeight / divWidth;
                      html2canvas(input, {
                        scale:1,
                        scrollY: 0, scrollX: 0,
                        windowWidth: input.scrollWidth,
                        windowHeight: input.scrollHeight
                      })
                          .then((canvas) => {
                           
                            const imgData = canvas.toDataURL('image/png');
                            const pdf = new jsPDF({
                              orientation: 'landscape',
                            });
                            const imgProps= pdf.getImageProperties(imgData);
                            const pdfWidth = pdf.internal.pageSize.getWidth();
                            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.save('download.pdf');
                          })

                    }} />
                  </h2>

                </Tile>
              </Column>
            </Row>
            <Summary userData={props.summary} />
            <ContactDetails contactDetails={props.contactDetails} />

            <div className="cds--row">
              <Column lg={8} sm={4} md={4}>
                <Experience userExp={props.experiences}/>
              </Column>
              <Column lg={8} sm={4} md={4}>
                <Skills skills={props.skills} />
                <Awards awards={props.awards} />

              </Column>
            </div>
          </div>

      </>
  )
}



Profile.getInitialProps = async ({req, reduxStore}) => {
 // await insertDocument(ctx.req.session.passport)
  //let store = store.getState();


  return {
    user: req.session.passport,
    page: 'profile',
    userProfile: req.user.profile
  }
}



const mapStateToProps = (wrapper) => {
  return {
    summary: wrapper.summary,
    contactDetails: wrapper.contact,
    awards: wrapper.awards,
    experiences: wrapper.experiences,
    skills: wrapper.skills
  }
}

export default (connect(mapStateToProps)(Profile));

//export default Profile;

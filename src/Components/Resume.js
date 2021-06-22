import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'Agency Work'}
                        subTitle={'Secondsite'}
                        text={'I worked in retail, hospitality, catering and warehouses for this agency. This gave me so much insight in interacting with customers and work in a team of people with different backgrounds.'} 
                    />
                    <ResumeItem 
                        year={'2018 - 2020'} 
                        title={'Care Assistant'}
                        subTitle={'Four Seasons'}
                        text={'I gained a lot of experience in understanding people better while I was working at this job.'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Support Worker'}
                        subTitle={'Glenholme Healthcare'}
                        text={'This was my last job in health care and It had been quite an adventure. I have learned so many lessons such as time management, communication skills, leaderships skills and being a team player. I am now ready to work in technology.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        title={'GCSE\'S'}
                        subTitle={'Cheny School'}
                        text={'I went to study computing at City of Oxford College after receiving my GCSE\S.'} 
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Computing  Level 3 EXT Diploma'}
                        subTitle={'City of Oxford College'}
                        text={'I received my computing extended dimploma in 2019 and I got an offer to study Computer Science at Brighton University. '} 
                    />
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Computer Science Degree'}
                        subTitle={'University of Brighton'}
                        text={'I am still currently studing here and going into my final year this September.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume

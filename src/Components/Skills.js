import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'3d Animation (Maya)'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'HTML5'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Figma'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Core JAVA'}
                            width={'76%'}
                            text={'76%'}
                        />
                        <ProgressBar 
                            title={'Core PYTHON'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'My SQL'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Node JS'}
                            width={'25%'}
                            text={'25%'}
                        />
                        <ProgressBar 
                            title={'SASS'}
                            width={'88%'}
                            text={'88%'}
                        />
                        <ProgressBar 
                            title={'UNITY'}
                            width={'63%'}
                            text={'63%'}
                        />
                        <ProgressBar 
                            title={'Unreal Engine'}
                            width={'63%'}
                            text={'63%'}
                        />
                        <ProgressBar 
                            title={'Video Editing'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;

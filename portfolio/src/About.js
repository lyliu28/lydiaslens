import React from 'react';
import styled from 'styled-components'

const Head = styled.div`
    margin-left: 13.5%;
    font-size: 20px;
    color:grey;
    font-family: 'Varta', sans-serif;
`

const Para = styled.div`
    height: 20%;
`

const Text = styled.p`
    color: grey;
    margin: 50px;
    font-weight: 30px;
    font-family: 'Varta', sans-serif;
    text-decoration: none;
`

const About = () => (
    <div>
        {window.innerWidth > 700 &&
        <div>
            <div class="parallax"></div>
            <div style={{width: '70%'}}>
            <Head><h1> Behind the Lens </h1></Head>
            </div>
            <div class="parallax1"> </div>
        </div>
    }
        <Para>    
            <Text> 
                Hello! Welcome to Lydiaslens. I'm Lydia Liu, a nature photographer based in the Bay Area, California and a computer science student at Cal. I made this website with React/Javascript/CSS. All photos on this website are mine.
            I love being in nature and hope you will join me in preserving these natural places.
            </Text>
            <Text> My images
                have been featured by Yosemite National Park and various photography organizations' socia media platforms.
                When I'm not out in the mountains, you will find me exploring the beautiful city of San Francisco! Here you will find photos from my latest adventures. My work focuses primarily on nature and landscape photography.
            Check out my Instagram profile for more. Contact me for prints. This website is still a work in progress. Email me if you've got feedback. I'd love to hear from you!
            </Text>
        </Para>

    </div>
    
)

export default About 
import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Simplifying Online Banking</HeroH1>
        <HeroP>
          Experience banking that fits your lifestyle 
          with seamless digital services
          at your fingertips.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection

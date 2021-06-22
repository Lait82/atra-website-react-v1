import React from 'react'
import {AboutUsBg, VideoBg} from './backgroundElements'
import Video from '../../videos/background_video.mp4'

function Background() {
  return (
      <AboutUsBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </AboutUsBg>
  )
}

export default Background

import React from 'react'
import Video from '../../videos/background_video.mp4'
import {AboutUsContainer, AboutUsBg, VideoBg} from './aboutusElements.js';
function AboutUsSection() {
  return (
    <AboutUsContainer>
      <AboutUsBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </AboutUsBg>
      
      {/* <SchoolsContainer>
        <MapContainer>

        </MapContainer>
        <SchoolInfo>

        </SchoolInfo>

      </SchoolsContainer>
      
      <AboutUsContent>
        <AboutUsH1>Nuestra Historia</AboutUsH1>
        <AboutUsP>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis, nisi imperdiet aliquet malesuada, lacus nibh elementum eros, sit amet tempus lectus massa nec metus. Proin eget mauris nec arcu hendrerit molestie id non erat. Pellentesque hendrerit ante eu justo dapibus luctus. Vivamus elementum massa quis ex vehicula, vitae mattis metus imperdiet. Nulla in quam vel mauris sodales finibus in in est. Sed ut nisl nec dui imperdiet tempus eu et turpis. Donec tempor, dui in vestibulum varius, elit tortor laoreet risus, nec rutrum orci urna eget dui. Vivamus ut orci condimentum, lacinia dui quis, elementum eros. Sed aliquam eget neque quis mollis. Etiam quis metus eros. Donec iaculis imperdiet congue. Cras sem quam, elementum a posuere ut, condimentum vestibulum massa. Phasellus non elit arcu. Sed nisl purus, scelerisque ut elementum non, lobortis sed mi. Mauris non euismod velit. Pellentesque feugiat ante id risus sagittis, aliquet lacinia ipsum posuere.

Praesent imperdiet dapibus arcu nec gravida. Fusce quis luctus sem. Curabitur fringilla orci non diam vestibulum tempor. Donec in mollis ante, sit amet condimentum mauris. Nulla auctor congue suscipit. Phasellus varius, lacus dignissim suscipit viverra, velit ex lacinia orci, vitae dapibus lorem urna vitae enim. Quisque porttitor varius erat ac suscipit. Fusce sed orci laoreet, viverra nibh faucibus, interdum sem. Nulla gravida nisi sit amet luctus tempor. Curabitur imperdiet, enim vitae faucibus elementum, ligula dolor mattis urna, ut malesuada turpis sapien non est. Nulla sagittis ligula id facilisis consectetur. Ut in urna vitae velit sollicitudin blandit.

Sed ornare volutpat interdum. Ut mattis dignissim lacus, luctus sollicitudin ligula dapibus sit amet. Maecenas ullamcorper nunc vel tincidunt interdum. Phasellus aliquam massa erat, feugiat maximus ex placerat et. Aenean non faucibus nunc. Donec id tortor in mauris venenatis tempus. Aenean mollis est nec maximus facilisis. Phasellus ut erat odio. Curabitur vel finibus sem. Vivamus at semper mi. Aenean faucibus turpis justo, ut condimentum justo viverra ac.</AboutUsP>
      </AboutUsContent>
       */}
    </AboutUsContainer>
  )
}

export default AboutUsSection

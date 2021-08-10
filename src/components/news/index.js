import {React} from 'react'
import {NewsSection,
  NewsContainer,
  SingleNewContainer,
  NewsTitle,
  NewsBody, NewsParagraph} from './newsComponents'


function News(){
  return(
    <NewsSection>
      <NewsContainer>
        <SingleNewContainer>
          <NewsTitle>
            <h1 className="highlight">Titulo Noticia</h1>
          </NewsTitle>
          <NewsBody>
            <NewsParagraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus laborum sint culpa odit praesentium consectetur 
              nam dolore tenetur quos mollitia dicta cupiditate consequuntur consequatur
              quibusdam, obcaecati natus, pariatur voluptas ullam.</NewsParagraph>
          </NewsBody>
        </SingleNewContainer>

        <SingleNewContainer>
          <NewsTitle>
            <h1 className="highlight">Titulo Noticia</h1>
          </NewsTitle>
          <NewsBody>
            <NewsParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Doloribus voluptatum earum ducimus aliquid alias nesciunt
              illum, placeat, voluptatibus quaerat nulla cumque illo fugit
              ullam veniam, dolor voluptates sed dicta. Repudiandae minus ratione
              necessitatibus sit unde modi harum laudantium dignissimos molestiae. </NewsParagraph>
          </NewsBody>
        </SingleNewContainer>

        <SingleNewContainer>
          <NewsTitle>
            <h1 className="highlight">Titulo Noticia</h1>
          </NewsTitle>
          <NewsBody>
            <NewsParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quos suscipit quis labore ab, saepe iure tempora minima ea 
              accusamus molestias, dolorum assumenda perferendis, incidunt officia
              ducimus consequuntur. Accusamus, qui, veniam, totam excepturi eos odio 
              adipisci provident obcaecati deleniti perspiciatis nihil dolorem eum beatae. 
              Perspiciatis facilis adipisci expedita!
            </NewsParagraph>
          </NewsBody>
        </SingleNewContainer>

      <SingleNewContainer>
        <NewsTitle>
          <h1 className="highlight">Titulo Noticia</h1>
        </NewsTitle>
        <NewsBody>
          <NewsParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Necessitatibus laborum sint culpa odit praesentium consectetur 
            nam dolore tenetur quos mollitia dicta cupiditate consequuntur consequatur
             quibusdam, obcaecati natus, pariatur voluptas ullam.</NewsParagraph>
        </NewsBody>
      </SingleNewContainer>
    </NewsContainer>      
  </NewsSection>

  );
}

export default News;
import CurrentTimeLineExp, { calculateDuration } from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base '>
            I am a passionate and versatile developer with over +{calculateDuration('2021-06-01', false)} of software development experience and a constant interest in learning new technologies. I am currently mastering the path to be a Cloud Engineer and master tools or practices such as " AWS, CI/CD, Docker, and Kubernetes" to perform cost optimized, reliable and secure full software delivery and maintenance.
          </p>

          <p className='text-base '>
            I have a solid experience in web and desktop ent-to-end development, using frameworks and technologies such as "Next.js, Bootstrap, and Tailwind". I also have robust skills in Backend development with "Spring Boot, and Django" with integration to PostgreSQL Database. In addition, I also have experiences in app deployment in cloud, utilizing tools such as Docker and Amazon Web Services. UX design with "Figma" always following the best practices of prototyping and coding, clean architecture, "SOLID" principles, GitFlow, and agile methodologies.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2  text-start'>Skills</h2>

          <p className='text-base '>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about +{calculateDuration('2020-01-01', false)} ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          <p className='text-base '>
            Event though the scope of web development is wide, I was very interested and focused on Frontend development.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5  text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        {/* <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2  text-start'>Interests & Goals</h2>

          <p className='text-base '>
            I am interested in learning Backend with other language like Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base '>
            For now I'm learning how to make applications with real time communication such as a chat using Socket.IO, I'm also starting to learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className='text-base '>
            I am also interested in learning other things besides programming such as 3D design with Blender and video editing with Davinci Resolve (these last two I would take as a hobby).
          </p>

        </AnimationContainer> */}
        
      </div>

    </SectionContainer>
  )
}

export default AboutSection;

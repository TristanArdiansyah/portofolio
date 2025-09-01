import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16 character-panel'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-center lg:text-start'>
        About me
      </h2>

      <p className='text-md'>
      I am a passionate and versatile Software and Cloud Engineer with over +{calculateDuration('2024-08-25', false)} of  with experience in managing infrastructure in AWS, Kubernetes, CI/CD Pipelines. Skilled in building and optimizing cloud-native applications, reducing infra costs, automating deployments, and building scalable distributed system support product pivots in fast-moving startups.</p>

    </AnimationContainer>
  )
}

export default AboutMe;
import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>
          Full Stack Developer, Intern. Bioma</a> | August. 2024 - {calculateDuration('2024-08-26', true)}
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          As a Full Stack Developer for a project at Bioma, a startup company, I played a pivotal role in integrating AI models with a public news API to infer sentiment and predict future oil price trends. Leveraging technologies such as Spring Boot for backend services, Flask for AI model deployment, and Docker for streamlined containerization, I ensured seamless system integration and scalability. Additionally, I utilized AWS cloud services for hosting and domain registration, enabling a robust and reliable platform for real-time sentiment analysis and trend forecasting.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Mobile Development Cohort at Bangkit Academy 2024 Batch 1 | Feb. 2024 - Jun. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>
        Participating in the Bangkit Academy Mobile Development cohort was a transformative learning experience that deepened my expertise in developing robust and user-friendly mobile applications. Through a comprehensive curriculum, I gained proficiency in Android development, Firebase integration, and user interface design, while collaborating on a capstone project that honed my teamwork and problem-solving skills.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;
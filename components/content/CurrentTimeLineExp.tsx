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
        <TimelineEvent.Title>
          <div className="flex items-center gap-3">
            <img 
              src="/bioma-logo.svg" 
              alt="Bioma logo" 
              className="w-8 h-8 rounded-md object-contain flex-shrink-0"
            />
            <div>
              <a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover: hover:underline transition-all ease font-semibold'>
                Software Engineer, Full-time. Bioma
              </a>
              <span className="text-gray-600"> | November. 2024 - {calculateDuration('2024-11-26', true)}</span>
            </div>
          </div>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          • Delivered multiple cloud-native PoCs and MVPs on AWS to support product pivots, leveraging serverless infras- tructure to minimize operating costs. <br />
          • Automated news ingestion pipeline with AWS Lambda + cron jobs, enabling sentiment analysis on oil/gas market data. <br />
          • Deployed custom AI models on AWS EC2 G4 instances, scripting instance management via AWS CLI to maximize credit efficiency. <br />
          • Engineered infrastructure for a quantitative trading algorithm on AWS, automating workflows and contributing to an 8% YoY profit in crude oil futures trading.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <div className="flex items-center gap-3">
            <img 
              src="/bioma-logo.svg" 
              alt="Bioma logo" 
              className="w-8 h-8 rounded-md object-contain flex-shrink-0"
            />
            <div>
              <a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover: hover:underline transition-all ease font-semibold'>
                Full Stack Engineer, Intern. Bioma
              </a>
              <span className="text-gray-600"> | August. 2024 - November. 2024</span>
            </div>
          </div>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          • Optimized Kubernetes workloads on AWS EKS, resolving support issues and downsizing clusters to cut infrastructure costs by 50%. <br />
          • Implemented CI/CD pipelines with GitLab Actions, accelerating iteration cycles and improving development agility.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          <div className="flex items-center gap-3">
            <img 
              src="/bangkit.png" 
              alt="Bangkit Academy logo" 
              className="w-8 h-8 rounded-md object-contain flex-shrink-0"
            />
            <div>
              <span className='font-semibold'>Mobile Development Cohort at Bangkit Academy 2024 Batch 1</span>
              <span className="text-gray-600"> | Feb. 2024 - Jun. 2024</span>
            </div>
          </div>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Participating in the Bangkit Academy Mobile Development cohort was a transformative learning experience that deepened my expertise in developing robust and user-friendly mobile applications. Through a comprehensive curriculum, I gained proficiency in Android development, Firebase integration, and user interface design, while collaborating on a capstone project that honed my teamwork and problem-solving skills.
        </TimelineEvent.Description>
      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;
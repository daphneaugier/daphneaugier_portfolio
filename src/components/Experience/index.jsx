import "./index.css";
import TimeLineEntry from "../TimeLineEntry";

function Experience() {
  return (
    <section className="contact">
      <div className="experience">
        <h2>Work Experience</h2>
        <TimeLineEntry
          title="Freelance UI/UX DESIGNER & WEB DEVELOPER"
          date="January, 2024 to present"
          details={[
            "Worked on various projects, delivering UI/UX design and full-stack development for clients in diverse industries.",
            "Developed websites and applications with a focus on user-centered design and cross-platform compatibility (mobile, web).",
            "Designed brand identity and developed responsive website for a restaurant.",
            "Engineered a custom online radio platform with an integrated content management system, enabling real-time playlist updates and improving client's operational efficiency.",
            "Led the development of a Flutter-based online art sales platform as Product Owner and Web Developer, managing a team of three to drive product strategy, design, and implementation."
          ]}
          delay="0"
        />
        <TimeLineEntry
          title="UI/UX DESIGNER at Solotech Inc."
          date="November, 2022 to January, 2024"
          details={[
            "Gathered and evaluated user requirements, working closely with clients and developers to ensure a seamless user experience.",
            "Created UI mockups and interactive prototypes, using Figma and Miro to illustrate client requirements.",
            "Designed user-friendly graphical interfaces, following best practices in interaction design and ensuring accessibility."
          ]}
          delay="200"
        />
        <TimeLineEntry
          title="JUNIOR SOFTWARE DEVELOPER at MindGeek"
          date="November, 2021 to November, 2022"
          details={[
            "Developed features for the CMS in the Trust and Safety branch using Symfony to enhance content moderation.",
            "Consistently met sprint goals resolving stories and bugs, contributing to our agile development team.",
            "Managed large datasets and microservices architecture, collaborating with cross-functional teams resulting in improved system reliability."
          ]}
          delay="400"
        />
        <TimeLineEntry
          title="Freelance WEB DESIGNER & DEVELOPER"
          date="August, 2019 to November, 2022"
          details={[
            "Designed and developed websites for various clients, ensuring optimal UX across different platforms (mobile, web).",
            "Created and maintained an e-commerce and online reservation system for a campsite.",
            "Developed a custom Discourse plugin for a psychological help forum, improving user reporting features."
          ]}
          delay="600"
          />
      </div>
      <div className="experience">
        <h2>Education</h2>
        <TimeLineEntry
          title="Bachelor of Engineering in Software Engineering"
          date="September, 2016 to June, 2021"
          details={[
            "Participated in various competitions and projects, including a team-building event and a coding challenge.",
            "Gained practical experience in software development, working on projects such as a web application and a mobile app.",
            "Key projects:", 
            "Campus Map Mobile App : Designed the graphical interface, delivering an intuitive and accessible experience across devices. Developed front-end components and implemented unit tests using Android SDK.", 
            "SCM Maintenance System : Led a team of 10 as Scrum Master, developing an auditing system using Python, Angular, and TypeScript with a focus on optimizing UI/UX design."
          ]}
          delay="100"
        />
          </div>
    </section>
  );
}
export default Experience;

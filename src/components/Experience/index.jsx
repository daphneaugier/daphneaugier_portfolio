import "./index.css";
import TimeLineEntry from "../TimeLineEntry";

function Experience() {
  return (
    <section className="experience-section page-container">
      <div className="experience">
        <h1>Work Experience</h1>
        <TimeLineEntry
          title="SOFTWARE DEVELOPMENT ENGINEER IN TEST (SDET) at GameAddik (GameRebellion)"
          date="August 2025 – Present"
          details={[
            "Plan, design, write, maintain, and execute end-to-end test cases manually and via Python (pytest) + Playwright automation for a large-scale consumer web app (400K+ games).",
            "Program in Python to prototype internal test tools and apps, including a React + API workflow for functional execution, result history, UAT, and production deployment sign-off.",
            "Test mobile-class and desktop web apps plus backend/APIs — REST contracts, data validation, critical UI: functional, integration, and regression.",
            "Extract user scenarios from feature descriptions and requirements into test plans and test cases. Validate GenAI/AI-adjacent Player Sentiment features with meticulous bug isolation before production.",
            "Drive bug detection, isolation, and regression; communicate progress and risk in a fast-paced collaborative org. First dedicated quality hire, setting process improvements and release bars each sprint.",
            "Use AI-powered tools (Cursor) to accelerate test script development; run suites in CI/CD across Dev, Staging, and Production."
          ]}
          delay="0"
        />
        <TimeLineEntry
          title="FULL-STACK DEVELOPER & UX ENGINEER, Creative Applications — Freelance"
          date="January 2024 – August 2025"
          details={[
            "Shipped creative digital products for makers and storytellers — Divorce.fm (music radio + CMS) and Caché (French bistro website) — using JavaScript, APIs, and cross-platform mobile/desktop QA, debugging, and launch validation.",
            "Acted as both developer and product designer: designed brand identity, built responsive front ends, and engineered backend systems clients could manage autonomously after handoff.",
            "Applied functional testing and regression checks throughout development to ensure reliable delivery across mobile and desktop.",
          ]}
          delay="200"
        />
        <TimeLineEntry
          title="CO-FOUNDER & CHIEF OF PRODUCT, Creator Marketplace (Mobile) — TheCollectible"
          date="January 2023 – August 2024"
          details={[
            "Led product, UX, and usability testing for a creator art marketplace; shipped Flutter/Dart mobile app targeting iOS and Android on GCP/Firebase.",
            "Tested mobile flows, backend/APIs, auth, and cloud data to ensure quality before each release.",
            "Coordinated multi-functional test and delivery efforts as Scrum Master; communicated priorities, progress, and risk to technical and non-technical partners.",
          ]}
          delay="400"
        />
        <TimeLineEntry
          title="UX/UI DESIGNER at Solotech Inc."
          date="November 2022 – January 2024"
          details={[
            "Turned requirements into Figma/Miro prototypes and WCAG-accessible interfaces; partnered with developers on pre-deployment quality.",
            "Gathered and evaluated user requirements, working closely with clients and engineers to ensure a seamless experience.",
            "Designed user-friendly graphical interfaces following best practices in interaction design and accessibility standards.",
          ]}
          delay="600"
        />
        <TimeLineEntry
          title="SOFTWARE DEVELOPER at MindGeek (now Aylo)"
          date="November 2021 – November 2022"
          details={[
            "Wrote and maintained production CMS features for the Trust & Safety branch using Symfony; collaborated with Product and QA on bug isolation, reproduction, and regression through Agile sprint testing and deployment.",
            "Consistently met sprint goals resolving stories and bugs in an agile development team.",
            "Managed large datasets and microservices architecture, collaborating with cross-functional teams to improve system reliability.",
          ]}
          delay="800"
        />
        <TimeLineEntry
          title="WEB DESIGNER & DEVELOPER — Freelance"
          date="August 2019 – September 2022"
          details={[
            "Built and quality-checked Camp'art (e-commerce and online reservation system) with functional test cases before handoff.",
            "Developed a custom Discourse plugin in Ruby and JavaScript for a psychological help forum, improving user reporting features.",
            "Designed and developed websites for various clients, ensuring optimal UX across mobile and web.",
          ]}
          delay="1000"
        />
      </div>
      <div className="experience">
        <h1>Education</h1>
        <TimeLineEntry
          title="Bachelor of Engineering in Software Engineering — Concordia University, Montréal"
          date="September 2016 – June 2021"
          details={[
            "Campus Map mobile app: designed the graphical interface and implemented front-end components with unit tests in Android SDK (Kotlin/JUnit).",
            "SCM Maintenance System: Scrum Master for a team of 10, developing an auditing system in Python, Angular, and TypeScript.",
            "Creative practice: oil/watercolor painting (ACADEM since 2021), classical piano (13+ years), film photography.",
          ]}
          delay="100"
        />
      </div>
    </section>
  );
}

export default Experience;

import jjc from './images/logo/jjc.png';
import tcs from './images/logo/tcs.png';
import top10 from './images/logo/top-10.png';
import mu from './images/logo/mu.png';
import neu from './images/logo/neu.png';
import MBTA from './images/project-icon/MBTA.png';
import Agriculture from './images/project-icon/Agriculture.png';
import message from './images/project-icon/message.png';
import trip from './images/project-icon/trip.png';
import weather from './images/project-icon/weather.png';
import trivia from './images/project-icon/trivia.png';
import DiseaseDetection from './images/project-icon/Disease-Detection.png';
// import tic_tac_toe from './images/project-icon/tic_tac_toe.png';
import Recruitment from './images/project-icon/Recruitment.png';

export const DATA = {
    LINKEDIN: "https://www.linkedin.com/in/deshna-shah-48031a147/",
    GITHUB: "https://github.com/deshna-s/",
    EMAIL: "shah.des@northeastern.edu"
};

export const headingArray = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects'];

export const SKILLS = {
    programmingLanguages: {
        title: "Programming Languages",
        icon: 'bi-code-slash',
        content: ["Java / Spring MVC","React.js / Node.js", "HTML & CSS", "JavaScript", "C / C++"]
    },
    databases: {
        title: "Databases",
        icon: 'bi-database',
        content: ["MySQL", "SQL","Postgres", "DB2"]
    },
    applicationDevlopment: {
        title: "Application Development",
        icon: "bi-braces",
        content: ["Android Development ( Python / Flask )", "Web Development ( Node.js )", "API Development ( SpringBoot / FastAPI )"]
    }
};

export const EXPERIENCE = {
    ta: {
        title: "Software Developer Volunteer",
        duration: "October 2022 - Present",
        location: "Boston, MA",
        employer: "Jain Jagruti Center",
        link: "https://www.jjcusa.org/",
        logo: jjc
    },
    ra: {
        title: "Full Stack Developer",
        duration: "June 2021 - June 2022",
        location: "Mumbai, India",
        employer: "Tata Consultancy Services",
        link: "https://www.tcs.com/",
        logo: tcs
    }
};

export const EDUCATION = {
    ms: {
        degree: "Masters in Computer Software Engineering",
        university: "Northeastern University",
        duration: "Aug 2023 - May 2025",
        gpa: "GPA: 3.7",
        link: "https://www.northeastern.edu/",
        logo: neu
    },
    be: {
        degree: "Bachelor of Engineering in Computer",
        university: "Mumbai University",
        duration: "Aug 2017 - July 2021",
        gpa: "GPA: 3.5",
        link: "https://www.sakec.ac.in/cs/",
        logo: mu
    }
}

export const PROJECTS = {
    web:[
        {
            title: "Volunteering Recruiting System",
            description: "Developed a volunteer matching platform using Hibernate and Spring Boot, connecting volunteers and NGOs based on skills and location, with secure and private interactions.",
            icon: Recruitment,
            link: "https://github.com/deshna-s/"
        },
        {
            title: "Boston Transportation System",
            description: "Built an advanced Boston Transportation System using T-SQL and Power BI, automating operations and real-time alerts, significantly improving database efficiency.",
            icon: MBTA,
            link: "https://github.com/deshna-s/Boston-Trasportation-Database-Management-System"
        },
        {
            title: "Agriculture Management System",
            description: "Developed a multi-enterprise agriculture management system using Java Swing and AI, enhancing security and optimizing farm-to-market operations.",
            icon: Agriculture,
            link: "https://github.com/deshna-s/Agriculture-Management-System-"
        },
        {
            title: "Image-Based Plant Disease Detection Using Deep Learning",
            description: "Developed a plant identification system using Flask and Android, employing CNN, RF, and DenseNet for image processing, achieving high accuracy and publishing a paper at ICDICI 2021.",
            icon: DiseaseDetection,
            link: "https://github.com/deshna-s/Image-based-plant-disease-detection"
        }
    ]
    // mobile:[
    //     {
    //         title: "Messaging App",
    //         description: "Developed a messaging app ensuring seamless, secure communication. Google Authentication protects accounts and sensitive data. Google Firestore provides uninterrupted service, keeping chats accessible. Communicate confidently, knowing privacy is safeguarded.",
    //         icon: message,
    //         link: "https://github.com/deepfuriya/messaging-app"
    //     },
    //     {
    //         title: "Trip Manager",
    //         description: "The Trip Manager app utilizes Google location services API and Google Firestore to provide secure login/signup using Firebase Authentication, accurate GPS-based location tracking, and secure data storage on Google Firebase Cloud. It offers live maps preview of trip details, integrating Google Maps for Android.",
    //         icon: trip,
    //         link: "https://github.com/deepfuriya/Trip-Manager"
    //     },
    //     {
    //         title: "Weather App",
    //         description: "The Weather App is an Android application that displays the current weather and 5-day forecast for various cities. It utilizes the Weather API for retrieving weather data. The app features city selection, an easy-to-read UI, and uses OkHttp for API calls and JSON parsing. Additionally, it incorporates the Picasso library for loading weather icons dynamically.",
    //         icon: weather,
    //         link: "https://github.com/deepfuriya/weather-app"
    //     },
    //     {
    //         title: "Trivia Game Application",
    //         description: "The Trivia Game Application is an Android app that allows users to play a trivia game. The JSON-formatted trivia questions are retrieved using HTTP connections and API queries. Using OkHttp, the app can parse JSON input and make API calls. In order to dynamically load graphics during gameplay, it also incorporates the Picasso library.",
    //         icon: trivia,
    //         link: "https://github.com/deepfuriya/trivia-application"
    //     }
    // ]
}

import { DATA } from '../constants';

export default function AboutMe(){
    return (
        <div className="text-center my-5">
            <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
            <p className="lead fw-light mb-2">I'm Deshna Ashok Shah, a dedicated software engineer.</p>
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>I am currently pursuing Masters in Computer Science at Northeastern University, Boston.</p>       
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>I excel in Java, Python, SQL, React.js, and Spring Boot.</p>
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>My professional experience includes developing a global student collaboration platform at Jain Jagruti Center and designing a Stock Market Mobile API at Tata Consultancy Services. I thrive in creating robust, secure, and scalable applications.</p>
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>In my academic projects, I have developed systems for volunteer recruitment, transportation management, and agriculture optimization, utilizing advanced technologies and achieving high impact.</p>
            <p className="text-muted mb-3" style={{fontSize: '1.2rem'}}>I am dedicated to continuous learning and excited to contribute to innovative projects in software development, mobile applications, and web technologies.
            </p>
            <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" target="_blank" href={DATA.LINKEDIN}><i className="bi bi-linkedin"></i></a>
                <a className="text-gradient" target="_blank" href={DATA.GITHUB}><i className="bi bi-github"></i></a>
                <a className="text-gradient" href={"mailto:"+DATA.EMAIL}><i className="bi bi-envelope-fill"></i></a>
            </div>
        </div>
    );
}
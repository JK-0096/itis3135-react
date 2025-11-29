import react, { useEffect, useState } from "react";

export default function Students() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
            .then((response) => response.json())
            .then((data) => setStudents(data));
    }, []);

    return (
        <div>
            <h2>Student List</h2>
                {students.map((student, index) => (
                    <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>

                        <h2>{student.name.preferred || student.name.first} {student.name.last}</h2>
                        <p><strong>Prefix:</strong> {student.prefix}</p>

                        <p><strong>Acknowledgement:</strong> {student.acknowledgement}</p>
                        <p><strong>Mascot:</strong> {student.mascot}</p>

                        <h3>Platform</h3>
                        <p><strong>Device:</strong> {student.platform.device}</p>
                        <p><strong>OS:</strong> {student.platform.os}</p>

                        <h3>Backgrounds</h3>
                        <p><strong>Personal:</strong> {student.backgrounds.personal}</p>
                        <p><strong>Professional:</strong> {student.backgrounds.professional}</p>
                        <p><strong>Academic:</strong> {student.backgrounds.academic}</p>

                        <h3>Courses</h3>
                        <ul>
                            {student.courses.map((course, i) => (
                            <li key={i}>{course}</li>
                            ))}
                        </ul>

                        <h3>Personal Statement</h3>
                        <p>{student.personalStatement}</p>

                        <h3>Favorite Quote</h3>
                        <blockquote>
                            "{student.quote.text}" — <em>{student.quote.author}</em>
                        </blockquote>

                        <p><strong>Fun Fact:</strong> {student.funFact}</p>
                        <p><strong>Additional:</strong> {student.additional}</p>

                        <h3>Links</h3>
                        <p>
                            <a href={student.links.charlotte}>Charlotte Site</a><br/>
                            <a href={student.links.gitHub}>GitHub</a><br/>
                            <a href={student.links.githubio}>GitHub.io</a>
                        </p>

                        {
                            student.media.hasImage && (
                                <div>
                                    <img src={student.media.src} alt="Student Media" style={{ maxWidth: "200px", height: "auto" }}/>
                                    <p>
                                        {student.media.caption};
                                    </p>
                                </div>
                            )
                        }

                    </div>
                ))}
        </div>
    );
}
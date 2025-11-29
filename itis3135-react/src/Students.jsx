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

                        <p>
                            <strong>Name:</strong> {student.name}
                        </p>

                        <p>
                            <strong>Email:</strong> {student.email}
                        </p>

                        <p>
                            <strong>Website:</strong> <a href={student.website}>{student.website}</a>
                        </p>
                        
                        <p>
                            <strong>Hobbies:</strong> {student.hobbies}
                        </p>
                    </div>
                ))}
        </div>
    );
}
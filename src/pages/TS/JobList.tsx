import { useState } from "react"


interface Job {
    role: string,
    location: string,
    salary: number
}

const JobList = () => {
    const [jobsList, setJobsList] = useState<Job[]>([])

    const job1: Job = {
        role: 'admin',
        location: 'cbe',
        salary: 20000
    }

    const addJob = () => {
        setJobsList((pre) => [...pre, job1])
    }

    return (
        <div>
            <button onClick={addJob}>Add job</button>
            {
                jobsList.map((el,ind) => (
                    <ul key={ind}>
                        <li>{el.role}</li>
                        <li>{el.location}</li>
                        <li>{el.salary}</li>
                    </ul>
                ))
            }
        </div>
    )
}


export default JobList
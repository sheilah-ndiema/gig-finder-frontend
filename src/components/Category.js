import React, {useState, useEffect} from "react";
import JobCard from './JobCard';
import Filter from "./Filter";


function Category () {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const [jobs, setJobs] = useState([])

useEffect(() => {
    fetch("http://localhost:9292/job_listings")
    .then((r) => r.json())
    .then((jobs) => {
        setJobs(jobs);
    });
}, []);

function handleCategoryChange(category) {
    setSelectedCategory(category);
}

const jobsToDisplay = jobs.filter((job) => {
    if (selectedCategory === "All") return true;

    return job.category === selectedCategory;
});
    console.log(jobsToDisplay)
    return (
        <div id='category'>
            <h1 className="main-title">Category</h1>
            <h1 id='header'>Job Type</h1>

            <Filter 
            category={selectedCategory}
            onCategoryChange={handleCategoryChange}/>

            <h1 className="job-list-title">Open opportunities</h1>

            <div className="job-list-card" >
                {jobsToDisplay.map((job, id) => {
                return (<JobCard key={id}
                    title = {job.title}
                    body = {job.body}
                    date = {job.date}
                    category_ = {job.category_id}
                ></JobCard>);
                })}
            </div>
        </div>
    )
}

export default Category;
const getStorJobApplication = () =>{
    const storJobApplication = localStorage.getItem("job-applications");
    if(storJobApplication){
        return JSON.parse(storJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storedJobApplications = getStorJobApplication();
    const exist = storedJobApplications.find(jobId => jobId ===id);
    if(!exist){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

export {getStorJobApplication, saveJobApplication}
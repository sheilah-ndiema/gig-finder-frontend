import React, {useState} from "react";

function Newlisting({categories, jobListings, setJobListings}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState({});

    
  
    const newList = {
        title,
        body,
        date,
        category_id: category,
        completed: false
      };

      const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newList),
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:9292/job_listings", configObj)
          .then((r) => r.json())
          .then((jobListing) => {
            addNewListing(jobListing);
          });
      };
    
      const addNewListing = (jobListing) => {
        setJobListings([...jobListings, jobListing])
      }
    
    return (
        <div className="newlisting" id="listing">
            <h1 style={{color: "#DF843B", textAlign: "center"}}>New Listing</h1>
            <div id="forminput" align="center">
            <form id="form" onSubmit={handleSubmit} >
                <input  
                    type="text" 
                    title="title"
                    value={title} 
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}/>
                
                <br/>
                <input 
                    type="text" 
                    body="body" 
                    value={body}
                    placeholder="Body"
                    onChange={(e) => setBody(e.target.value)} />
                <br/>
                <input 
                    type="date" 
                    date="date" 
                    placeholder="date"
                    onChange={(e) => setDate(e.target.value)} />
                <br/>
                <select 
                    style={{width:"250px"}} 
                    category="category" 
                    placeholder="select category"
                    onChange={(e) => setCategory(e.target.value)}>
                <option value="none">Select category</option>
                    {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.job_type}
                </option>
              ))}
                </select>
                <button style={{backgroundColor: "#DF843B", color: "#e6effa", width:"250px"}} 
                      type="submit">create new listing</button>
                </form>
            </div>
        </div>
    )
}

export default Newlisting;
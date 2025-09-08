import React, { useState, useEffect } from 'react'

function DataFetch() {
    const[data, setData] = useState(null)
    const[loading, setLoading] = useState(true)
    const[error,  setError] = useState(null)

    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);

            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }

        };
        fetchData()
        
    },[])

    if(loading){
        return <div>Loading data .......</div>
    }


    if(error){
        return <div>Error: {error.message}</div>
    }



    
  return (
    <>
    <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    
    </>
  )
}

export default DataFetch
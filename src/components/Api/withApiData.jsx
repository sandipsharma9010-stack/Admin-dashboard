import React, { useEffect, useState } from 'react';

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const withApiData = (WrappedComponent) => {
  return function WithApiDataWrapper(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => { 
        try {
          const response = await fetch(baseUrl);
          if (!response.ok) throw new Error("Network response was not ok");
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    return (
      <WrappedComponent
        {...props}
        apiData={data}
        loading={loading}
        error={error}
      />
    );
  };
};

export default withApiData;

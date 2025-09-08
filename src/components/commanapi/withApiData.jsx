import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const withApiData = (WrappedComponent) => {
  return function WithApiDataWrapper(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
      
    }, [endpoint]);

    const createItem = async (newItem) => {
      try {
        const response = await axios.post(`${baseUrl}`, newItem, {
          headers: { "Content-Type": "application/json" },
        });
        setData((prevData) => [...prevData, response.data]);
        return response.data;
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    return (
      <WrappedComponent
        {...props}
        apiData={data}
        loading={loading}
        error={error}
        createItem={createItem}
      />
    );
  };
};

export default withApiData;

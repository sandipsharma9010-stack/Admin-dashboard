// baseUrl = "https://jsonplaceholder.typicode.com/posts";
import React, { useState } from 'react'

const BaseUrl = (WrappedComponent)=> {
 return (props) => {
    const [hide, setHide] = useState(false)


  const toggle = ()=>{
    setHide((prev) => !prev)
 }

  return (
    <WrappedComponent
    {...props}
    hide={hide}
    toggle={toggle}
    />
  );
};
};

export default BaseUrl
import React from 'react'
// import MathPro from '../pratice/MathPro'
// import ArrPro from '../pratice/ArrPro'
import Compiler from '../pratice/Compiler'
import UserData from './ApiData/UserData'
import AddPost from './ApiData/AddPost'
import CrudApi from './ApiData/CrudApi'

function Reports() {
  return (
    <>
   

    {/* <MathPro/> */}
    {/* <Compiler/> */}
    <CrudApi/>
      <AddPost/>
    <UserData/>
    {/* <ArrPro/> */}
    </>
  )
}

export default Reports
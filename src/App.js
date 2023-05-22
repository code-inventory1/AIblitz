import React from 'react'
import { Suspense, useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

const BarComponent = React.lazy(() => import('./BarChart'));
const TableComponent = React.lazy(() => import('./TableData'));

function App() {
  const [userData,setUserData]= useState([]);

  const fetchApi=()=>{
    axios
    .get("https://blob-internal.goblitz.ai/quickdump/sales-data")
    .then(data => setUserData(data.data))
    .catch(error => console.log(error));
  }
  useEffect(()=>{
    fetchApi();
  },[])


  return (
    <div>
    {userData && userData.length?
    <Suspense fallback={<div>Loading...</div>}>
        <BarComponent  dummyData={userData}/>
        <TableComponent rows={userData}/>
      </Suspense>

    :null}
    </div>
  )
}

export default App;
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const SuperherosPage = () => {
  const[isLoading,setLoading]=useState(true)
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/users')
    .then(res=>{
      setData(res.data)
      setLoading(false)
    })
  },[])
  if(isLoading){
    return <h2>Loading.....</h2>
  }
  return (
    <div>
      <h1>Super heros</h1>
      <div>
        {
          data.map((hero,index)=>{
            return <div key={index}>
              <h2>{hero.name}</h2>
              <h3>{hero.email}</h3>
              </div>

          })
        }
      </div>
    </div>
  );
};

export default SuperherosPage;

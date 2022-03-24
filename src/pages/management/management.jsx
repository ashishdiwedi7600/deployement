import React, { useEffect, useState } from 'react'
import CardView from '../../common/cardview';
import { getUserList } from  './service'


export default function Management() {
  const [result, setResult] = useState([])  

  useEffect(() => {
    fetchUserList();
  }, [])
//  <ModelComponent />
  const fetchUserList = async() => {
    const { data } = await getUserList();
    console.log('>>>>>>>',data);
    setResult(data.data);
  }
  


  return (<>
    
    <div className='p-5 container border-double border-black bg-slate-200'>
      <div className='m-auto'>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Cardview of the Users</h2>
            </div>
       { result.map((details, i)=> <CardView key={i} details={details}  /> ) }
    </div></>
  )
}

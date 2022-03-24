import React from 'react'
import  data  from '../MOCK_DATA.json'

export default function Cardview1() {
    console.log(data);
    return (<>
        {data.map((data, key) => {

return (<>

  <div key={key}>

    {data.name +

      " , " +

      data.class +

      " ," +

      data.section +

      ", " +

      data.father_name
      }
      

  </div>
  <img src={data.avatar} alt="avatar" />
  </>

);

})}

    </>
    )
}

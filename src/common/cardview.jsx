import React, { useState } from 'react'
import ModelComponent from './model';

function CardView(props) {
  const details = props.details;

  const [modalOpen, setModalOpen] = useState(false);
  const [allvalues, setAllvalues] = useState({
    email: { val: '', isValid: true },
    password: { val: '', isValid: true }
  })
  const changeHandler = (e) => {
    let val = e.target.value
    let key = e.target.name
     let isValid = true

    switch (key) {
      case 'email':
        if (val?.length && /\S+@\S+\.\S+/.test(val)) {
          isValid = false
        }

        break;
      case 'password':
        if (val?.length)
          isValid = false
        break;
      default:
        break;
    }
    setAllvalues({...allvalues,[key]:{val,isValid}})
  }

  return (
    <>
      <input type="text" placeholder='enter email' name='email' value={allvalues.email.val} onChange={changeHandler} />
      {allvalues.email.isValid && <small>plaese enter a valid email</small>}
      <input type="password" placeholder='enter pass' name='password' value={allvalues.password.val} onChange={changeHandler} />
      {allvalues.password.isValid && <small>plaese enter a Password</small>}
    </>
    //     <>
    //         <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 m-auto" >
    //   <img className="w-md" src={details.avatar} alt="Sunset in the mountains"/>
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{details.name} {details.last_name}</div>
    //     <p className="text-gray-700 text-base">
    //     <i>{details.email}</i>
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //   <button onClick={() => {
    //                                 setModalOpen(true);
    //                             }} className='bg-blue-500 hover:bg-redName-700 text-white font-bold py-2 px-4 rounded-full'> For More </button>    
    //   </div>
    // </div>

    //         {modalOpen && <ModelComponent setOpenModal={setModalOpen} details={details} />}
    //         {/* <ModelComponent toggleModel={toggalModel} details={details} /> */}
    //     </>

  )
}

export default CardView
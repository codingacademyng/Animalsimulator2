


import React from 'react'
import giraffe0 from './assets/animalpack/giraffe0.png'
import giraffe1 from './assets/animalpack/giraffe1.png'
import giraffe2 from './assets/animalpack/giraffe2.png'
function Giraffe(props) {

  return (
    <div className='min-h-[300px] min-w-[300px] bg-sky-500 rounded p-[20px]'> 
   <div className='flex justify-evenly'>
          <div>
          <h3>G- Giraffe</h3> 
        </div>
        <div>
        <label className='text-white text-lg'> N: <span>{props.n}</span></label>
        </div> 
        <div><label>Health : <span>{props.status}%</span></label></div>
    </div>
    <div className='md:min-h-[300px] md:min-w-[300px] md:grid md:grid-cols-3 gap-[10px] bg-sky-500 rounded p-[20px] flex flex-col'>
       
       <div >
       {(props.status<=50 && props.provokecounter==0)?  <img src={giraffe1} /> :(props.status<=50 && props.provokecounter >=1)? <img src={giraffe0}/> : <img src={giraffe2}/> }


           
        </div>

        <div >
        {(props.status<=50 && props.provokecounter==0)?  <img src={giraffe1} /> :(props.status<=50 && props.provokecounter >=1)? <img src={giraffe0}/> : <img src={giraffe2}/> }

        </div>

        <div >
        {(props.status<=50 && props.provokecounter==0)?  <img src={giraffe1} /> :(props.status<=50 && props.provokecounter >=1)? <img src={giraffe0}/> : <img src={giraffe2}/> }

        </div>


        <div >
        {(props.status<=50 && props.provokecounter==0)?  <img src={giraffe1} /> :(props.status<=50 && props.provokecounter >=1)? <img src={giraffe0}/> : <img src={giraffe2}/> }

        </div>

        <div >
        {(props.status<=50 && props.provokecounter==0)?  <img src={giraffe1} /> :(props.status<=50 && props.provokecounter >=1)? <img src={giraffe0}/> : <img src={giraffe2}/> }

        </div>
    </div>
    <div>
    {
          props.status <= 50 && props.provokecounter==0?   <h3>Status: <label className='text-lg text-red-400'>Weak</label></h3> :
          props.status <= 50 && props.provokecounter>=1?   <h3>Status: <label className='text-lg text-red-500'>Dead</label></h3>:
          <h3>Status: <label className='text-lg text-green-400'>Healthy</label></h3>
        }
       
    </div>
    </div>
  )
}

export default Giraffe


import React from 'react'
import monkey0 from './assets/animalpack/monkey0.png'
import monkey1 from './assets/animalpack/monkey1.png'
import monkey2 from './assets/animalpack/monkey2.png'
function Monkey(props) {
  return (
    <div className='min-h-[300px] min-w-[300px] bg-sky-500 rounded p-[20px]'>
        <div className='flex gap-4'>
            <div><h3>M- Monkey</h3></div>
            <div>
            <label className='text-white text-lg'> N: <span>{props.n}</span></label>
        </div> 
        <div><label>Health : <span>{props.status}%</span></label></div>
        </div>
        <div className='md:min-h-[300px] md:min-w-[300px] md:grid md:grid-cols-3 gap-[10px] bg-sky-500 rounded p-[20px] flex flex-col'>
         
         <div >
         {(props.status<=30 && props.provokecounter==0)?  <img src={monkey1} /> :(props.status<=30 && props.provokecounter >=1)? <img src={monkey0}/> : <img src={monkey2}/> }

           
        </div>

        <div >
        {(props.status<=30 && props.provokecounter==0)?  <img src={monkey1} /> :(props.status<=30 && props.provokecounter >=1)? <img src={monkey0}/> : <img src={monkey2}/> }

        </div>

        <div >
        {(props.status<=30 && props.provokecounter==0)?  <img src={monkey1} /> :(props.status<=30 && props.provokecounter >=1)? <img src={monkey0}/> : <img src={monkey2}/> }

        </div>


        <div >
        {(props.status<=30 && props.provokecounter==0)?  <img src={monkey1} /> :(props.status<=30 && props.provokecounter >=1)? <img src={monkey0}/> : <img src={monkey2}/> }

        </div>

        <div >
        {(props.status<=30 && props.provokecounter==0)?  <img src={monkey1} /> :(props.status<=30 && props.provokecounter >=1)? <img src={monkey0}/> : <img src={monkey2}/> }

        </div>
       
    </div>
    <div>
      {
         props.status <= 30 && props.provokecounter==0?   <h3>Status: <label className='text-lg text-red-400'>Weak</label></h3> :
         props.status <= 30 && props.provokecounter>=1?   <h3>Status: <label className='text-lg text-red-500'>Dead</label></h3>:
         <h3>Status: <label className='text-lg text-green-400'>Healthy</label></h3>
      }
    </div>
    </div>
  )
}

export default Monkey
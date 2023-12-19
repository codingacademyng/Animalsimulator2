import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Monkey from './Monkey'
import Giraffe from './Giraffe'
import Elephant from './Elephant'

function Meg() {

  //clock
  let ddate =  new Date();
  let hh =  ddate.getHours();
  let mm = ddate.getMinutes();
  let ss = ddate.getSeconds();


  //set Hours Passed
  const [provokedhour , setProvokedhour] =  useState(0);
  const [zoohh , setZoohh] = useState(hh);
  const [zoomm , setZoomm] = useState(mm);
  const [zooss , setZooss] = useState(ss);

  //Provoke Hour counter
  const [monkeyhourcounter , setMonkeyhourCounter] = useState(0);
  const [elephanthourcounter , setElephanthourCounter] = useState(0);
  const [giraffehourcounter , setGiraffehourCounter] = useState(0);

  //image switching state
  const [monkeyimage , setMonkeyImage] = useState(2);
  const [elephantimage, setElephantImage] = useState(2);
  const [giraffeimage , setGiraffeImage] = useState(2);

  //Animal Status values
   const [monkeystatus , setMonkeyStatus] =  useState(100)
   const [elephantstatus , setElephantStatus] =  useState(100)
   const [giraffestatus , setGiraffeStatus] =  useState(100)

   //Generated random numbers 
   const [monkeyrand , setMonkeyRand] = useState(0.0)
   const [elephantrand , setElephantRand] = useState(0.0)
   const [girafferand , setGiraffeRand] = useState(0.0)
    // Feeding value from generated random number
   const [monkeyfeed , setMonkeyFeed] = useState(0.0)
   const [elephantfeed, setElephantFeed] =  useState(0.0)
   const [giraffefeed , setGiraffeFeed]= useState(0.0)

   
   

   
   
  /**
   * 
   * A random whole number between 0 and 20:
   * for provoking hours
   */
   // Provoking Hour for monkey
   let monkeyhourfeeder = ()=>{
    let x = Math.random() * 20;
    setMonkeyRand(x.toFixed(1))
    setMonkeyStatus(monkeystatus  - ((x/100)*(monkeystatus)))

   }
// Provoking Hour for Elephant
   let elephanthourfeeder = ()=>{
    let x = Math.random() * 20;
    setElephantRand(x.toFixed(1))
    setElephantStatus( elephantstatus  - ((x/100)*(elephantstatus)))



   }

   // Provoking Hour  for Giraffe
   let giraffehourfeeder = ()=>{
    let x = Math.random() * 20;
    setGiraffeRand(x.toFixed(1))
    setGiraffeStatus(giraffestatus - ((x/100)*(giraffestatus)))
   }


  


   /**
   * 
   * A random whole number between 10 and 25:
   * for animal Feeding
   */
   // Provoking Hour for monkey

   //feeding  Hour for Monkey
   let monkeyfeeding = ()=>{
    //A random whole number between 10 and 25:
    let x = Math.floor((Math.random() * 25) + 10);
    setMonkeyFeed(x.toFixed(1));
       setMonkeyStatus(monkeystatus  + ((x/100)*(monkeystatus)))

      
       
   }

   let elephantfeeding = ()=>{
    //A random whole number between 10 and 25:
    let x = Math.floor((Math.random() * 25) + 10);
    setElephantFeed(x.toFixed(1))
    setElephantStatus( elephantstatus  + ((x/100)*(elephantstatus)))
     
   }

   let giraffefeeding = ()=>{
    //A random whole number between 10 and 25:
    let x = Math.floor((Math.random() * 25) + 10);
    setGiraffeFeed(x.toFixed(1))
    setGiraffeStatus(giraffestatus + ((x/100)*(giraffestatus)))
   }

   useEffect(()=>{

    //setting up Digital clock to display on the interface
    const inter  = setInterval(()=>{
      hh =   ddate.getHours();
      mm = ddate.getMinutes();
      ss = ddate.getSeconds();
      setProvokedhour(hh)
      setZoohh(hh)
      setZoomm(mm)
      setZooss(ss)
      
      //checking if an hour has passed 
      if(ss==59){
        skiphour()
        //increase provoked hour to detect how many times an hour is skipped
      
      }

    },1000);

    return ()=>{
      clearInterval(inter);
     
    } 

   },[ss]);


   let skiphour =  ()=>{


  // checking monkey feeding hour skipped using counter
  if(monkeystatus <=30 && monkeyhourcounter==0){
    setMonkeyhourCounter(monkeyhourcounter + 1);
    console.log("First Count Monkey " + 1)
  }else if( monkeystatus <=30  && monkeyhourcounter==1){
    setMonkeyhourCounter(monkeyhourcounter + 1);
    console.log("First Count Monkey" + 2)
  }
// checking elephant feeding hour skipped using counter
  if(elephantstatus <=69 && elephanthourcounter==0){
    setElephanthourCounter(elephanthourcounter + 1);
    console.log("First Count Elephant " + elephanthourcounter)
  }else if( elephantstatus <=69  && elephanthourcounter==1){
    setElephanthourCounter(elephanthourcounter + 2);
    console.log("First Count Elephant " + elephanthourcounter)
  }

  // checking giraffe feeding hour skipped using counter
  if(giraffestatus <=50 && giraffehourcounter==0){
   setGiraffehourCounter(giraffehourcounter + 1);
   console.log("First Count Giraffe " + 1)
  }else if( giraffestatus <=50  && giraffehourcounter==1){
    console.log("First Count Giraffe " + 2)
    setGiraffehourCounter(giraffehourcounter + 1);
  }
 
      console.log("New Hour Passed!")
      // function to pass appropriate random number on an hour skipped or provoke hour
      monkeyhourfeeder();
      elephanthourfeeder();
      giraffehourfeeder();

     
      
   }

  
   let newfeeder =  ()=>{
         // function to pass appropriate random number to feed animals
        giraffefeeding();
        elephantfeeding();
        monkeyfeeding();

        //code to set provoked hour back to zero
       

   }
  

   

  return (
   <div  className='flex flex-col gap-8 '>
    <div className="text-2xl text-sky-500">
      <h2>  MEG SIMULATOR</h2>
    </div>
    <div className='flex justify-end text-lg'>
      <h3>
        <b className='flex bg-sky-900 text-xl rounded-md text-white'><span className='w-[40px] flex justify-center'>{zoohh}</span>:<span  className='w-[40px] flex justify-center'>{zoomm}</span>: <span  className='w-[40px] flex justify-center'>{zooss}</span></b>
      </h3>
    </div>
    <div className='md:grid md:grid-cols-3 flex gap-4 justify-center flex-col'>
    {/* Monkey Component */}
    <Monkey n={monkeyrand} status={monkeystatus.toFixed(0)} provokecounter={monkeyhourcounter} />
    {/* Elephant component */}
    <Elephant n={elephantrand} status={elephantstatus.toFixed(0)} provokecounter={elephanthourcounter} />
    {/* Giraffe Component */}
    <Giraffe n={girafferand} status={giraffestatus.toFixed(0)} provokecounter={giraffehourcounter} />
   </div>

   <div className='flex gap-6 justify-center '>
    <button className='border-2 rounded-[50px] hover:shadow-md hover:bg-orange-900 hover:text-white bg-orange-500 text-black p-2 w-[200px]'>Skip Hour ({provokedhour})</button>
    <button className='border-2 rounded-[50px] hover:shadow-md hover:bg-green-900 hover:text-white bg-green-500 p-2 w-[200px]' onClick={newfeeder}>Feed Animal</button>
   </div>

   <div>
    <h3>Tips:</h3>
    <p>N- random number generated per hour </p>
   </div>
   
   </div>
  )
}

export default Meg

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import {useSelector} from "react-redux";
  import axios from "axios";
  import { useEffect, useState } from "react";
  
  function Home(){
    const [date , setDate] = useState()
  const state = useSelector(state => state)
  useEffect(()=>{
    axios.get('https://api.covidtracking.com/v1/states/current.json')
    .then(function (response) {
        setDate(response.data)
        
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  },[])
  state.main = date;
  console.log(state.main);
  
      return(
          <div>
            <h1 className="mx-5 mt-5 fs-1">COVID CURRENT SITUATION</h1>
             <div className='d-flex flex-wrap container'>
             {state?.main?.map((e,i)=>{
                console.log(e)
        return(
          <div key={i} className='col-md-4 border mt-3 mx-5 p-4 shadow rounded'>
              <div className="bg-primary p-3 mb-5 text-white">
              <h1>STATE = {e.state}</h1>
              </div>
              <h1>DATE = {e.date}</h1>
              <h1>TOTAL ={e.total}</h1>
              <h1>POSITIVE ={e.positive}</h1>
              <h1>NEGATIVE ={e.negative}</h1>
              <h1>DEATH ={e.death}</h1>
              <h1>HOSPITALIZED ={e.hospitalized}</h1>
          </div>
      )
      })}
             </div>
              
              
          </div>
      )
  }
  
  export default Home;
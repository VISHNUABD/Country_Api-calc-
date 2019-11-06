// import React,{useState} from "react";
// import "bootstrap/dist/css/bootstrap.css";

// const App=()=>{
//   return <Calc/>
// }

// const Calc=()=>
// {
//   const[firstinput,firstinputfun]=useState("")
//   const[secondinput,secondinputfun]=useState("")
//   const[extra,extratextfun]=useState([])
//   const[dropdown,dropdownfunction]=useState()
//   const[result,resultfunction]=useState()
//   const[newtextboxresult,newtextboxresultfunction]=useState("0")
//   let count=0;  

//   const changefunction=(event)=>{
//      firstinputfun(event.target.value)
//   }

//   const changefunction1=(e)=>{
//     secondinputfun(e.target.value)
//  }

//  const extratextbox=()=>{
//       extratextfun([...extra,""])
//       count=count+1;
//       console.log(count);

//  }

//  const drpdwn=(en)=>{
//     dropdownfunction(en.target.value)
//  }

//   const calcoperation=()=>{

//     if(dropdown==="ADD")
//     {

//       resultfunction(parseInt(firstinput)+parseInt(secondinput));
//       console.log(result)
//       for(let i=0;i<=count;i++)
//       {
//       console.log("hello")
//       }

//     }
//     else if(dropdown==="SUB")
//     {
//       resultfunction(parseInt(firstinput)-parseInt(secondinput));
//     }
//     else if(dropdown==="MODULUS")
//     {
//       resultfunction(parseInt(firstinput)%parseInt(secondinput))
//     }
//   }

//     const extratxtchange=()=>
//     { 
//       var n=document.getElementById("n").value
//       if(count===0)
//       {
//         newtextboxresultfunction(result)
//     }
//     else
//     {
//         newtextboxresultfunction(n+result)
//     }
      

//     }




  
// return(
//   <div className="container">
//      <input type="text" onChange={changefunction}></input><br></br>
//      <input type="text"  onChange={changefunction1}></input><br></br>
     
//      <select onChange={drpdwn}>
//        <option>CHOOSE</option>
//        <option>ADD</option>
//        <option >SUB</option>
//        <option >MODULUS</option>
//      </select><br></br>
//      <button onClick={calcoperation}>SUBMIT</button>
//      <br></br>
//      <button onClick={extratextbox}>ADD MORE</button>
//      <div>
//   {
//       extra.map((i,index)=>{
//         return (
//           <div key={index}>
//           <input type="text" id="n" onChange={extratxtchange}></input>
//           <h2>{index}</h2>
//         </div>
//         )
        
//       })
//      }
//      <li>{newtextboxresult}</li>
//      </div>
//        </div>
// )
// }
// export default App;

import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const App=()=>{

  // const [search,searchfunction]=useState([]);
  const [inputkey,inputkeyfunction]=useState([]);

  // const [searchoutput,searchoutputfunction]=useState([]);

  

  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all").then(result=>{
      inputkeyfunction(result.data)
    }

    )
  },[])

  const changefunction=(event)=>{
    axios.get("https://restcountries.eu/rest/v2/name/"+event.target.value).then(results=>{
      inputkeyfunction(results.data)

    })
  }

  
   return (
     <div style={{backgroundImage:"url(https://wetlandsinstitute.org/wp-content/uploads/2016/04/808483-free-blue-background.jpg)"}}>
       <center>
       <p  className="badge badge-primary text-wrap" style={{width:"800px" ,height:"50px",fontSize:"30px"}}>COUNTRY API</p>
       </center>   
       <input type="text" id="input" className="form-control"  onChange={changefunction} placeholder="Enter countries that you want to search"></input>
       <table className="table  table-bordered ">
         <thead className="thead-light">
           <th>ID</th>
           <th>NAME</th>
           <th>REGION</th>
           <th>POPULATION</th>
           <th>IMAGE</th>
         </thead>
          <tbody>
            {
            inputkey.map((i,id)=>{
              return (<tr  key={id}>
                <td>{id+1}</td>
                <td>{i.name}</td>
                <td>{i.region}</td>
                <td>{i.population}</td>
                <td><img  style={{height:"40px", width:"80px"}}src={i.flag}></img></td>
                </tr>)
              
            })
         }
          </tbody>
       </table>
       
       
       
       
       
       
       
       
         
         

       
     </div>
   )
}
export default App;
import React from 'react';
import SideCompo from './SideCompo';

function fun1(ele) {
      document.getElementById("compo").innerHTML = ele;
  }

const Button = ({ buttons }) => {
  return (
    <div style={{ display: "flex",backgroundColor:"black", width:"100%",height:"100%" }}>
      <div className='btn-con' style={{width:"50%",height:"100%"}}>
        {
          buttons.map((ele) => (
            <div key={ele}>
              
              <button 
                className='btn' 
                style={{ marginBottom: "20px" }} 
                onClick={() => fun1(ele)}
              >
                {ele}
              </button><br />
            </div>
          ))
        }
      </div>
      <div  style={{width:"50%",height:"100%" }}>
        <SideCompo />
      </div>
    </div>
  );
}

export default Button;




// import React from 'react'

// function fun(ele){
//     document.getElementById("compo").innerHtml=ele
//                 }

// const Button = ({buttons}) => {
//    // let [data,setData]=useState("");

//   return (
//     <div style={{display:"flex"}}>
//     <div className='btn-con'>
//         {
//             buttons.map((ele)=>(<div>
//       <button className='btn' style={{marginBottom:"20px"}} onClick={()=>{fun(ele)}}>{ele}</button><br />
//       </div> )) }
//     </div>
//     <div id='compo' style={{backgroundColor:"black",color:"white"}}>
      
//     </div>
//     </div>
//   )
// }

// export default Button

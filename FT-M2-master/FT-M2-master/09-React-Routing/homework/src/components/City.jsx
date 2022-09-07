import React from "react";
import {useParams} from "react-router-dom";
// class City extends React.Component{
  // constructor cuando quiero definir un estado
  // constructor(props){
    //super(props)
//this.state={}
  //}  
//     render (){
//         return(
//             <div>
//                 holiiis 
//             </div>
//         )
//     }
// }

function City({cityId}){
  // let params = useParams();
    return(

        <div> holaa soy una city  {cityId}  </div>
    )
}
export default City
import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function AddDeleteEdit() {
  const [donor, setDonor] = useState([]);
  const [message, setmessage] = useState("");

  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        console.log(result);
        debugger;
        setDonor(result);
      }
    };
    helper.open("GET", "http://192.168.165.239:5000/ViewMembers");
    helper.send();
  }, []);
  useEffect(() => {
    if (message != "") {
      if (message == "Record Removed Successfully!") {
        //Refresh the set of employees
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
          if (helper.readyState == 4 && helper.status == 200) {
            var result = JSON.parse(helper.responseText);
            setDonor(result);
          }
        };
        helper.open("GET", "http://192.168.165.239:5000/ViewMembers");
        helper.send();
      }
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }
  }, [message]);

  const removeRecord = (No) => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        if (result.affectedRows != undefined) {
          if (result.affectedRows > 0) {
            // debugger;
            setmessage("Record Removed Successfully!");
          } else {
            setmessage("We could not remove the record.!");
          }
        } else {
          setmessage("Something went wrong! Try Again!");
        }
      }
    };
    helper.open("DELETE", "http://192.168.165.239:5000/ViewMembers" + No);
    helper.send();
  };

  return (
    <>
      <h4>Please click on Display</h4>
    </>
    //         <div>
    //             <span style={{color: "orange"}}>{message}</span>
    //               <div  className="table-responsive marginset">

    //         <center>
    //             <h5><u>Add/Delete/Edit</u></h5>
    //         <table className="table">
    //          <thead>
    //         <tr>
    //           <th scope="col">SNo.</th>
    //           <th scope="col">Book Name</th>
    //           <th scope="col">Book Author</th>
    //           {/* <th scope="col">Password</th> */}
    //           <th scope="col">Book Img</th>
    //           <th scope="col">Add/Delete/Edit</th>
    //     </tr>
    //   </thead>
    //             <tbody>
    //                 {
    //                     // return
    //                     // <td></td>
    //                     //     <td>{don.name}</td>
    //                      //   <td>{don.email}</td>
    //                      //    <td>{don.password}</td>
    //                     //   <td>{don.phone}</td>
    //                     // donor.map((don)=>{
    //                     //     return<tr key={don.mid}>
    //                     //         <td>{don.mid}</td>
    //                     //         <td>{don.name}</td>
    //                     //         <td>{don.email}</td>
    //                     //         <td>{don.password}</td>
    //                     //         <td>{don.phone}</td>
    //                     //         <td>
    //                     //             <button className="btn btn-danger" onClick={()=>{removeRecord(don.id);}}>Delete</button>
    //                     //         </td>
    //                     //     </tr>
    //                     // })
    //                 }
    //             </tbody>
    //         </table>
    //         </center>
    //        </div>

    //         </div>
  );
}
export default AddDeleteEdit;

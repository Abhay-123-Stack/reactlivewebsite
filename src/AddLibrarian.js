import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function AddLibrarian()
{
    const [donation,setDonation]=useState([]);
    const [message, setmessage] = useState("");
    const [value ,setValues] = useState("");

    useEffect(()=>{

        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200)
            {
             
                var result=JSON.parse(helper.responseText);
                console.log(result);
                debugger;
                setDonation(result);
            }
        };
        helper.open("GET","http://localhost:9999/donation");
        helper.send();


    },[])
    useEffect(()=>{
        if(message!="")
        {
            if(message == "Record Removed Successfully!")
            {
                //Refresh the set of employees
                var helper = new XMLHttpRequest();
                helper.onreadystatechange = ()=>{
                    if(helper.readyState == 4 && helper.status == 200)
                    {
                        var result = JSON.parse(helper.responseText);
                        setDonation(result);
                    }
                };
                helper.open("GET","http://localhost:9999/donation");
                helper.send();
            }
            setTimeout(() => 
            {
                setmessage("");
            }, 2000);
        }
    },[message])

    const removeRecord =(No)=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>
                {
                    if(helper.readyState == 4 && helper.status == 200)
                    {
                        var result = JSON.parse(helper.responseText);
                        if(result.affectedRows!=undefined)
                        {
                            if(result.affectedRows > 0)
                            {
                               // debugger;
                               setmessage("Record Removed Successfully!");
                            }
                            else
                            {
                               setmessage("We could not remove the record.!")
                            }
                        }
                        else
                        {
                            setmessage("Something went wrong! Try Again!"); 
                        }
                    }
                };
        helper.open("DELETE","http://localhost:9999/managedonation/" + No);
        helper.send();
    }

      const addStock =(No)=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>
                {
                    if(helper.readyState == 4 && helper.status == 200)
                    {
                        var result = JSON.parse(helper.responseText);
                        
                        if(result.affectedRows!=undefined)
                        {
                            if(result.affectedRows > 0)
                            {
                               // debugger;
                               setmessage("Record Added Successfully!");
                            }
                            else
                            {
                               setmessage("We could not Added record.!")
                            }
                        }
                        else
                        {
                            setmessage("Something went wrong! Try Again!"); 
                        }
                    }
                };
        helper.open("PUT","http://localhost:9999/managedonation/" + No);
        helper.send();
    }

    return(
        <div>
            <span style={{color: "orange"}}>{message}</span>
              <div  className="table-responsive marginset">
              
        <center>
            <h5><u>Add Librarian</u></h5>
        <table className="table">
        
        <thead>
       <tr>
         <th scope="col">SNo</th>
         <th scope="col">Name</th>{/* <th scope="col">Donation ID</th> */}
         <th scope="col">Email</th>
         {/* <th scope="col">Donation Name</th>
         <th scope="col">Mobile No</th>
         <th scope="col">Blood Group</th>
         <th scope="col">Units(in ml)</th>
         <th scope="col">Disease</th>
         <th scope="col">Status</th>
         <th scope="col">Action</th> */}
         <th scope="col">Contact</th>
         <th scope="col">Created At</th>
   </tr>
 </thead>
           <tbody>
               {
                   donation.map((don)=>{
                       return<tr key={don.SNo}>
                           <td>{don.SNo}</td>
                           <td>{don.donor_id}</td>
                           <td>{don.name}</td>
                           <td>{don.phone}</td>
                           <td>{don.blood_group}</td>
                           <td>{don.no_units}</td>
                           <td>{don.disease}</td>
                           <td>{don.status}</td>
                           <td>
                               <button className="btn btn-primary" onClick={()=>{addStock(don.SNo)}}>Approve</button>
                               <button className="btn btn-danger" onClick={()=>{removeRecord(don.SNo);}}>Reject</button>
                           </td>
                       </tr>
                   })
               }
           </tbody>
       </table>
        </center>
       </div>

        </div>
    );

}
export default AddLibrarian;
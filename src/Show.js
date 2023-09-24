import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function Show()
{
    const [request,setRequest]=useState([]);
    const [message, setmessage] = useState("");

    useEffect(()=>{

        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState==4 && helper.status==200)
            {
             
                var result=JSON.parse(helper.responseText);
                console.log(result);
                debugger;
                setRequest(result);
            }
        };
        helper.open("GET","http://localhost:9999/requests");
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
                        setRequest(result);
                    }
                };
                helper.open("GET","http://localhost:9999/requests");
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
        helper.open("DELETE","http://localhost:9999/managerequest/" + No);
        helper.send();
    }
   

    return(
        <div>
            <span style={{color: "orange"}}>{message}</span>
              <div  className="table-responsive marginset">
        
        <center>
            <h5><u>Show</u></h5>
        <table className="table">
         <thead>
        <tr>
          {/* <th scope="col">SNo</th>
          <th scope="col">Request ID</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Mobile No</th>
          <th scope="col">Blood Group</th>
          <th scope="col">Units(in ml)</th>
          <th scope="col">Reason</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th> */}
    </tr>
  </thead>
            <tbody>
                {
                    request.map((req)=>{
                        return<tr key={req.SNo}>
                            <td>{req.SNo}</td>
                            <td>{req.patients_id}</td>
                            <td>{req.name}</td>
                            <td>{req.phone}</td>
                            <td>{req.blood_group}</td>
                            <td>{req.no_units}</td>
                            <td>{req.disease}</td>
                            <td>{req.status}</td>
                            <td>
                                <button className="btn btn-primary" >Approve</button>
                                <button className="btn btn-danger" onClick={()=>{removeRecord(req.SNo);}}>Reject</button>
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
export default Show;
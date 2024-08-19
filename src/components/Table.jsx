import "./styling.css";

const activeStatus = (status) => {
  if (status === true) return "active";
  if (status === false) return "inactive";
  return '';
};

const Table = ({ sat }) => {
  //alert(sat[0].type);
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
    
        {sat.map((data, id) => (

         
          
          <tr key = {id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{activeStatus(data.operational)}</td>
          </tr>
        )
     ) }
     </tbody>
   </table>
  );
}

export default Table;
import React, { useState } from "react";


function App() {
  const [data, setData]=useState([]);
  React.useEffect(()=> {
  const fetchLocation = async() => {
      await fetch("https://fakestoreapi.com/products")
      .then((response)=> response.json())
      .then((data)=>{
        setData(data);
        console.log(data);
      });
    };
    fetchLocation();
  }, []);

  if(!data.length) return <div>Loading...</div>
  return(
    <div className="App">
    
  <table>
  <tr>
    <th>ID</th>
    <th>CATEGORY</th>
    <th>DESCRIPTION</th>
    <th>IMAGE</th>
    <th>PRICE</th>
    <th>RATING RATE</th>
    <th>RATING COUNT</th>
    <th>TITLE</th>
  </tr>
  {data.map((item) => {
     return( 
  <tr>
    <td>{item.id}</td>
    <td>{item.category}</td>
    <td>{item.description}</td>
    <td>{<img src={item.image} style={{width:"50px"}}></img>}</td>
    <td>{item.price}</td>
    <td>{item.rating.rate}</td>
    <td>{item.rating.count}</td>
    <td>{item.title}</td>
  </tr>
  )})}
</table>
     
    </div>

  );

}

export default App;
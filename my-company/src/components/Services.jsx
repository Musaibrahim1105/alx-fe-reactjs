import Navbar from "./Navbar";


function Services() {

    return (
      <div style={{ padding: '20px' }}>
        <Navbar/>
        <h1 style={{backgroundColor:"blue", color:"white"}}>Our Services</h1>
        <ul>
          <li style={{color: 'blue',  fonWheight: 'bold'}}>Technology Consulting</li>
          <li>Market Analysis</li>
          <li>Product Development</li>
        </ul>
      </div>
    );
  }

  export default Services;
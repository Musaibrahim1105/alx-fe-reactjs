import Navbar from "./Navbar";


function Home() {
    return (
      <div style={{ padding: '20px', textAlign:"center" }}>
        <h1 style={{backgroundColor:"blue", color:"white"}}>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
        <Navbar />
      </div>
    );
  }

  export default Home;
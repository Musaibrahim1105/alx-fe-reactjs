import Navbar from "./Navbar";

function About() {
    return (
      <div style={{ padding: '20px' }}>
        <Navbar />
        <h1 style={{backgroundColor:"blue", color:"white"}}>About Us</h1>
        <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
      </div>
    );
  }

  export default About;
import Header from "../components/header";
import photo2 from "../images/image.png"
function Home(){
    return(
        <div className="home">
            <Header/>
            <div className="home container">
            <div className="mainhome">
            <div className="navhome">  
        <img src={photo2} className="landingimg" alt="" />
        <h1>Weekly Report</h1>
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2> Favorite Films</h2>
            <ul>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ul>
            <a href="https://www.meta.com/user/123">My Meta Profile</a>
      </div>
      <div className="sectionhome"> 
         <img src="https://greatpeopleinside.com/wp-content/uploads/2017/08/workplace-diversity-1030x636.jpg" alt="" className="landingimg" />
         <img src="https://i.pinimg.com/564x/81/fc/2a/81fc2a8111caaaa93759c44695635374.jpg" className="landingimg" alt="" />
      </div>
      <div className="asidehome">
      <h1> Menu </h1>
      <ul>
            <li><a href="/Home">Dashboard</a></li>
            <li><a href="/Photo Album">Photo Albums</a></li>
            <li><a href="/Friend List">Friends List</a></li>
            <li><a href="/Direct Messages">Messages</a></li>
            <li><a href="/Settings">Settings</a></li>
            </ul>
        <h3> About us </h3>
        <h5> Welcome to our social media app! At CONNECT, we believe in fostering genuine connections and empowering our users to express themselves freely. Our mission is to create a safe, inclusive, and vibrant online community where individuals from diverse backgrounds can connect. Together, let's build a brighter and more connected world. #ConnectInspireThrive</h5>

        <h3> Contact Us </h3>
        <p>2525 North High Ave, San Jose, CA 96593</p>
        <p>Need Help? E-mail Us at CONNECT@social.org or Call US at 889-569-8745</p>
    
      </div>
    </div>
     </div>
            </div>
    )
}
export default Home;


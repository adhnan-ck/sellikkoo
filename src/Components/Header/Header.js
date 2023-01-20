import React,{useContext,useState} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext,FirebaseContext} from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

 const handleSellButtonClick = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            history.push('/create');
        } else {
            alert("Please log in to access the sell page.");
        }
    });
}
const handleClick =() => {
  setIsLoggedIn(false);
}
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          {/* <OlxLogo></OlxLogo> */}
          <h3 className="logo"><span>SELL</span><span class="hover-change">IKKO</span></h3>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language" onClick={()=>{
          history.push('/About')
        }}>
          <span> About</span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          { user?
          <span className="username" onClick={handleClick}> {user.displayName}</span>:
          <span onClick={()=>{
            history.push('/login')
          }}>login</span>
          }
          <hr />
          <div className="logout">
        {user && <span onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }} >Logout</span>}
        </div>
          </div>
         
        <div className="sellMenu"
         onClick={handleSellButtonClick}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

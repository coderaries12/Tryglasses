import { useHistory} from "react-router-dom"
import { useSelector } from "react-redux"

import "./PagenotFound.css"


function PagenotFound() {
  const user = useSelector(state => state.session.user)
  const history = useHistory()

    return (
        <div className="noRoute_wrapper">
        <h1 className="noRoute_header">Page Not Found </h1>
        <div className="oops">
        <span>Oops! We can't seem to find the page you're looking for. Please check if you typed the URL correctly, or visit these&nbsp;pages:</span>
        </div>
            
            
         <div style={{display:"flex",margin:"10px 5rem 0", width:"100%", gap:"1rem"}}>
								<div><a className="down-button" style={{backgroundColor:"white",color:"#23aae2",border:"3px solid #6cf", borderRadius:"0px"}} to="/eyeglasses" href="eyeglasses">Shop Eyeglasses</a></div>
								<div><a className="down-button" style={{backgroundColor:"white",color:"#23aae2",border:"3px solid #6cf", borderRadius:"0px"}} to="/sunglasses" href="sunglasses">Shop Sunglasses</a></div>
		</div>  
        </div>
    )
}


export default PagenotFound;

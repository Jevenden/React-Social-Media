import "./navBar.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom"
import SearchOutlined from "@mui/icons-material/SearchOutlined";

const NavBar = () => {
	return (
		<div className="navBar">
			<div className="left">
			<Link to="/" style={{textDecoration:"none"}}>
			<span>Less Evil Social</span>
			</Link>
			<HomeOutlinedIcon />
			<DarkModeOutlinedIcon />
			<GridViewOutlinedIcon />
			<div className="search">
				<SearchOutlinedIcon />
				<input type="text" placeholder="Search..." />
			</div>
			</div>
			<div className="right">
				<PersonOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className="user">
					{/* <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
					<span>Itsa me; Mario</span>
				</div>
			</div>
		</div>
	)
}

export default NavBar
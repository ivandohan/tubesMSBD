import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import profPict1 from "../../images/comUser1.jpg"
import coverPict1 from "../../images/cover1.jpg"
import Posts from "../../components/posts/Posts";

const Profile = () => {
    return (
        <div className='profile'>
            <div className="images">
                <img src={coverPict1} alt="" className="cover" />
                <img src={profPict1} alt="" className="profPict" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="#">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="#">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="#">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="#">
                            <LinkedInIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Sam D. Ohann</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>IDN</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                dohann.dev
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}

export default Profile
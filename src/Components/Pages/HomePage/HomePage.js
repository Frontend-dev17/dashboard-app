import Header from "../Header/Header"
import ProgressBar from "../ProgressBar/ProgressBar"
import Sidebar from "../Sidebar/Sidebar"
import "./HomePage.scss"
import CircularProgressBar from './../CircularProgressBar/CircularProgressBar';
import ActiveMembers from "../ActiveMembers/ActiveMembers";

function HomePage() {
    return (
        <div className="homepage-container">
            <div><Sidebar /></div>
            <div className="rightside-container">
                <div><Header /></div>
                <hr className="hr-style" />

                <div className="remove-icon">&minus;</div>
                <div className="progress-bars-section">
                    <div><CircularProgressBar /></div>
                    <div><ProgressBar /></div>
                </div>
                <div>
                    <ActiveMembers />
                </div>
            </div>
        </div>
    )
}

export default HomePage
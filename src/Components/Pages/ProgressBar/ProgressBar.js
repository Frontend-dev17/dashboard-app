
import './ProgressBar.scss'

const ProgressBar = () => {


    return (
        <div className='progressbars-container'>
            <div className='title'>Stats Overview</div>
            <div className='bar-section'>
                <div className='status'>Active</div>
                <div className="progress-bar-container">
                    <div className="progress-bar">
                        <div className="progress" style={{ width: "63%" }}>
                        </div>
                    </div>
                </div>
                <div className='percentage'>63%</div>
            </div>

            <div className='bar-section-1'>
                <div className='status'>Inactive</div>
                <div className="progress-bar-container">
                    <div className="progress-bar">
                        <div className="progress one" style={{ width: "80%" }}>
                        </div>
                    </div>
                </div>
                <div className='percentage'>80%</div>
            </div>
        </div>
    );
};

export default ProgressBar;

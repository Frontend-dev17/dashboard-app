import "./CircularProgressBar.scss";
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
    const Chart1Data = {
        labels: [],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ['#5F27CD', 'white'],
                borderWidth: 12,
            },
        ],
    };
    const Chart2Data = {
        labels: [],
        datasets: [
            {
                data: [66, 34],
                backgroundColor: ['rgba(22, 192, 152, 0.38)', 'white'],
                borderWidth: 12,

            },
        ],
    };
    const Chart3Data = {
        labels: [],
        datasets: [
            {
                data: [90, 10],
                backgroundColor: ['#FF6B6B', 'white'],
                borderWidth: 12,



            },
        ],
    };
    const Chart4Data = {
        labels: [],
        datasets: [
            {
                data: [30, 70],
                backgroundColor: ['#FFC5C5', 'white'],
                borderWidth: 12,
            },
        ],
    };

    const options = {
        responsive: true,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
        hover: {
            mode: null,
        },
        plugins: {
            datalabels: {
                display: false,
            },
        },
    }

    return (
        <div className="chart-container-section">
            <div className="chart-title">All Customers</div>
            <div className='chart-container'>
                <div style={{ width: '90px', height: '90px' }} className="chart-section">
                    <div className="percentage">80<span>%</span></div>
                    <Doughnut data={Chart1Data} options={options} />
                    <div className="sub-title">Current Customers</div>
                </div >
                <div style={{ width: '90px', height: '90px' }} className="chart-section">
                    <div className="percentage-one">66<span>%</span></div>
                    <Doughnut data={Chart2Data} options={options} />
                    <div className="sub-title">New Customers</div>
                </div>
                <div style={{ width: '90px', height: '90px' }} className="chart-section">
                    <div className="percentage-two">90<span>%</span></div>
                    <Doughnut data={Chart3Data} options={options} />
                    <div className="sub-title">Target Customers</div>
                </div>
                <div style={{ width: '90px', height: '90px' }} className="chart-section">
                    <div className="percentage-three">30<span>%</span></div>
                    <Doughnut data={Chart4Data} options={options} />
                    <div className="sub-title">Retarget Customers</div>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;

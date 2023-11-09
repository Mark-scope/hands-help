import {Line} from 'react-chartjs-2'
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const labels = [
    "Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May", 
    "Jun", 
    "Aug", 
    "Sep", 
    "Oct", 
    "Nov", 
    "Dec" ];

export function Chart() {
    const data = {
        labels,
        datasets: [
        {
            label: 'Amount of Money you spent',
            data: [8, 7 , 13, 6, 9, 4, 1, 1, 1, 1, 17  ],
            borderColor:   `#f26c6d`,
            backgroundColor: 'rgba(225, 99, 132, 0.5)'
        }]
    }
    const options = {
        responsive: true,
        tension: 0.3,
        plugins: {
            legend: {
                position:'top',
            },
            title: {
                display: true,
                text: 'Your Expenses'
            }
        }
    };
    
    return(
        <div>
            <Line data={data} options={options}></Line>
        </div>
    )
}

// import the next.js framework for easy deploying later
import Head from 'next/head'
import Chart from 'chart.js/auto'

// import the react views, since chart.js is purely a javascript library
import {
  Bar, 
  Line, 
  Doughnut
} from "react-chartjs-2"

export default function Home() {
  //For temperature bar chart
  const temp_data = {
    labels: ["E7 - SYDE Workshop", "E7 - Silent Study", "E7 - 2nd floor by windows", "E7 - 2nd Floor Computer Lab", "SLC - Great Hall", "SLC - 3rd Floor", "QNC - 1st Floor", "DP - 3rd Floor", "RCH", "MC - Study Room"],
    datasets: [
      {
        label: 'Real temperature',
        data: [28.71, 24.5, 24.5, 24.5, 27, 24.8, 26.68, 27.53, 25.4, 27.87],
        backgroundColor: "rgba(182,126,239,1)",
      }, 
      {
        label: 'Apparent (i.e. “feels like”) temperature',
        data: [28.4, 24, 24, 24, 27.2, 25, 26.6, 27.7, 25, 28.7],
        backgroundColor: "rgba(143,239,153,1)"
      } 
    ]
  };

  const temp_options = {
    indexAxis: 'y', 
    scaleShowValues: true,
    scales: {
      xAxes: [{
        scaleLabel: {
            display: true,
            labelString: 'Learning Spaces',
        },
        ticks: {
            beginAtZero: true
        }
      }],
      yAxes: [{
        scaleLabel: {
            display: true,
            labelString: 'Temperature (ºC)',
        },
        stacked: false,
        ticks: {
            autoSkip: false,
            beginAtZero: true,
            stepSize: 5,
        }
      }]
    },
  };

  // For donut chart of complaints
  const doughnut_data = {
    labels: [
      "Complaints about E7 - SYDE Workshop",
      "Complaints about MC - Study Room",
    ],
    datasets: [{
      data: [2, 2],
      backgroundColor: [
          "#EF8F8F",
          "#7CC0FF",
      ],
      hoverBackgroundColor: [
          "#DC5555",
          "#3E92DF",
      ]
    }]
  };
  const doughnut_options = {
    elements: {
      center: {
        text: '4 Complaints',
        color: '#000000', 
        fontStyle: 'Arial', 
        sidePadding: 20, 
        minFontSize: 10, 
        lineHeight: 10 
      }
    }
  };

  // For histogram (lighting distribution)
  const histogram_data = {
    labels: ["Normal", "Dim", "Dark"],
    datasets: [
    {
      label: 'Learning spaces',
      data: [5, 3, 2],
      backgroundColor: "#9B9A9A"
    }]
  }
  const histogram_options = {
    indexAxis: 'y', 
    scaleShowValues: true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Lighting condition',
        },
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of learning spaces',
          },
          stacked: false,
          ticks: {
            autoSkip: false,
            beginAtZero: true,
            stepSize: 1,
          }
      }]
    },
  }
  // For specific Lux value comparisons
  const lux_data = {
    labels: ["E7 - SYDE Workshop", "E7 - Silent Study", "E7 - 2nd floor by windows", "E7 - 2nd Floor Computer Lab", "SLC - Great Hall", "SLC - 3rd Floor", "QNC - 1st Floor", "DP - 3rd Floor", "RCH", "MC - Study Room"],
    datasets: [
        {
            label: 'Lux values',
            data: [454, 472, 560, 387, 163, 126, 384, 364, 468, 578],
            backgroundColor: "#B67EEF"
    }]
  };
  const lux_options = {
    indexAxis: 'y', 
    scaleShowValues: true,
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Learning Spaces',
            },
            ticks: {
                beginAtZero: true
            }
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Lux (lx)',
            },
            stacked: false,
            ticks: {
                autoSkip: false,
                beginAtZero: true,
                stepSize: 50,
            }
        }]
    },
  };


  // return the HTML structure with react components
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Effects of Humidity and Light Intensity on Student Well-Being</h1>
        <p>The following results were obtained using a prototype humidity and temperature sensor. A summary of the final conclusions can be found at the bottom of the page as to which learning spaces best suit SYDE students’ preferences with respect to humidity and temperature and subsequently, helps improve their performance in school and overall health and wellness.</p><b></b>
        <p>The raw data was collected using our prototype which we modified by adding a temperature and humidity sensor. The raw data was then cleaned using Python to obtain the numbers that you see below!</p>
       
       <div className='grid'>
          <div className='charts'>
            <h3>Real vs. Apparent Temperature Across Learning Spaces</h3> 
            <Bar data={temp_data} height={300} options={temp_options} />
          </div>
          <div className='charts'>
            <h3>Learning Spaces with Complaints</h3> 
            <Doughnut data={doughnut_data} radius={50} options={doughnut_options} />
          </div>  
        </div>  

        <div className='grid'>
          <div className='charts'>
            <h3>Lighting Condition Distributions</h3> 
            <Bar data={histogram_data} height={150} options={histogram_options} />
          </div>  
          <div className='charts'>
            <h3>Lux Comparisons Across Learning Spaces</h3> 
            <Bar data={lux_data} height={150} options={lux_options} />
          </div>  
        </div>  
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
          margin-left: 200px;
          margin-right: 200px;
          margin-top: 40px;
        }
        
        h3 {
          text-align: center;
        }

        .grid {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 80px;
        }

        .charts {
          flex: 0 0 auto;
          margin: auto;
          width: 50%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

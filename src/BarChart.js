import { Bar } from "react-chartjs-2";
import React, { useState } from "react";
import Chart from "chart.js/auto";

const BarChart = (props) => {
  const [dataOnChart,setDataOnChart]=useState(
    [{
     labels:props.userData && props.userData.length? props.userData[0].map((item)=>item.PRODUCTLINE):[],
     datasets:[{
       label:'Product line',
       data:props.userData && props.userData.length?props.userData[0].map((item)=>item.SALES):[],
     }]

   }])
  return <Bar data={dataOnChart} />;
};
export default BarChart;

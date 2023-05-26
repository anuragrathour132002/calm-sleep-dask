import React from "react";
import "./Dashboard.css";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  // eslint-disable-next-line
  defs, linearGradient,
} from "recharts";

function Dashboard({ image, unique_plays, total_plays, completion_rate, title }) {
  const data = [
    {
      type: "Unique Plays",
      plays: unique_plays,
    },
    {
      type: "Total Plays",
      plays: total_plays,
    },
  ];

  // BG Color #3BABEF

  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <h1>{title}</h1>
        <img src={image} alt="" />
      </div>

      <div className="dashboard__right">
        <div className="dashboard__barChart">
          <h4>Plays</h4>
          <BarChart
            width={500}
            height={200}
            data={data}
            barGap={20}
            barCategoryGap={20}
          >
            <defs>
              <linearGradient id="color_type" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8508FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3BABEF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="type" stroke="#fff"></XAxis>
            <YAxis stroke="#fff"></YAxis>
            <Bar
              dataKey="plays"
              fill="url(#color_type)"
              barSize={10}
              radius={[5, 5, 0, 0]}
            ></Bar>
          </BarChart>
        </div>

        {/* Progress Bar */}

        <div className="dashboard__progressBar">
          <h4>Completion Rate</h4>
          <div class="progressBar__bar">
            <div className="progress" style={{width: `${completion_rate}%`}}><h4>{completion_rate}%</h4></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

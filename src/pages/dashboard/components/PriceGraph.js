/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 26px;
  padding: 0 20px 20px 20px;

  .title {
    font-family: Poppins400;
    font-size: 16px;
    color: #8a8a8a;
    padding: 20px 0 0 25px;
    margin-bottom: 30px;
  }
`;

export const options = {
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: (value, index, ticks) =>
          `$${value >= 1000 ? `${value / 1000}k` : value}`,
      },
    },
  },
  responsive: true,
  plugins: {
    filler: {
      propagate: false,
    },
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
};


const PriceGraph = () => {
  const { t } = useTranslation();

  const labels = [
    t('m1'),
    t('m2'),
    t('m3'),
    t('m4'),
    t('m5'),
    t('m6'),
    t('m7'),
    t('m8'),
    t('m9'),
    t('m10'),
    t('m11'),
    t('m12'),
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: "start",
        label: t('token_price_graph'),
        data: [199, 250, 400, 1000, 3000, 400, 100, 700, 1900, 2000, 2600, 3000],
        borderColor: "rgba(240, 152, 25, 1)",
        backgroundColor: "rgba(254, 221, 174, 0.3)",
      },
    ],
  };

  return (
    <Container>
      <p className="title">{t('token_price_graph')}</p>
      <div>
        <Line options={options} data={data} />
      </div>
    </Container>
  );
};

export default PriceGraph;

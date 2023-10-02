import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { СhartContainer } from './StatisticsСhart.styled';

const StatisticsСhart = () => {
  useEffect(() => {
    Chart.register(ChartDataLabels);
    const canvas = document.getElementById('myChart');

    const existingChart = Chart.getChart(canvas); // Отримуємо попередній графік

    if (existingChart) {
      existingChart.destroy(); // Видаляємо попередній графік, якщо він існує
    }

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['to-do', 'in-progress', 'done'],

        datasets: [
          {
            label: '# of Votes',
            data: [14, 4, 24],
            lab: [`${30}%`, `${50}%`, `${20}%`],
            backgroundColor: '#FFD2DD',
          },
          {
            label: '# of Votes',
            data: [18, 14, 13],
            lab: [`${35}%`, `${55}%`, `${25}%`],
            backgroundColor: '#3E85F3',
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        parsing: {
          xAxisKey: 'id',
          yAxisKey: 'value',
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: 'bleak',
            anchor: 'end',
            align: 'top',
            offset: 0,
            formatter: function (value, context) {
              return context.dataset.lab[context.dataIndex];
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <СhartContainer>
      <canvas id="myChart"></canvas>
    </СhartContainer>
  );
};

export default StatisticsСhart;

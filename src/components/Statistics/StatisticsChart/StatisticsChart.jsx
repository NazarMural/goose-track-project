import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useDispatch } from 'react-redux';
import { fetchTasksOperation } from 'redux/tasks/operations';
import calculationTasksCurrentDay from 'helpers/calculationTask';
import moment from 'moment';

import {
  СhartContainer,
  StatisticsContainer,
  LegendContainer,
  DayLegend,
  MonthLegend,
  ChartTasks,
} from './StatisticsСhart.styled';

const StatisticsСhart = () => {
  const dispatch = useDispatch();
  const dataDay = moment().format('YYYY-MM-DD');

  const [currentDate] = useState(dataDay);
  const [sortTasks, setSortTasks] = useState({});

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(fetchTasksOperation());

      const temp = calculationTasksCurrentDay(currentDate, payload);
      setSortTasks(temp);
    })();
  }, [dispatch, currentDate]);

  useEffect(() => {
    Chart.register(ChartDataLabels);
    const canvas = document.getElementById('myChart');

    const existingChart = Chart.getChart(canvas);

    if (existingChart) {
      existingChart.destroy();
    }

    const data = sortTasks;

    console.log(data);
    if (data && data.tasksDay && data.tasksMonth) {
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels: ['to-do', 'in-progress', 'done'],

          datasets: [
            {
              label: '# of Votes',
              data: data.tasksDay,
              lab: data.percentageTasksDay,
              backgroundColor: '#FFD2DD',
            },
            {
              label: '# of Votes',
              data: data.tasksMonth,
              lab: data.percentageTasksMonth,
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
              beginAtZero: false, // Зміниць на false, щоб шкала не починалася з нуля
              suggestedMin: 0, // Мінімальне значення на осі Y
              suggestedMax:
                Math.max(...data.tasksDay, ...data.tasksMonth) + 0.5, // Максимальне значення на осі Y + 1 таск
            },
          },
        },
      });
    }
  }, [sortTasks]);

  return (
    <StatisticsContainer>
      <LegendContainer>
        <DayLegend>By Day</DayLegend>
        <MonthLegend>By Month</MonthLegend>
      </LegendContainer>
      <СhartContainer>
        <ChartTasks>Tasks</ChartTasks>
        <canvas id="myChart"></canvas>
      </СhartContainer>
    </StatisticsContainer>
  );
};

export default StatisticsСhart;

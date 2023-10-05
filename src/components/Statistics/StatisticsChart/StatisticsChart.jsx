import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useDispatch } from 'react-redux';
import { fetchTasksOperation } from 'redux/tasks/operations';
import calculationTasksCurrentDay from 'helpers/calculationTask';
import moment from 'moment';

import {
  DatePickerStyle,
  СhartBox,
  CanvasChart,
  StatisticsContainer,
  LegendContainer,
  DayLegend,
  MonthLegend,
  ChartTasks,
  ChartContainer,
} from './StatisticsСhart.styled';

const StatisticsСhart = () => {
  const dispatch = useDispatch();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [sortTasks, setSortTasks] = useState({});

  const goToNextDay = () => {
    const newDate = moment(currentDate).add(1, 'day').toDate();
    setCurrentDate(newDate);
  };

  const goToPreviousDay = () => {
    const newDate = moment(currentDate).subtract(1, 'day').toDate();
    setCurrentDate(newDate);
  };

  useEffect(() => {
    (async () => {
      const month = moment(currentDate).format('YYYY-MM');
      const day = moment(currentDate).format('YYYY-MM-DD');
      console.log(currentDate);

      const { payload } = await dispatch(fetchTasksOperation(month));
      const temp = calculationTasksCurrentDay(day, payload);

      setSortTasks(temp);
    })();
  }, [dispatch, currentDate]);

  useEffect(() => {
    Chart.register(ChartDataLabels);
    const ctx = document.getElementById('myChart').getContext('2d');

    const gradientBgDay = ctx.createLinearGradient(0, 0, 0, 350);
    const gradientBgMonth = ctx.createLinearGradient(0, 0, 0, 350);
    gradientBgDay.addColorStop(0, 'rgba(255, 210, 221, 0)');
    gradientBgDay.addColorStop(1, 'rgba(255, 210, 221, 1)');
    gradientBgMonth.addColorStop(0, 'rgba(62, 133, 243, 0)');
    gradientBgMonth.addColorStop(1, 'rgba(62, 133, 243, 1)');

    const existingChart = Chart.getChart(ctx);

    if (existingChart) {
      existingChart.destroy();
    }

    const data = sortTasks;

    console.log(data);
    if (data && data.tasksDay && data.tasksMonth) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['to-do', 'in-progress', 'done'],

          datasets: [
            {
              label: '# of Votes',
              data: data.tasksDay,
              lab: data.percentageTasksDay,
              backgroundColor: gradientBgDay,
              borderRadius: 5,
              barPercentage: 0.6,
              categoryPercentage: 0.35,
            },
            {
              label: '# of Votes',
              data: data.tasksMonth,
              lab: data.percentageTasksMonth,
              backgroundColor: gradientBgMonth,
              borderRadius: 5,
              barPercentage: 0.6,
              categoryPercentage: 0.35,
            },
          ],
        },
        plugins: [ChartDataLabels],
        options: {
          maintainAspectRatio: false, //автоматично підлаштовує розміри графіка
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
      <DatePickerStyle
        selected={currentDate}
        onChange={date => setCurrentDate(date)}
      />
      <button onClick={goToPreviousDay}>Попередній день</button>
      <button onClick={goToNextDay}>Наступний день</button>
      <LegendContainer>
        <DayLegend>By Day</DayLegend>
        <MonthLegend>By Month</MonthLegend>
      </LegendContainer>
      <ChartContainer>
        <ChartTasks>Tasks</ChartTasks>
        <СhartBox>
          <CanvasChart id="myChart"></CanvasChart>
        </СhartBox>
      </ChartContainer>
    </StatisticsContainer>
  );
};

export default StatisticsСhart;

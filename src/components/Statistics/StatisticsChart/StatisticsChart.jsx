import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';
import { fetchTasksOperation } from 'redux/tasks/operations';
import calculationTasksCurrentDay from 'helpers/calculationTask';

import {
  CalendarBox,
  ButtonBox,
  DatePickerStyle,
  StatisticsContainer,
  LegendContainer,
  DayLegend,
  MonthLegend,
  ChartTasks,
  ChartContainer,
} from './StatisticsСhart.styled';

const StatisticsСhart = () => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: 'max-width: 768px' });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [sortTasks, setSortTasks] = useState({});

  useEffect(() => {
    (async () => {
      const month = moment(currentDate).format('YYYY-MM');
      const day = moment(currentDate).format('YYYY-MM-DD');

      const { payload } = await dispatch(fetchTasksOperation(month));
      const temp = calculationTasksCurrentDay(day, payload);

      setSortTasks(temp);
    })();
  }, [dispatch, currentDate]);

  const goToNextDay = () => {
    const newDate = moment(currentDate).add(1, 'day').toDate();
    setCurrentDate(newDate);
  };

  const goToPreviousDay = () => {
    const newDate = moment(currentDate).subtract(1, 'day').toDate();
    setCurrentDate(newDate);
  };

  const LabelListContent = ({ x, y, width, value }) => (
    <g transform={`translate(${x + width / 2},${y + 4})`}>
      <text
        x={2}
        y={3}
        dy={0}
        textAnchor="middle"
        fill="#343434"
        fontSize={isMobile ? 12 : 16}
        fontWeight={400}
      >
        {value}
      </text>
    </g>
  );

  const filterDates = date => {
    // Отримуємо поточний місяць та рік
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Отримуємо місяць і рік від дати
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();

    // Якщо місяць і рік дати співпадають з поточним місяцем і роком,
    // ми показуємо цю дату, інакше ми її приховуємо
    return dateMonth === currentMonth && dateYear === currentYear;
  };

  const data = sortTasks;

  return (
    <StatisticsContainer>
      <CalendarBox>
        <DatePickerStyle
          selected={currentDate}
          onChange={date => setCurrentDate(date)}
          dateFormat="dd MMMM yyyy"
          filterDate={filterDates}
        />
        <ButtonBox>
          <button onClick={goToPreviousDay}>-=</button>
          <button onClick={goToNextDay}>=-</button>
        </ButtonBox>
      </CalendarBox>
      <LegendContainer>
        <DayLegend>By Day</DayLegend>
        <MonthLegend>By Month</MonthLegend>
      </LegendContainer>
      <ChartContainer>
        <ChartTasks>Tasks</ChartTasks>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={isMobile ? 8 : 14}
            barSize={isMobile ? 22 : 27}
          >
            <CartesianGrid
              stroke="#e3f3ff"
              strokeWidth={1}
              strokeDasharray="none"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: isMobile ? 12 : 16, fill: '#343434' }}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickFormatter={value => value}
              domain={[0, 'dataMax']}
              allowDataOverflow={true}
              scale="linear"
              axisLine={false}
              tickLine={false}
              tickMargin={30}
              tick={{ fill: '#343434' }}
            />
            <Bar
              dataKey="day"
              fill="url(#gradient-day)"
              radius={[0, 0, 10, 10]}
            >
              <LabelList
                dataKey="percentageDay"
                content={<LabelListContent />}
                position="top"
                fill="#343434"
              />
            </Bar>
            <Bar
              dataKey="month"
              fill="url(#gradient-month)"
              radius={[0, 0, 10, 10]}
            >
              <LabelList
                dataKey="percentageMonth"
                content={<LabelListContent />}
                position="top"
                fill="#343434"
              />
            </Bar>
            <defs>
              <linearGradient id={'gradient-day'} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={'#FFD2DD'} stopOpacity={0} />
                <stop offset="100%" stopColor={'#FFD2DD'} stopOpacity={1} />
              </linearGradient>
              <linearGradient id={'gradient-month'} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={'#3E85F3'} stopOpacity={0} />
                <stop offset="100%" stopColor={'#3E85F3'} stopOpacity={1} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </StatisticsContainer>
  );
};

export default StatisticsСhart;

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './index.scss';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon';

const DateRangePicker = ({ 
  visible, 
  onClose, 
  onConfirm, 
  defaultValue,
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  cancelText = 'Cancel',
  confirmText = 'Confirm'
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState([null, null]);

  useEffect(() => {
    if (defaultValue && defaultValue.length === 2) {
      setSelectedRange(defaultValue);
    }
  }, [defaultValue]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);
    const days = [];

    // 填充上个月的日期
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false
      });
    }

    // 当前月的日期
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }

    // 填充下个月的日期
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }

    return days;
  };

  // 添加判断是否为开始或结束日期的函数
  const isStartDate = (date) => {
    return selectedRange[0] && date.getTime() === selectedRange[0].getTime();
  };

  const isEndDate = (date) => {
    return selectedRange[1] && date.getTime() === selectedRange[1].getTime();
  };
  
  const isDateInRange = (date) => {
    if (!selectedRange[0] || !selectedRange[1]) return false;
    return date >= selectedRange[0] && date <= selectedRange[1];
  };

  const isDateSelected = (date) => {
    return selectedRange.some(d => d && d.getTime() === date.getTime());
  };

  const isValidRange = () => {
    if (!selectedRange[0] || !selectedRange[1]) return false;
    // 确保开始日期和结束日期不是同一天
    return selectedRange[0].getTime() !== selectedRange[1].getTime();
  };

  const handleConfirm = () => {
    if (selectedRange[0] && selectedRange[1]) {
      onConfirm(selectedRange);
    }
  };

  // 添加判断是否为未来日期的函数
  const isFutureDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date > today;
  };

  // 添加判断下个月是否全部为未来的函数
  const isNextMonthDisabled = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    return isFutureDate(nextMonth);
  };

  // 修改日期点击处理函数
  const handleDateClick = (date) => {
    if (isFutureDate(date)) return; // 如果是未来日期，不允许选择
    
    if (!selectedRange[0] || (selectedRange[0] && selectedRange[1])) {
      setSelectedRange([date, null]);
    } else {
      // 如果选择的日期和开始日期相同，不做任何处理
      if (date.getTime() === selectedRange[0].getTime()) {
        return;
      }
      const range = [selectedRange[0], date].sort((a, b) => a - b);
      setSelectedRange(range);
    }
  };

  if (!visible) return null;

  return (
    <div className="date-range-picker-overlay">
      <div className="date-range-picker">
        <div className="header">
          <div className="month-year">
            {`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
          </div>
          <div className="navigation">
            <button 
              className="nav-button"
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            >
              <ChevronLeftIcon />
            </button>
            <button 
              className={`nav-button ${isNextMonthDisabled() ? 'disabled' : ''}`}
              onClick={() => !isNextMonthDisabled() && setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="weekdays">
          {weekDays.map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        <div className="days">
          {getMonthData().map((day, index) => (
            <div
              key={index}
              className={classNames('day', {
                'other-month': !day.isCurrentMonth,
                'selected': isDateSelected(day.date),
                'start-date': isStartDate(day.date),
                'end-date': isEndDate(day.date),
                'has-range': selectedRange[0] && selectedRange[1], // 添加这行
                'in-range': isDateInRange(day.date),
                'disabled': isFutureDate(day.date)
              })}
              onClick={() => handleDateClick(day.date)}
            >
              {day.date.getDate()}
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={onClose}>{cancelText}</button>
          <button 
            onClick={handleConfirm}
            className={!isValidRange() ? 'disabled' : ''}
            disabled={!isValidRange()}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
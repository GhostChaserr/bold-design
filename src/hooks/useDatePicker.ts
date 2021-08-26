import { useState } from 'react'
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS
} from 'utils/calendar.utils'

const useDatePicker = (date: Date) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
  const [currentDate, setCurrentDate] = useState<Date>(date)
  const [month, setMonth] = useState<number>(date.getMonth() + 1)
  const [year, setYear] = useState<number>(date.getFullYear())

  const getDatePickerDates = () => {
    const datePickerMonth = month || +currentDate.getMonth() + 1
    const datePickerYear = year || currentDate.getFullYear()

    return calendar(datePickerMonth, datePickerYear)
  }

  const gotoPreviousYear = (): void => setYear(year - 1)
  const goToNextYear = (): void => setYear(year + 1)

  const goToNextMonth = (): void => {
    const nextMonthYear = getNextMonth(month, year)
    setMonth(nextMonthYear.month)
    setYear(nextMonthYear.year)
  }

  const gotoPreviousMonth = (): void => {
    const previousMonthYear = getPreviousMonth(month, year)
    setMonth(previousMonthYear.month)
    setYear(previousMonthYear.year)
  }

  const handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    gotoPreviousMonth()
  }

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    goToNextMonth()
  }

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker)

  return {
    toggleDatePicker,
    currentDate,
    month,
    handleNext,
    handlePrevious,
    year,
    setCurrentDate,
    setMonth,
    setYear,
    getDatePickerDates
  }
}


export default useDatePicker
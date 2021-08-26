import React, { FC } from 'react'
import * as Styled from './DatePickerCalendarStyles'

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

import { DatePickerCalendarProps } from './DatePickerCalendarTypes'

const DatePickerCalendar: FC<DatePickerCalendarProps> = ({ month, year, handleNext, handlePrevious }) => {
  const renderMonthAndYear = (): JSX.Element => {
    const monthname = Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))]

    return (
      <Styled.StyledHeader>
        <Styled.StyledArrowLeft
          onClick={handlePrevious}
        >
          Go Backwards
        </Styled.StyledArrowLeft>
        <Styled.StyledMonthYear>
          {monthname} {year}
        </Styled.StyledMonthYear>
        <Styled.StyledArrowRight
          onClick={handlePrevious}
        >
          Go Forwards
        </Styled.StyledArrowRight>
      </Styled.StyledHeader>
    )
  }
  return (
    <>
      {renderMonthAndYear()}
    </>
  )
}

export default DatePickerCalendar
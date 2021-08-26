import { FC} from 'react'
import { DatePickerProps } from './DatePickerTypes'
import DatePickerCalendar from './DatePickerCalendar'
import DatePickerInput from './DatePickerInput'


import { StyledContainer } from './DatePickerStyles'
import { useDatePicker } from 'hooks'

const DatePicker: FC<DatePickerProps> = ({ date }) => {
  const {
    year,
    month,
    handleNext,
    handlePrevious,
    toggleDatePicker
  } = useDatePicker(date)

  return (
    <StyledContainer>
      <DatePickerInput onFocus={toggleDatePicker} />
      {/* <DatePickerCalendar
        month={month}
        year={year}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      /> */}
    </StyledContainer>
  )
}

DatePicker.defaultProps = {
  date: new Date()
}

export default DatePicker
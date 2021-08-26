

export type DatePickerCalendarProps = {
  month: number
  year: number
  handlePrevious: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleNext: (event: React.MouseEvent<HTMLButtonElement>) => void
}
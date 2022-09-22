export const compareDate = (date1: Date, date2: string | Date): boolean => {
  const excludeDate = new Date(date2)
  return (
    date1.getFullYear() === excludeDate.getFullYear() &&
    date1.getDate() === excludeDate.getDate() &&
    date1.getMonth() === excludeDate.getMonth()
  )
}

/**
 * Formats a date into a relative time string (e.g., "1 day ago", "3 weeks ago")
 * @param date - The date to format (Date object or ISO string)
 * @returns A string representing the relative time
 */
export function formatRelativeTime(date: Date | string): string {
  const now = new Date()
  const targetDate = typeof date === 'string' ? new Date(date) : date

  // Calculate the difference in milliseconds
  const diffInMs = now.getTime() - targetDate.getTime()

  // If the date is in the future, return "today"
  if (diffInMs < 0) {
    return 'Idag'
  }

  // Convert to different time units
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  const diffInWeeks = Math.floor(diffInDays / 7)
  const diffInMonths = Math.floor(diffInDays / 30.44) // Average days per month
  const diffInYears = Math.floor(diffInDays / 365.25) // Account for leap years

  // Return appropriate format based on time difference
  if (diffInDays === 0) {
    return 'Idag'
  } else if (diffInDays < 7) {
    return diffInDays === 1 ? '1 dag sedan' : `${diffInDays} dagar sedan`
  } else if (diffInWeeks < 4) {
    return diffInWeeks === 1 ? '1 vecka sedan' : `${diffInWeeks} veckor sedan`
  } else if (diffInMonths < 12) {
    return diffInMonths === 1
      ? '1 månad sedan'
      : `${diffInMonths} månader sedan`
  } else {
    return diffInYears === 1 ? '1 år sedan' : `${diffInYears} år sedan`
  }
}

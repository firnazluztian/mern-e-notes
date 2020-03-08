export const parseDate = (rawdate) => {
    const date = new Date(rawdate)
    return date.toDateString()
}
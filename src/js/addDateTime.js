export function addDate() {
	const date = new Date()

	const monthIndex = date.getMonth()
	const dayIndex = date.getDay()

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const monthName = months[monthIndex]
	const dayName = days[dayIndex]
	const dateString = date.toLocaleDateString()
	const dateArray = dateString.split('/')
	const dayOfMonth = dateArray[1]
	const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`

	function updateTime() {
		let hours = date.getHours()
		let amPm = 'AM'
		if (hours > 12) {
			hours -= 12
			amPm = 'PM'
		}

		function addZero(x) {
			if (x < 10) {
				return (x = '0' + x)
			} else {
				return x
			}
		}
		hours = addZero(hours)
		const minutes = addZero(date.getMinutes())
		const seconds = addZero(date.getSeconds())
		let formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`
		document.getElementById('time').innerHTML = formattedTime
	}

	updateTime()
	document.getElementById('date').innerHTML = formattedDate
}

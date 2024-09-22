import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")
export async function clients() {
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchByDay({ date })

  scheduleShow({ dailySchedules })

  hoursLoad({ date, dailySchedules })
}
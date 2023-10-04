// import dayjs from 'dayjs'
import { format } from 'dayjs'
let time = format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')

const logger = {}
export const log = (info) => {
  console.log(`info-${time} ${info}`);
}
logger['log'] = log
export default logger
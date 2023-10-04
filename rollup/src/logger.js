// import dayjs from 'dayjs'
import dayjs from 'dayjs'
console.log("🚀 ~ file: logger.js:3 ~ dayjs:", dayjs)
let time = dayjs.format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')

const logger = {}
export const log = (info) => {
  console.log(`info-${time} ${info}`);
  // console.log(`info- ${info}`);
}
logger['log'] = log
export default logger
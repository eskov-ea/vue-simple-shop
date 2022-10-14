import store from "../../store/index";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

export const validateTime = (data) => {
    const [h, m] = data.split(':');
    let time = dayjs().hour(h -1 ).minute(m).tz("Asia/Sakhalin");
    let approvedTime = dayjs().add(1, 'hour').tz("Asia/Sakhalin");
    /**
     * We check if the order is available to be ordered.
     * We get client's delivery time in sakhalin TZ then we compare it with
     * actual Sakhalin time added 1 hour to delivery
     */
    console.log('approved time --> ', time.isBetween(
        dayjs().hour(10).minute(0),
        dayjs().hour(18).minute(0),
        'minute', '[]' ) )

    return time.isBetween(
        dayjs().hour(10).minute(0),
        dayjs().hour(18).minute(0),
        'minute', '[]' ) ;
}
// && dayjs().add(1, 'hour').tz('Asia/Sakhalin').isSameOrBefore(time, 'minute')
export const validateDate = (date) => {
    console.log('approved date --> ', dayjs().isSameOrBefore(date, 'day'))
    return dayjs().isSameOrBefore(date, 'day');

}
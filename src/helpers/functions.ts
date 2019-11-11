import { formatDistanceToNow, format, isToday } from 'date-fns';
import { ru } from 'date-fns/locale';

export function getFirstLetter(str: string) {
    return str.charAt(0).toUpperCase();
}

export function formatDate(date, small) {
    const dateToFormat = new Date(date*1000);
    if(small) {
        if(!isToday(dateToFormat)) {
            return format(dateToFormat, 'dd.mm.yy')
        } else {
            return format(dateToFormat, 'HH:mm', { locale: ru });
        }
    }
    return formatDistanceToNow(dateToFormat, { addSuffix: true, locale: ru });
}

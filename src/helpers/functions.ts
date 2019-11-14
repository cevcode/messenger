import { formatDistanceToNow, format, isToday } from 'date-fns';
import { ru } from 'date-fns/locale';
import tinycolor from 'tinycolor2';

export function getFirstLetter(str: string) {
    return str.charAt(0).toUpperCase();
}

export function formatDate(date: number, small: boolean) {
    const dateToFormat = new Date(date * 1000);
    if (small) {
        if (!isToday(dateToFormat)) {
            return format(dateToFormat, 'dd.mm.yy');
        } else {
            return format(dateToFormat, 'HH:mm', { locale: ru });
        }
    }
    return formatDistanceToNow(dateToFormat, { addSuffix: true, locale: ru });
}

export function convertToTime(value: number) {
    const mins = Math.floor(value / 60);
    const sec = Number((value % 60).toFixed());
    return `${mins < 10 ? '0' : ''}${mins}:${sec < 10 ? '0' : ''}${sec}`;
}

const getCorrectIndex = (value: number): number => {
    if (value > 255) {
        return 255;
    }
    if (value < 0) {
        return 0;
    }
    return value > 255 ? 255 : value < 0 ? 0 : value;
};

export function generateAvatarFromHash(hash: string): { fromColor: string, toColor: string } {
    const [r, g, b] = hash
        .substr(0, 3)
        .split('')
        .map(char => getCorrectIndex(char.charCodeAt(0)));

    return {
        fromColor: tinycolor({ r, g, b })
            .lighten(10)
            .saturate(10)
            .toHexString(),
        toColor: tinycolor({ r, g, b })
            .lighten(30)
            .saturate(30)
            .toHexString(),
    };
}

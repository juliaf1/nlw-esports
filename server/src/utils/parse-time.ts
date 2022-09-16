export function convertMinutesToTimeString(minutes: number) {
    const hour = Math.floor(minutes / 60)
    const min = minutes % 60

    const hourString = hour < 10 ? `0${hour}` : hour;
    const minuteString = min < 10 ? `0${min}` : min;

    return `${hourString}:${minuteString}`;
};

export function convertTimeStringToMinutes(time: string) {
    const [hour, min] = time.split(':').map(Number);

    return (hour * 60) + min;
};
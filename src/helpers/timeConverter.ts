
export const dateСonversion = (value: number): string => {
    let date = new Date(+value * 1000);
    let hour = date.getHours();
    let minute = date.getMinutes();
    return `${hour}:${minute<10 ? `0${minute}` : minute}`;
}
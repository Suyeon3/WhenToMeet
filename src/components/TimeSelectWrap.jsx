import { useEffect } from "react";
import TimeSelect from "./TimeSelect"
export default function TimeSelectWrap({ timeOptions, handleTimeOptions, handleStartTime, handleEndTime }) {

    useEffect(() => {
        let timeOptionsCopy = []
        let timeZone = 'AM';
        for (let i = 1; i < 3; i++) {
            if (i === 2) timeZone = 'PM';
            for (let t = (12 % 12); t <= 11; t++) {
                const time = (t === 0) ? 12 : t;
                timeOptionsCopy.push(`${time}:00 ${timeZone}`);
            }
        }
        handleTimeOptions(timeOptionsCopy);
    }, [])

    return (
        <div>
            <TimeSelect timeOptions={timeOptions} timeLabel={'start'} onChange={handleStartTime} />
            <TimeSelect timeOptions={timeOptions} timeLabel={'end'} onChange={handleEndTime} />
        </div>
    )
}
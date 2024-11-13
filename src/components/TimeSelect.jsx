export default function TimeSelect({ timeOptions, timeLabel, onChange }) {

    return (
        <div>
            <label htmlFor={timeLabel}>{timeLabel === 'start' ? 'No ealier than: ' : 'No later than: '}</label>
            <select className={timeLabel} onChange={onChange}>
                <optgroup label='시'>
                    {timeOptions && timeOptions.map((time, index) => (
                        <option key={index} value={index}>{time}</option>
                    ))}
                </optgroup>
            </select>
        </div>
    )
}
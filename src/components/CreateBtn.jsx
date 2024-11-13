import styles from '../style/timeTable.module.css'
import { useState } from 'react';

export default function CreateBtn({ startTime, endTime }) {
    const [isDragging, setIsDragging] = useState(false);
    const [tables, setTables] = useState([]);
    const [times, setTimes] = useState([])
    const [highlighten, setHighlighten] = useState([]);

    const selectFromHere = (table) => {
        setIsDragging(true);
        toggleHighLight(table)
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    const selectToHere = (table) => {
        if (isDragging) {
            toggleHighLight(table);
        }
    }

    const toggleHighLight = (table) => {
        setHighlighten((prev) => {
            if (prev.includes(table)) {
                return prev.filter((i) => i !== table)
            } else {
                return [...prev, table];
            }
        });
    }

    const handleCreate = () => {
        setHighlighten([]);
        const timesCopy = [];
        const tablesCopy = [];
        for (let i = startTime; i < endTime; i++) {
            for (let j = 0; j < 4; j++) {
                if (j === 3) {
                } else {
                    timesCopy.push(`${i}:${j * 20}`);
                    tablesCopy.push(`${i}:${j*20}~${i}:${(j+1)*20}`)
                }
            }
        };
        timesCopy.push(`${endTime}:00`);
        setTimes(timesCopy);
        setTables(tablesCopy);
        // console.log(timesCopy);
        // console.log(tablesCopy);
    }

    return (
        <div>
            <button onClick={handleCreate}>Create Event</button>
            <div
                className={styles.timeTableWrap}
                onMouseUp={handleMouseUp}
            >
                <div className={styles.timeWrap}>
                    {times && times.map((time, index) => (
                        <div
                            key={time}
                            className={styles.time}
                        >{time}</div>
                    ))}
                </div>
                <div className={styles.tableWrap}>
                    {tables && tables.map((table) => (
                        <div
                            key={table}
                            className={highlighten.includes(table) ? `${styles.table} ${styles.highlight}` : styles.table}
                            onMouseDown={() => selectFromHere(table)}
                            onMouseOver={() => selectToHere(table)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
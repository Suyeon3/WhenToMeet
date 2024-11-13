import moment from 'moment';

export default function DateDisplay({selectedDate}) {
    return (
        <p>{`${moment(selectedDate).format('YYYY-MMM-DD')}`}</p>
    )
}
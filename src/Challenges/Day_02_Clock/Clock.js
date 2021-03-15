import { useEffect, useState } from 'react';
import './Clock.css';

export default function Clock() {
	const [now, setDate] = useState(new Date());
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + 90;
	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + 90;

	useEffect(() => {
		setInterval(() => {
			setDate(new Date());
		}, 1000);
	}, []);

	return (
		<div className='clock'>
			<div className='clock-face'>
				<div
					className='hand hour-hand'
					style={{ transform: `rotate(${hoursDegrees}deg)` }}></div>
				<div
					className='hand minute-hand'
					style={{ transform: `rotate(${minutesDegrees}deg)` }}></div>
				<div
					className='hand second-hand'
					style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
			</div>
		</div>
	);
}

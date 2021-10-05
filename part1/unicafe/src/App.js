import React, { useState } from 'react'

const Button = (props) => {
	return(
		<button onClick={props.handleClick}>
			{props.text}
		</button>
	)
}

const Statistics = (props) => {
	let {good, neutral, bad} = props
	if((good + neutral + bad) === 0) {
		return(
			<div>
				<h1>Statistics</h1>
				<p>No feedback given</p>
			</div>
		)
	}
	return(
		<div>
			<h1>Statistics</h1>
			<table>
				<tbody>
				<StatisticsLine name="Good" value={good} />
				<StatisticsLine name="Neutral" value={neutral} />
				<StatisticsLine name="Bad" value={bad} />
				<StatisticsLine name="All" value={good + neutral + bad} />
				<StatisticsLine name="Average" value={(good + (-1 * bad)) / (good + neutral + bad)} />
				<StatisticsLine name="Positive" value={((good / (good + neutral + bad)) * 100) + '%'} />
				</tbody>
			</table>
		</div>
	)
}

const StatisticsLine = (props) => {
	return(
		<tr>
			<td>{props.name}</td>
			<td>{props.value}</td>
		</tr>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const goodClick = () => {
		setGood(good + 1)
	}
	
	const neutralClick = () => {
		setNeutral(neutral + 1)
	}
	
	const badClick = () => {
		setBad(bad + 1)
	}
	
	return (
		<div>
			<h1>Give feedback</h1>
			<Button handleClick={goodClick} text="Good" />
			<Button handleClick={neutralClick} text="Neutral" />
			<Button handleClick={badClick} text="Bad" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

export default App
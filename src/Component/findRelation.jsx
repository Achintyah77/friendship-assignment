import React, { useState } from "react";


let common = [],
	dosti = [];

function allFriend(isFriend1, isFriend, obj, visited = new Set()) {
	console.log(isFriend1);
	common.push(isFriend1);
	visited.add(isFriend1);

	const lastFriend = obj[isFriend1];

	for (const d of lastFriend) {
		if (d === isFriend) {
			dosti.push([...common, isFriend]);
			return;
		}

		if (!visited.has(d)) {
			allFriend(d, isFriend, obj, visited);
		}
	}
	common.pop();
}

export default function FindRelation() {
const [name1, setname1] = useState("");
const [name2, setname2] = useState("");

const [relationcommon, setRelationcommon] = useState([]);

function findRelation(e) {
	console.log(name1, name2);
	e.preventDefault();
	let obj = localStorage.getItem("obj");
	obj = JSON.parse(obj);
	allFriend(name1, name2, obj);
	console.log({ dosti });
	setRelationcommon(dosti);
}

	return (
		<div>
			<form className='card p-3 bg-light'>
				<div className='form-group'>
					<label className=' text-uppercase font-weight-bold' for='name1'>
						Friend 1
					</label>
					<input
						type='text'
						class='form-control'
						id='name1'
						value={name1}
						onChange={(e) => setname1(e.target.value)}
						placeholder='Enter Name'
					/>
					<br />
				</div>
				<div className='form-group'>
					<label className=' text-uppercase font-weight-bold' for='name1'>
						Friend 2
					</label>
					<input
						type='text'
						className='form-control last'
						id='name2'
						value={name2}
						onChange={(e) => setname2(e.target.value)}
						placeholder='Enter Name'
					/>
				</div>
				<button
					type='submit'
					onClick={(e) => findRelation(e)}
					className='btn btn-success'>
					FIND RELATIONSHIP
				</button>
			</form>

			{relationcommon.map((rcommon) => (
				<div>
					{rcommon.map((r, index) => (
						<span>
							{r}
							{index !== rcommon.length - 1 && " > "}
						</span>
					))}
				</div>
			))}
		</div>
	);
}

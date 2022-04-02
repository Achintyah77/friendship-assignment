import React, { useState } from "react";
import { useRef } from "react";

export default function AddRelation() {

  let obj = JSON.parse(localStorage.getItem("obj"));
  if (obj == null) obj = {};
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");
  function addFriendShip(e) {
    e.preventDefault();

    if (!obj.hasOwnProperty(name1)) {
      obj[name1] = [];
    }
    if (!obj.hasOwnProperty(name2)) {
      obj[name2] = [];
    }
    obj[name1].push(name2);
    obj[name2].push(name1);
    console.log(obj);
		
		setname1("");
		setname2("")
    
    localStorage.setItem("obj", JSON.stringify(obj));
  }
	return (
		<div>
			<form className='card p-3 bg-light'>
				<div className='form-group'>
					<label for='name1'>Enter Name</label>
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
					<label for='name1'>Enter Name</label>
					<input
						type='text'
						className='form-control last'
						id='name1'
						value={name2}
            onChange={(e) => setname2(e.target.value)}
						placeholder='Enter Name'
					/>
				</div>
				<button
				  onClick={(e) => addFriendShip(e)}
					type='submit'
					className='btn btn-primary'>
					ADD FRIENDSHIP
				</button>
			</form>
		</div>
	);
}


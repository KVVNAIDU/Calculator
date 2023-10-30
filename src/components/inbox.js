
import React from "react"; 
import OutPutScreen from "./outputscreen.js";
import Button from "./button.js"; 

class Calculator extends React.Component { 
	render() { 
		return ( 
			<div className="frame"> 
				<div class="mainCalc"> 
					<OutPutScreen /> 
					<div className="button-row"> 
						<Button value={"Clear"} /> 
						<Button value={"Delete"} /> 
						<Button value={"Delete"} /> 
						<Button value={"."} /> 
						<Button value={"/"} /> 
					</div> 
					<div className="button-row"> 
						<Button value={"7"} /> 
						<Button value={"8"} /> 
						<Button value={"9"} /> 
						<Button value={"*"} /> 
					</div> 
					<div className="button-row"> 
						<Button value={"4"} /> 
						<Button value={"5"} /> 
						<Button value={"6"} /> 
						<Button value={"-"} /> 
					</div> 
					<div className="button-row"> 
						<Button value={"1"} /> 
						<Button value={"2"} /> 
						<Button value={"3"} /> 
						<Button value={"+"} /> 
					</div> 
					<div className="button-row"> 
						<Button value={"0"} /> 
						<Button value={"="} /> 
					</div> 
				</div> 
			</div> 
		); 
	} 
} 
export default Calculator; // Export Calculator Component

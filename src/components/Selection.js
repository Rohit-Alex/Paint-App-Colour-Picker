import React,{useState} from 'react';
import '../styles/Child.css';

const Selection = (props) => {
	const [bg, selectbg] = useState({ background: "" })
	const {applyColor,nextBackground} = props;
	
  return (
  	<div className="fix-box" style={bg} onClick={()=>applyColor(selectbg)}>
  		<h2 className="subheading">Selection</h2>
  	</div>
  )
}
export default Selection;

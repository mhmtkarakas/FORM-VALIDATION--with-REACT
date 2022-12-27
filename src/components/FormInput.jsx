import  "./formInput.css";
import {useState} from "react";

const FormInput = (props) => {

  const [focused,setFocused] = useState(false);

  const {id, onChange,label,errorMessage,...input}=props
  console.log(props);
  return (
    <div className="form-input">
        <label htmlFor="">{label}</label>
        <input 
        onChange={onChange}
        focused={focused.toString()}
        name={props.name} 
        type="text" 
        {...input} 
        onBlur={()=>setFocused(true)}
        onFocus={()=>props.name==="confirmPassword" && setFocused(true)}/>    
       <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput

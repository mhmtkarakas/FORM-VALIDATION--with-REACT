
import './App.css';
import FormInput from './components/FormInput';
import React, {useState} from "react";


function App() {
  const [values,setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    required:true,
   
});

const [isLoading, setIsLoading] =useState(true)

 const inputs =[
  {
     id:"1",
     name:"username",
     label:"Username",
     errorMessage:"Username should be 3-16 characters and shouldn't include any special character",
     type:"text",
     placeholder:"Enter your username",
     required:true,
     pattern:"^[A-Za-z0-9]{3,16}$" 
},
{
  id:"2",
  name:"email",
  label:"Email",
  type:"email",
  placeholder:"Enter your email",
  errorMessage: "It should be a valid email address!",
  required:true
},
{
  id:"3",
  name:"password",
  label:"Password",
  type:"password",
  placeholder:"Enter your password",
  required:true,
  errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
},
{
  id:"4",
  name:"confirmPassword",
  label:"Confirm Password",
  type:"Confirm Password",
  pattern: values.password,
  placeholder:"Enter your confirm Password",
  errorMessage: "Passwords don't match!",
  required:true
}
]
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      setIsLoading(false);
      setTimeout(() => {
        setIsLoading(true);
      }, 3000);
  }
  const onChange=(e)=>{
    e.preventDefault();
  setValues({...values,[e.target.name]:e.target.value});
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id}  onChange={onChange} {...input} />
        ))}
       
        <button >{isLoading ? "Submit" : "Loading..."}</button>
      </form>
      
    </div>
  );
}

export default App;

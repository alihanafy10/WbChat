import { useForm } from "react-hook-form";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import style from "./index.module.css"
import { Link } from "react-router";
export const LoginForm=()=>{

      const {
        register ,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    const onSubmit=(data)=>{
       console.log(data);
       
    }
    console.log(errors);
    
return( 
<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
    <InputLabel htmlFor="email">Email</InputLabel>
    <InputField id="email" type="email" {...register('email',{required:"Email is required"})}/>
    </InputContainer>
    <InputContainer className={style.loginFormPassword}>
    <InputLabel htmlFor="password">Password</InputLabel>
    <InputField id="password" type="password" {...register('password',{required:"Password is required"})}/>
    </InputContainer>
    <Button className={style.button} type="submit">Login</Button>
    <div className={style.footerText}>
        <span>Don't have an account? </span>
        <Link to="/register">
        <span>Register</span>
        </Link>
    </div>
</form>
);
}
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import { Link } from "react-router";
import style from "./index.module.css"
import { useForm } from "react-hook-form";
export const RegisterForm=()=>{
    
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
    <section className={style.nameFieldRow}>
    <InputContainer>
    <InputLabel htmlFor="firstName">First Name</InputLabel>
    <InputField id="firstName" type="text" {...register('firstName',{required:"First Name is required"})}/>
    </InputContainer>
    <InputContainer>
    <InputLabel htmlFor="lastName">Last Name</InputLabel>
    <InputField id="lastName" type="text" {...register('lastName',{required:"Last Name is required"})}/>
    </InputContainer>
    </section>
    <InputContainer>
    <InputLabel htmlFor="password">Password</InputLabel>
    <InputField id="password" type="password" {...register('password',{required:"Password is required"})}/>
    </InputContainer>
    <Button className={style.button} type="submit">Create My Account</Button>
    <div className={style.footerText}>
        <span>Already have an account? </span>
        <Link to="/login">
        <span>Login</span>
        </Link>
    </div>
</form>
);
}
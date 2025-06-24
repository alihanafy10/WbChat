import { RegisterForm } from "../components/forms/RegisterForm.js"
import { Page } from "../utils/styles/index.js"

export const RegisterPage=()=>{
    return <>
        <Page display="flex" justifyContent="center" alignItems="center">
            <RegisterForm/>
        </Page>
    </>
}
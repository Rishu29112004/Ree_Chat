import {z} from "zod"

export const signupSchema=z.object({
    username:z
    .string()
    .nonempty(1,"username is required!"),
    email:z
    .string()
    .nonempty(1,"email is required!")
    .email("email invalid format!"),
    password:z
    .string()
    .nonempty("password is required!")
    .min(4,"password should be atleast 4 character")
})
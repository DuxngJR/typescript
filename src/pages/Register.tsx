import instance from "@/apis"
import { joiResolver } from "@hookform/resolvers/joi"
import Joi from "joi"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const useSchema = Joi.object({
  email: Joi.string().email({tlds: false}).required(),
  password: Joi.string().required().min(6),
})
const  Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<userType>({
    resolver: joiResolver(useSchema)
  })
  const onSubmit = (user: userType) => {
    (async () => {
      const {data} = await instance.post("/register",user);
      console.log(data)
      if (data.accessToken) {
        window.confirm("Register success, switch to login page") && navigate("/login")
      }
    })();
  }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Register</h1>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            className='form-control'
            id='email'
            placeholder='email'
            {...register('email', { required: true,})}
          />
          {errors.email && <span className='text-danger'>{errors.email.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='password'
            {...register('password', { required: true, minLength: 3 })}
          />
          {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
      </div>
    )
  }
  
  export default Register
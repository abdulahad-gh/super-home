import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase-init';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const onSubmit = data => {
        const { name, email, password } = data;
        createUserWithEmailAndPassword(email, password)
        navigate('/')


    }
    return (
        <div className='mt-20'>
            <h2 className='text-center text-2xl'>SignUp</h2>
            <div className='flex justify-center '>
                <form className='mt-6 w-60' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name", { required: true })} placeholder="type full name" class="input input-bordered w-full max-w-xs " /> <br />
                    {
                        errors.name && <span className="text-red-500 text-xs">name is required</span>
                    }
                    <input type="email" {...register("email", { required: true })} placeholder="type your email" class="input input-bordered  w-full max-w-xs my-2" /> <br />
                    {
                        errors.email && <span className="text-red-500 text-xs ">email is required</span>
                    }
                    <input type="password" {...register("password", { required: true, minLength: 8 })} placeholder="type your password" class="input input-bordered  w-full max-w-xs " /> <br />
                    {
                        errors.password?.type === "required" && <span className='text-red-500 text-xs '>password is required</span>
                    }
                    {
                        errors.password?.type === "minLength" && <span className='text-red-500 text-xs '>password must be  8 cherchters or  more</span>
                    }

                    <button type="submit" class="btn w-full mt-3">SingUp</button>
                </form>
            </div>
        </div>

    );
};

export default Signup;
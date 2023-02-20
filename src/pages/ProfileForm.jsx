import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { auth } from '../context'



const ProfileForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const { user } = useContext(auth.authContext)


    const handleForm = () => {
        console.log("Click");
    }

    return (
        <>
            <div className='d-flex flex-column'>
                <img className='rounded-circle align-self-center mb-5' src={user.photoURL} width={"50%"} alt={user.displayName} />
                <h1>Edit your data</h1>
                <form onSubmit={handleSubmit(handleForm)}>
                    <input disabled type="text" className='mb-2 form-control' value={user.uid} placeholder='id'{...register('id')} />
                    <input type="text" className='mb-2 form-control' value={user.displayName} placeholder='name'{...register('name', { required: true })} />
                    {errors.name && <p>Error: it is necessary this field 'name'</p>}
                    <input type="text" className='mb-2 form-control' value={user.email} placeholder='e-mail'{...register('email', { required: true })} />
                    {errors.email && <p>Error: it is necessary this field 'e-mail'</p>}
                    <input type="text" className='mb-2 form-control' value={user.photoURL} placeholder='picture'{...register('picture', { required: true })} />
                    {errors.picture && <p>Error: it is necessary this field 'picture'</p>}
                    <button type='submit' className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </>

    )
}

export default ProfileForm
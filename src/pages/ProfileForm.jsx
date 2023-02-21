import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { auth } from '../context'
import { users } from '../api'

const ProfileForm = () => {
    const { user, setUser } = useContext(auth.authContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        values: {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            picture: user.photoURL,
        }
    })

    const handleForm = (_data) => {

        users.createUser(_data, _data.id)

    }

    return (
        <>
            <div className='d-flex flex-column'>
                <img className='rounded-circle align-self-center mb-5' src={user.photoURL} width={"50%"} alt={user.displayName} />
                <h1>Edit your data</h1>
                <form onSubmit={handleSubmit(handleForm)}>
                    <input disabled type="text" className='mb-2 form-control' placeholder='id'{...register('id')} />
                    <input type="text" className='mb-2 form-control' placeholder='name'{...register('name', { required: true })} />
                    {errors.name && <p>Error: it is necessary this field 'name'</p>}
                    <input type="text" className='mb-2 form-control' placeholder='e-mail'{...register('email', { required: true })} />
                    {errors.email && <p>Error: it is necessary this field 'e-mail'</p>}
                    <input type="text" className='mb-2 form-control' placeholder='picture'{...register('picture', { required: true })} />
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
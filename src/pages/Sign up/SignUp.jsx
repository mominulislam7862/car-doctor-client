import { Link } from 'react-router-dom';
import sm from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log('create user', user)
        })
        .catch(error => console.log(error)
        )
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
               <img src={sm} alt="" />
            </div>
            <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-3xl text-center font-bold">SignUp!</h1>
                    <div className="form-control-name">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control-email">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Password</span>
                        </label>
                        <input name='password'  type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        
                        <input className='btn btn-primary' type="submit" value="Sign up"   />
                    </div>
                </form>
                <p className='text-center my-4'>Already Have Account <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
    const {loginUser}=useContext(AuthContext);
    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { email, password };
        console.log(newUser);
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "user created successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error=>{
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">please provide valid email or password?</a>'
              });
        })
    }
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-116px)]">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">SingUp now!</h1>

            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSingUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SingUp</button>
                    </div>
                </form>
                <p className="p-4 text-xl text-center ">Do not have an account! please <Link className="font-bold text-blue-700" to='/register'>Register</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;
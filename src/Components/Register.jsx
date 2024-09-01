import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub, FaTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser,githubLogin,googleLogin } = useContext(AuthContext);
    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, email, password };
        console.log(newUser);
        if(password.length<6){
            alert('At Least 6 character')
            return ;
        }
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            alert('please provide strong password')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  const user = {email,name}
                  fetch('https://b9-a9-practice.vercel.app/user',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(user)
                  })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            })
    }
    const handleGoogleSubmit =()=>{
        googleLogin()
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
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    }
    const handleGithub =()=>{
        githubLogin()
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
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    }

    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-116px)]">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        <div className="flex gap-2">
                            <button onClick={handleGoogleSubmit} className="btn">
                            <FcGoogle />

                                Google
                            </button>
                            <button onClick={handleGithub} className="btn">
                            <FaSquareGithub />
                                GitHub
                            </button>
                            <button className="btn">
                            <FaTwitter />
                                Twitter
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="p-4 text-xl text-center ">You have already an account! please <Link className="font-bold text-blue-700" to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
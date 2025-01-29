

const Login = () => {
  return (
    <div  className="w-120  m-auto  mt-10    " >

    <form  className="flex flex-col gap-10 border p-10 rounded-md  bg-gradient-to-r from-indigo-600 from-10% via-sky-600 via-30% to-emerald-600 to-90% ...">
       <h1 className=" m-auto font-black text-2xl ">LogIn Page</h1>
     
     <input className=" m-auto gap-2 w-70 border p-2 rounded-md" type="email" placeholder="Enter your email" />
     <input className=" m-auto gap-2 w-70 border p-2 rounded-md" type="password" placeholder="Enter your password" />
     <button  className=" m-auto gap-2 w-50 border p-2 rounded-md font-medium bg-green-500" type="submit">Login</button>
     </form>
   </div>
  )
}

export default Login

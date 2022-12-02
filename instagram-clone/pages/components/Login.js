const Login = () =>{
    return(
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white mb-3 border border-gray-300 w-80 pt-8 pb-4 flex flex-col items-center">
                <h1 className="instagram-logo"></h1>
                <form className="w-64 flex flex-col gap-1 mt-8">
                    <input type="text" className="w-full rounded border bg-gray-100 p-2 text-xs"
                    placeholder="Phone number,username or email"></input>
                    <input type="password" className="w-full rounded border bg-gray-100 p-2 text-xs"
                    placeholder="Password"></input>                                                       
                </form>
            </div>
            <div className="bg-white">
                Another Div
            </div>
        </div>
    )
}

export default Login
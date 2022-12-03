import { useRef, useState } from "react"

const Login = () =>{

    const [showPassword, setShowPassword] = useState(false);
    const [hasFilledBoth, sethasFilledBoth] = useState(false);
    const formRef = useRef(null);
    const pressShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleChange = () => {
        const form = formRef.current;
        if(form['username'].value.length > 0 && form['password'].value.length > 0)
        {
            sethasFilledBoth(true);
        }
        else
        {
            sethasFilledBoth(false);
        }
    }
    return(
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white mb-3 border border-gray-300 w-80 pt-8 pb-4 flex flex-col items-center">
                <h1 className="instagram-logo"></h1>
                <form ref={formRef} className="w-64 flex flex-col gap-1 mt-8">
                    <div className="relative">
                        <input onChange={handleChange} name="username" type="text" className="peer w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent"
                                placeholder="Phone number,username or email"></input>
                        <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs 
                                            peer-placeholder-shown:text-xs
                                            peer-placeholder-shown:top-2
                                            pointer-events-none">Phone number,username or email</label>
                    </div>
                    <div className="relative">
                        <input onChange={handleChange} name="password" type={showPassword ? "text" : "password"}
                                className="peer w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent"
                                placeholder="Password"></input>
                        <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs 
                                            peer-placeholder-shown:text-xs
                                            peer-placeholder-shown:top-2
                                            pointer-events-none">Password</label>
                        <button onClick={e => pressShow(e)} className="absolute right-2 bottom-2
                                        focus:text-gray-500 text-sm font-semibold">{showPassword ? 'Hide':'Show'}</button>
                    </div>
                    <a className={`mt-2 text-sm text-center ${hasFilledBoth ? "bg-blue-500" : "bg-blue-300"} text-white py-1 rounded font-medium`}>Log in</a>
                </form>
            </div>
            <div className="bg-white">
                Another Div
            </div>
        </div>
    )
}

export default Login
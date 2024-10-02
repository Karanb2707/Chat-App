import { useState } from "react"
import toast from "react-hot-toast";

const userSignup = () => {
    const [loading, setLoding] = useState(false);

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullname, username, password, confirmPassword, gender });
        if (!success) return;

        setLoding(true)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender })
            });

            const data = await res.json();
            console.log(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoding(false);
        }
    };
    return { loading, signup };

};

export default userSignup

function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error('please fill in all fields');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 Characters');
        return false;
    }

    return true;
}
import {  useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../../Utils/Hooks/useAuth/useAuth";
import useAxios from "../../Utils/Hooks/axios/useaxios";

const GoogleSignIn = () => {
  const { signWithGoogle } = useAuth();
  const axios  = useAxios()
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleLogin = () => {
    signWithGoogle()
      .then((res) => {
        const userInfo = {
            email:res.user.email,
            name:res.user.displayName,
            photo:res.user.photoURL,
            type:'others',
            creationDate:new Date().toDateString()
        }
        navigate('/')
        axios.post(`/createUser`,userInfo)
        .then(res=> {
          
        })
      })
      // handle Error and show to the user
      .catch((error) => {
        toast.error(error)
    });
  };
  return (
    <div>
        <div className="divider -mt-4"></div>
      <button
        onClick={handleGoogleLogin}
        className="btn z-50 rounded-full border-dashed bg-gray-100 hover:border-main border-main hover:bg-transparent w-full bg-transparent font-semibold mb-3"
      >
        <FcGoogle></FcGoogle>
        Sign IN With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;

import { useAppContextUsers } from "../context/contextUsers";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'


const Profile = () => {

    const contextUser = useAppContextUsers();
    const navigate = useNavigate();

    const currentUser = contextUser.sharedUsers.filter((x) => x.isLogin === true)

    const logout = () => {
        const changeToFalse = contextUser.sharedUsers.map((x) => x.isLogin === true ? { ...x, isLogin: false } : x)
        contextUser.setSharedUsers(changeToFalse)
        navigate("/")
    }

    return (
        <div className="containter-prof">
            <h1>ACCOUNT</h1>
            <div className="container-prof-1">
                <div className="container-prof-text">
                    <h4>PROFILE</h4>
                </div>
                
                <div className="container-prof-text">
                    <h4 >Name..</h4>
                    <p>{currentUser[0].name.firstname.toUpperCase()}, {currentUser[0].name.lastname.toUpperCase()}</p>
                </div>
                <div className="container-prof-text">
                    <h4>Email..</h4>
                    <p>{currentUser[0].email}</p>
                </div>
                <div className="container-prof-text">
                    <h4>Phone..</h4>
                    <p>{currentUser[0].phone}</p>
                </div>
                <div className="container-prof-text">
                    <h4>Address:</h4>
                    <h4>City...</h4>
                    <p>{currentUser[0].address.city.toUpperCase()}</p>
                </div>
                <div className="container-prof-text">
                    <h4>Street...</h4>
                    <p>{currentUser[0].address.street.toUpperCase()}, nº {currentUser[0].address.number}, cp {currentUser[0].address.zipcode}</p>
                </div>
                <div className="container-prof-text">
                    <h4>PASSWORD.. *******</h4>
                </div>
                <div className="container-prof-text">
                    <h4>PAYMENT METHODS: ...</h4>
                    <p></p>
                </div>

            </div>
            <Button variant="text" className="button1" onClick={() => logout()}>SIGN OUT</Button>
        </div >

    )


}


export default Profile
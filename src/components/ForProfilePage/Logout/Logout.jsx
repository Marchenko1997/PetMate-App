import { LogoutButtom } from "./Logout.styled";


const Logout = ({setShowLogout}) => {
  return (
    <LogoutButtom type="button" onClick ={() => setShowLogout(true)}>logout</LogoutButtom>
  )
}

export default Logout
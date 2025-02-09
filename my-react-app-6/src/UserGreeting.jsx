import PropTypes from 'prop-types'


function UserGreeting({isLoggedIn=false, username="N/A"}) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Log in to continue</h2>


    if(isLoggedIn) {
        return welcomeMessage
    } else {
        return loginPrompt
    }
}


UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting
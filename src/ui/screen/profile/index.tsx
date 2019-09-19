import React, { ReactHTMLElement, ReactChild } from 'react';
import { User } from '../types';
import { getUserLevel } from '../demo1'

interface Props {
    user: User;
    level: number;
}

interface State {
    showDetail: boolean;
}

// const initialState: State = {
const initialState = {
    showDetail: false,
}

class ProfileComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = initialState;
    }

    handleClick = () => {
        const { showDetail } = this.state;
        this.setState({showDetail: !showDetail})
    }

    renderDetail = () => {
        const { user, level } = this.props;
        return (
            <div>
                <p>
                    Type: {user.type}
                </p>
                <p>
                    Phone: {user.phone}
                </p>
                <p>
                    Level: {level}
                </p>

            </div>
        )
    }
    renderProfile = () => {
        const {user} = this.props;
        const {showDetail} = this.state;
        return (
            <div>
                <h5>
                    user ID: {user.userID}
                </h5>
                <p>
                    Name: {`${user.firstName} ${user.lastName}`}
                </p>

                { showDetail && this.renderDetail()}
            </div>
        )
    }

    render() {
        const {user} = this.props;
        const {showDetail} = this.state;

        return (
            <div>
                <button onClick={this.handleClick}>
                    {showDetail ? 'Hide Profile' : 'Show Profile'}
                </button>

                { showDetail && this.renderProfile() }
            </div>
        )
    }
}

export default ProfileComponent;
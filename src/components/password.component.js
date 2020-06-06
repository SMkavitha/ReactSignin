import React, { Component } from "react";

export default class Password extends Component {
    render() {
        return (
            <form>
                <h3>Reset Password</h3>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter New Password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
             
            </form>
        );
    }
}

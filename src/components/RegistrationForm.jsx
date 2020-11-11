import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './reg.css'

class Registration extends React.Component{

    state = {
        username: 'a-random-user-1',
        password: '',
        email: '',
        phone: '',
        gender: 'Not specified',
        address: 'India',
        salary: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value }) 
    }

    validateFormAndSave = () => {
        const { phone, salary } = this.state

        if(this.state.username.length<3){
            alert('Invalid username entered. Please enter a username with more than 3 characters') 
        } else if(this.state.password.length<8){
            alert('Invalid password entered. Please enter a password with more than 8 characters') 
        } else if(this.state.password.indexOf('@') === -1 && this.state.password.indexOf('_') === -1){
            alert('Invalid password entered. Please enter a password including \'@\' or \'_\' ') 
        }else if(phone.length!== 10){
            alert('Invalid phone number entered. Please enter your correct salary information')   
        } else if(parseInt(salary)<0 || parseInt(salary) > 9999999999999999){
            alert('Invalid salary entered. Please enter your correct salary information')   
        } else{
            alert('Your details have been saved.')
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.validateFormAndSave()
    }

    render(){
        return(
            <div className='container'>
                <h1>Greetings !</h1>
                <h3>Don't have an account? Register here.</h3>

                <form onSubmit={this.handleSubmit}>
                    <div className='form-group row'>
                        <label htmlFor="username" className='offset-2 col-3'>Username:</label>
                        <input type="text" name="username" id="username" className='col-4' onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <div className='form-group row'>
                        <label htmlFor="password" className='offset-2 col-3'>Password:</label>
                        <input type="password" name="password" id="password" className='col-4' onChange={this.handleChange} value={this.state.password} placeholder="(atleast 8 characters) Must include '@' or '_'"/>
                    </div>
                    <div className='form-group row '>
                        <label htmlFor="email" className='offset-2 col-3'>Email:</label>
                        <input type="email" className='col-4' id="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                        
                    </div>
                    <div className='form-group row'>
                        <label htmlFor="phone" className='offset-2 col-3'>Phone:</label>
                        <input type="number" className='col-4' id="phone" name="phone" onChange={this.handleChange} value={this.state.phone}/>
                        
                    </div>
                    <div className='form-group row'>
                        <label htmlFor="gender" className='offset-2 col-3'>Gender:</label>
                        <select type="text" className='col-4' name="gender" id="gender" onChange={this.handleChange} value={this.state.gender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor="address" className='offset-2 col-3'>Address:</label>
                        <input type="text" className='col-4' name="address" id="address" onChange={this.handleChange} value={this.state.address} readOnly={true}/>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor="salary" className='offset-2 col-3'>Salary:</label>
                        <input type="number" className='col-4' name="salary" id="salary" onChange={this.handleChange} value={this.state.salary}/>
                        
                    </div>
                   
                    <button type="submit" className="btn btn-primary ml-0">Register</button>
                </form>
            </div>
        )
    }
}

export default Registration
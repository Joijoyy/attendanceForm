import React, {Component} from 'react'
import Logo from './Logo'
import Button from './Button'
import Modal from './Modal'


class Navbar extends Component {
    
    constructor (props) {
        
        super(props)
    }

    openModal = () => {

        document.querySelector('#displayModal').classList.remove('hide');
    }

    render () {

        return(
 
            <div>

                <div className = 'navbar'>

                    <ul>
                        <li><Logo/></li>

                        <li className = 'navbtn'><Button onClick = {this.openModal}  buttonClass = 'navbar-button' buttonText = 'Add record...'/></li>
                    </ul>

                </div>

                <Modal ModalId = 'displayModal'/>

            </div>
        )
    }
}


export default Navbar 
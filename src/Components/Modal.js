import React,{Component} from 'react'
import Input from './Input'
import Button from './Button'
import firebase from 'firebase'
import firebaseConfig from './../Firebase'


class Modal extends Component {

  constructor (props) {

    super (props)

    firebase.initializeApp(firebaseConfig)

    this.state = {

      first_name: '',

      last_name: '',

      email: '',

      contact: '',

      message: '',
    }
  }

closeButton = () => {

  document.querySelector('#displayModal').classList.add('hide')
  
}

handleChange = (e) => {

  this.setState({[e.target.name] : e.target.value})

}

// storeData = (e) => {

//   e.preventDefault()

//   console.log(this.state)
// }

storeData = (e) => {

  e.preventDefault()

  let data = {

    first_name: this.state.first_name,

    last_name: this.state.last_name,

    email: this.state.email,

    contact: this.state.contact,
  }

  firebase.database().ref('users/').push(data)

  .then(data => {

    console.log(data)

    this.setState({message: 'Details submitted.'})

    this.closeButton()

    this.setState ({

      first_name: '',

      last_name: '',

      email: '',

      contact: '',

      message: '',
    })

    this.getData(data)

  }).catch(err => console.log(err))

  // document.querySelector('#displayModal').classList.add('hide')
}

getData = () => {

  firebase.database().ref('users/').once('value', (snapshot) => {

    this.setState({users: snapshot.val()})
  })
}

render () {
        
  return (

    <div className = 'modal hide' id = {this.props.ModalId}>

      <button className = 'x-button' onClick = {this.closeButton}>X</button>

      <div className = 'form-content'>
        
        <h3>UWAT Database Attendance Form</h3>

        <p>{this.state.message}</p>

        <form className = 'form' >

          <div className = 'divider'>
            
            {/* <label htmlFor = 'firstName'>First Name:</label> */}
                 
            <Input onChange = {this.handleChange} name = 'first_name' inputPlaceholder = 'First Name:' />
                 
          </div>
                 
          <div className = 'divider'>

            {/* <label htmlFor = 'firstName'>Last Name:</label> */}
                 
            <Input onChange = {this.handleChange} name = 'last_name' inputPlaceholder = 'Last Name:' />
                 
          </div>
                 
          <div className = 'divider'>
                   
            {/* <label htmlFor = 'firstName'>Email:</label> */}
                 
            <Input onChange = {this.handleChange} name = 'email' inputPlaceholder = 'Email:' />
                 
          </div>
                 
          <div className = 'divider'>
                   
            {/* <label htmlFor='firstName'>Contact:</label> */}
                 
            <Input onChange = {this.handleChange} name = 'contact' inputPlaceholder = 'Contact:' />
                 
          </div>
                 
          <Button onClick = {this.storeData} buttonClass = 'form-button' buttonText = 'Submit'/>
              
        </form>
            
      </div>
          
    </div>
    )
  }
}


export default Modal
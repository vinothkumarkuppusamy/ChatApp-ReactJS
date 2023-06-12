import React, { useState } from 'react'


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const styles={
    button: {
      width:'10%' ,
      height:50 ,
      fontWeight:'bold', 
      borderRadius:10 ,
      fontSize:18 ,
      backgroundColor:'#035efc',
      borderWidth:0,
      color:'#fff'
    },
    textarea:{ 
       width:'60%' ,
       height:50 ,
       borderRadius:10, 
       borderWidth:0 , 
       padding:10 , 
       fontSize:18
      },
    textContainer:{
      display:"flex", 
      justifyContent:'space-evenly', 
      alignItems:'center'}
  }

export default function InputText({addMessage}) {

    const [message , setMessage] = useState('')

    function addAMessage(){
        addMessage({
            message
        })
        setMessage('')
    }

  return (
    <div style={styles.textContainer} >
        <textarea
        style={styles.textarea}
        rows={6}
        placeholder="Type a message...."
        value={message}
        onChange={e => setMessage(e.target.value)}
        >
        </textarea>
        <button
        onClick={()=> addAMessage()}
        style = {styles.button}> <i class="fa fa-send-o"></i>
        Send
        </button>
    </div>
  )
}

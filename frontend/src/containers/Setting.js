import { useState } from "react";

import { useCalendar } from "./hook/useCalendar";
import '../css/Setting.css'

const Setting = () => {
  const { me, display, setDisplay, editUser, displayStatus } = useCalendar();
  const [displayName, setDisplayName] = useState(display);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleEdit = () => {
    if(password !== confirm){
      displayStatus('error', 'inconsistency between passwords');
      setDisplayName(display);
    }else{
      editUser(me, displayName, password);
      setDisplay(displayName);
    }
    setPassword('');
    setConfirm('');
  }

  return (
    <div className="setting-container">
      <div className='setting-cover'>
        <h1 style={{fontSize: '32px'}}>Edit Profile</h1>
        <div className='input_area'>
          <input type='text' value={displayName} placeholder='display name' onChange={(e) => setDisplayName(e.target.value)}></input>
        </div>
        <div className='input_area'>
          <input type='password' value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='input_area'>
          <input type='password' value={confirm} placeholder='enter password again' onChange={(e) => setConfirm(e.target.value)}
            onKeyDown={(e) => {
              if(e.keyCode === 13)
                handleEdit()
            }}
          ></input>
        </div>
        <div className='edit_btn' onClick={handleEdit} >Submit</div>
      </div>
    </div>
  )
}

export default Setting;
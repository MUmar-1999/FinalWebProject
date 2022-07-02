import React from 'react'

const Contact = () => {
  return (
      <div className='Contact'>
           <div className="Container">
          <h1 className="nletter">Subscribe To PC Geeks</h1>
        
          <p>
            If you want to keep yourself updated with the latest products then
                  subscribe us.
          </p>
        </div>
        <div class="input-group ">
          <input
            type="text"
            placeholder="Recipient's username"
            />
         <button type="button" class="btn btn-primary" >
          Subscribe
          </button>
        </div>
        
          <hr/>
          <p class="text-center">© 2022    Company, Inc</p>
    </div>
  )
}

export default Contact

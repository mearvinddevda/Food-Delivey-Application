import React from 'react'

export default function Card() {
  return (
    <div>
        <div className="card mt-3" style={{ "width": "18rem" , "maxHeight":"460px"}}>
          <img src="https://i.pinimg.com/564x/ab/16/95/ab16957f8be53797a257ad2844bbb5c7.jpg" className="card-img-top" style={{ "height":"250px"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is the Card Text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-info">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                  )
                })}
              </select>
              <select className="m-2 h-100 bg-info" >
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
        </div>
    </div>
  )
}

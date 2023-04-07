import React from 'react'

export default function ListCharacteristics(props) {
  return (
    <div>
      <div>
        <img
          src={props.data.characteristics[0].icon}
          alt=""
          style={{ width: '20px', height: '20px' }}
        />
        <p>{props.data.characteristics[0].name}</p>
      </div>
      {/* <div>
        <img src={props.data.characteristics[1].icon} alt="" />
        <p>{props.data.characteristics[1].name}</p>
      </div>
      <div>
        <img src={props.data.characteristics[2].icon} alt="" />
        <p>{props.data.characteristics[2].name}</p>
      </div>
      <div>
        <img src={props.data.characteristics[3].icon} alt="" />
        <p>{props.data.characteristics[3].name}</p>
      </div>
      <div>
        <img src={props.data.characteristics[4].icon} alt="" />
        <p>{props.data.characteristics[4].name}</p>
      </div>
      <div>
        <img src={props.data.characteristics[5].icon} alt="" />
        <p>{props.data.characteristics[5].name}</p>
      </div>
      <div>
        <img src={props.data.characteristics[6].icon} alt="" />
        <p>{props.data.characteristics[6].name}</p>
      </div>
      <div>
        <img src={props.data.characteristics[7].icon} alt="" />
        <p>{props.data.characteristics[7].name}</p>
      </div> */}
    </div>
  )
}

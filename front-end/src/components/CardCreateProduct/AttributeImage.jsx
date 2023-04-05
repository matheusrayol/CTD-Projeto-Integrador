import React, { useState } from 'react'
import './AttributeImage.scss'

function AttributeImage({ onAddAttribute }) {
  const [attributes, setAttributes] = useState([{ name: '', iconClass: '' }])

  function handleNameChange(index, event) {
    const newAttributes = [...attributes]
    newAttributes[index].name = event.target.value
    setAttributes(newAttributes)
  }

  function handleAddAttributeImage() {
    setAttributes([...attributes, { name: '', iconClass: '' }])
    onAddAttribute()
  }

  return (
    <section>
      <h2>Imagens</h2>
      <div className="image-fields">
        <div className="image-field">
          {attributes.map((attribute, index) => (
            <div key={index}>
              <label htmlFor="">Url da Imagem</label>
              <input
                type="text"
                value={attribute.name}
                onChange={event => handleNameChange(index, event)}
                placeholder="Attribute Name"
              />
            </div>
          ))}
        </div>
        <div className="button-field">
          <button onClick={handleAddAttributeImage}>+</button>
        </div>
      </div>
    </section>
  )
}

export default AttributeImage

import { useEffect, useState } from 'react'

export function CardCategoria(props) {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    fetch(`/category/all/${props.data.urlImage}`).then(res => {
      res.json().then(data => {
        setImgUrl(data.url)
      })
    })
  }, [props.data.urlImage])

  return (
    <div
      className="card-category"
      onClick={() => props.onSelectCategory(props.data.name)}
    >
      <img src={imgUrl} alt="" />
      <div className="content-category">
        <p>{props.data.name}</p>
      </div>
    </div>
  )
}

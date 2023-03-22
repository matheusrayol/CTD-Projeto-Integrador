// // import { useEffect, useState } from 'react'

// //id, descriptions, qualification, urlImage
// export function CardCategoria(props) {
//   // const [imgUrl, setImgUrl] = useState('')

//   // useEffect(() => {
//   //   fetch(`https://bucket-pi-t5-grupo6.s3.us-east-2.amazonaws.com/images/${props.data.imageID}`).then(
//   //     res => {
//   //       res.json().then(data => {
//   //         setImgUrl(data.url)
//   //       })
//   //     }
//   //   )
//   // }, [props.imageID])

//   return (
//     <div
//       className="card-category"
//       id="card-category"
//       onClick={() => props.onSelectCategory(props.data.name)}
//     >
//       {/* <img src={imgUrl} alt="" /> */}
//       <div className="content-category" id="content-category">
//         <p>{props.data.description}</p>
//         <p>{props.data.qualification}</p>
//         {/* <span>{`${props.data.qtd} ${props.data.descripition}`}</span> */}
//       </div>
//     </div>
//   )
// }

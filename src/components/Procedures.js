import { Link } from 'react-router-dom'

function Procedures(props) {
  const procedureItems = props.proceduresList.map((p) => {
    return <li><Link to={`/procedures/${p.id}`}>{p.name}</Link></li>
  })
  
  return(
    <>
      <h1>Procedures</h1>
      <ul>
        {procedureItems}
      </ul>
    </>
  )
}

export default Procedures
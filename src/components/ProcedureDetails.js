function ProcedureDetails(props) {
  return (
    <div>
      <h1>{props.procedure.name}</h1>
      <p>{props.procedure.description}</p>
    </div>
  )
}

export default ProcedureDetails
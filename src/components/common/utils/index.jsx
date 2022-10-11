export const chooseItem = (index, state) => {
  let totalQuestionsCorrects = 0
  let totalQuestionsChecked = 0
  
  let items = state
  let response = {
    valid: false,
    error: false,
    items
  }
  
  if ( items[index].correct )
    items[index].checked = true
  else
    response.error = true
  
  state.map( (item) => {
    if(item.correct)
      totalQuestionsCorrects++
    if(item.checked)
      totalQuestionsChecked++
  })

  if ( totalQuestionsCorrects === totalQuestionsChecked )
    response.valid = true
  else
    response.valid = false
  
  return response
}
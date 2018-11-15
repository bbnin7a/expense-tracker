import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
  return (
    <li>
      <Link to={`/edit/${id}`}>{description}</Link>, {amount}, {createdAt}
    </li>
  )
}

export default ExpenseListItem

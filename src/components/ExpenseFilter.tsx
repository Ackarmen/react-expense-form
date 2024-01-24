import categories from "../data/categories"

interface Props {
  onSelectCaterory: (category: string) => void
}

function ExpenseFilter({onSelectCaterory}: Props) {
  return (
    <>
    <label htmlFor="categoryFilter" className="form-label">Category</label>
      <select id="categoryFilter" className="form-select" onChange={(event) => onSelectCaterory(event.target.value)}>
        <option value="">All categories</option>
        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
      </select>
      </>
    )
}

export default ExpenseFilter
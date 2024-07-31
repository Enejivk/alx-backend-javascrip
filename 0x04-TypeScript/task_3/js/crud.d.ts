type insertRow = (row:RowElement) => number
type deleteRow = (rowId:RowID) => void
type updateRow = (rowId:RowID, row:RowElement) => RowID
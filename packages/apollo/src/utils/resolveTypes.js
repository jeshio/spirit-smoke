const resolveType = (correctType) => ({ isError, errorType }) => {
  if (isError) return errorType
  return correctType
}

export default resolveType

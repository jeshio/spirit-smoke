const handleError = ({
  code,
  entityTitle,
}) => {
  switch (code) {
    default:
      return {
        isError: true,
        errorType: 'NotFound',
        message: `${entityTitle} не получилось найти`,
        code,
      }
  }
}

export default handleError

// global results store
const found = {}

// maximum time unique.exec will attempt to run before aborting
const maxTime = 5000

// maximum retries unique.exec will recurse before abortings ( max loop depth )
const maxRetries = 50

// time the script started
const startTime = new Date().getTime()

// current iteration or retries of unique.exec ( current loop depth )
let currentIterations = 0

const fakerUnique = function (method, args, opts, isFirstTime = true) {
  if (isFirstTime) {
    currentIterations = 0
  }

  /* eslint-disable no-param-reassign */
  const now = new Date().getTime()

  opts = opts || {}
  opts.maxTime = opts.maxTime || maxTime
  opts.maxRetries = opts.maxRetries || maxRetries

  if (now - startTime >= opts.maxTime) {
    return fakerUnique.errorMessage(now, 'exceeded maxTime')
  }

  if (currentIterations >= opts.maxRetries) {
    return fakerUnique.errorMessage(now, 'exceeded maxRetries')
  }

  // execute the provided method to find a potential satifised value
  const result = method.apply(this, args)
  // if the result has not been previously found, add it to the found array and return the value as it's unique
  if (typeof found[result] === 'undefined') {
    found[result] = result
    currentIterations = 0
    return result
  }
  currentIterations += 1
  return fakerUnique(method, args, opts, false)
}

// common error handler for messages
fakerUnique.errorMessage = function (now, code) {
  console.error('error', code)
  console.log('found', Object.keys(found).length, 'unique entries before throwing error. \nretried:', currentIterations, '\ntotal time:', now - startTime, 'ms')
  throw new Error(`${code} for uniquness check. may not be able to
    generate any more unique values with current settings.
    Try adjusting maxTime or maxRetries parameters for faker.unique()`)
}

export default fakerUnique

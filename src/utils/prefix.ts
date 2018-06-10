

export const ApiServerUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://220.117.112.31:4000'

export const ApiServerAddr = {
  get: {
    post: '/post'
  },
  post: {
    post: '/post'
  }
}

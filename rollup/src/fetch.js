function fetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        url,
        message: 'success',
        data: [
          { name: 'tom', age: 15 },
          { name: 'air', age: 16 }
        ],
        code: 200
      }
      resolve(res)
    }, 200)
  })  
}

export default fetch
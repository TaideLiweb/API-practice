const productBlock = document.querySelector('.productBlock')
const obj = {
  UUID: '4e5317b1-b943-407e-81cc-73ea10b6482c',
  apiPath: 'https://course-ec-api.hexschool.io/',
  products: [],
  getFunction() {
    const getApiUrl = `${this.apiPath}api/${this.UUID}/ec/products`
    const vm = this
    axios.get(getApiUrl).then((res) => {
      let apiData = res.data.data
      products = apiData
      vm.render()
    })
  },
  render() {
    let str = ''
    products.map((product) => {
      str += `
      <div class="productItem"> 
        <div class="imgBlock">
          <img src = '${product.imageUrl}' width="100%">
        </div>
        <div class="productDescription">
          <div>
            <h1>${product.title}</h1>
            <p>${product.content}</p>
          </div>
          <div>
            <div>
              <p>原價:${product.origin_price}</p>
              <p>特價:${product.price}</p>
            </div>
            <button>放入購物車</button>
          </div>
        </div>
      </div>`
      console.log(product)
    })
    console.log(productBlock)
    productBlock.innerHTML = str
  },
}

obj.getFunction()

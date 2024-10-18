import './PurchaseList.css'

const PurchaseList = ({ purchaseProduct }) => {

  return (
    <section className='section_item_container'>
      <div className='dv_item_img'>
        <img src={purchaseProduct.product.images[0].url} alt={purchaseProduct.product.title} />
      </div>

      <div>
        <h5>Product Name</h5>
        <p className='p_item_produc_name'>{purchaseProduct.product.title}</p>
      </div>
      
      <div>
        <h5>Quantity</h5>
        <p className='p_item_quantity'>{purchaseProduct.quantity}</p>
      </div>
      
      <div>
        <h5>Purchase Value</h5> 
        <p className='p_item_price'>${Number(purchaseProduct.quantity) * Number(purchaseProduct.product.price)}</p>
      </div>

      <div>
        <h5>Purchase date</h5>
        <p className='p_item_date'>{(purchaseProduct.createdAt).slice(0,10)}</p>
      </div>
      
    </section>
  )
}

export default PurchaseList

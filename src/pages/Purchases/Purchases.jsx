import { useEffect, useState } from "react"
import { getAllPurchase } from "../../services/purchases/getAllPurchase";
import { useSelector } from "react-redux";
import PurchaseList from "../../components/common/PurchaseList/PurchaseList";
import ('./Purchases.css');

const Purchases = () => {
  
  const token = useSelector((store) => store.auth.token);
  const [ purchase, setPurchase ] = useState([]); 

  useEffect(()=>{
    const loadPurchase = async () => {
      const purchaseData = await getAllPurchase(token);
      setPurchase(purchaseData);
    }

    loadPurchase();
  },[]);

  return (
    <section className="purchase_section_container">
       <h1>Puchases</h1> 

       <ul className="purchase_list_container">
        {(purchase.sort((a,b)=>b.id - a.id)).map(product => <li key={product.id}>
                                    <PurchaseList purchaseProduct={product}/>                                                             
                            </li>)}
       </ul>

    </section>
  )
}

export default Purchases
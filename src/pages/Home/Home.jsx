
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import CategoriesFilter from '../../components/Home/CategoriesFilter/CategoriesFilter';
import ProductList from '../../components/Home/ProductList/ProductList'
import { Form, useLoaderData, useSubmit } from 'react-router-dom';

import './Home.css'

const Home = () => {
  const formId = useId();
  const submit = useSubmit();
  const formRef = useRef();
  const [titleValue, setTitleValue] = useState("");
  const { categories, title } = useLoaderData();


  const handleChangeCategories = useCallback(
      ()=> {
        if (!formRef.current) return;

        submit(formRef.current);
      },
      [submit]
    );

    useEffect(() => {
      setTitleValue(title);
    }, [title])
    
  return (
    <section className='home_container'>
      <aside>
        <CategoriesFilter formId={formId} onChangeCategories={handleChangeCategories} initialCategories={categories}/>
      </aside>
      <section>
        <div className='input_search'>
          <Form id={formId} ref={formRef}> 
            <input className='input_search_value' type="search" name="title" value={titleValue} onChange={(e)=>setTitleValue(e.target.value)} placeholder="What are you looking for?" />

          </Form>
        </div>
       
        <ProductList categories={categories} title={title}/>
      </section>

    </section>
  )
}

export default Home
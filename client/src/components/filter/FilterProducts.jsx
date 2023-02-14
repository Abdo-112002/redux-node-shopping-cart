
import React,{useState , useEffect} from 'react'
import { FilterContent, FilterTitle, FilterType, FilterTypesContent, FilterWrapper, InputLabel } from './filter.style'
import data from '../../db.json';

function FilterProducts() {
    const [category , setCategory] = useState([]);

    useEffect(() => {
        let allCategory = data.map((item) => item.title);
        setCategory([...allCategory]);
    }, []);

    function filterCategory(e,value){
        if(e.target.checked){
            
        }
    }

  return (
    <FilterWrapper>
        <FilterContent>
            <FilterTitle>
                Product Category
            </FilterTitle>
            {
                category?.map((item,ind)=> (
                    <FilterTypesContent key={ind}>
                        <FilterType onChange={(e)=> filterCategory(e,item)} inputType='checkbox'/>
                        <InputLabel>{item}</InputLabel>
                    </FilterTypesContent>
                ))
            }
            <FilterTitle>
                Sort by
            </FilterTitle>
            <FilterTypesContent>
                <FilterType name='filter' inputType='radio'/>
                <InputLabel name='filter'>Latest</InputLabel>
            </FilterTypesContent>
            <FilterTypesContent>
                <FilterType name='filter' inputType='radio'/>
                <InputLabel name='filter'>Highest</InputLabel>
            </FilterTypesContent>
            <FilterTypesContent>
                <FilterType name='filter' inputType='radio'/>
                <InputLabel name='filter'>Lower</InputLabel>
            </FilterTypesContent>
        </FilterContent>
    </FilterWrapper>
  )
}

export default FilterProducts

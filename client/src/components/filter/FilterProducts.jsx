
import React, { memo, useEffect, useMemo, useState } from 'react';
import data from '../../db.json';
import { FilterContent, FilterTitle, FilterType, FilterTypesContent, FilterWrapper, InputLabel } from './filter.style';

function FilterProducts() {
    const [all , setAll] = useState(data);
    const [category , setCategory] = useState([]);
    const [filterSort , setFilterSort] = useState(null);
    let productFiltered = useMemo(() => [], [category]);


    // filter by category dependance on category changes
    useEffect(() => {
        if(category.length > 0) {
            data.forEach(item => {
                category.forEach(el => {
                    if(item.title === el) {
                        productFiltered.push(item);
                        setAll([...productFiltered]);
                        return ;
                    }
                })
            });
        }else {
            setAll(data);
        }
    }, [category,productFiltered]);

    // fill and handel multi choice of category filter checkbox 
    function filterCategory(e,value){
        if(e.target.checked){
            return setCategory((prev) => {
              return [...prev , value]
            });
        }
        return setCategory((prev) => {
            return prev.filter((item) => item !== value);
        });
    }

    function handelFilterSort(e,sortValue){
        if(e.target.checked) {
            setFilterSort(sortValue);
            setAll((prev) => {
              return prev.sort((a,b) => {
                if(sortValue === 'Lower') return a.price - b.price ;
                else if(sortValue === 'Highest') return b.price -a.price ;
                else return  a.id < b.id ? 1 : -1;
              });
            });
        }
    }

  return (
    <FilterWrapper>
        <FilterContent>
            <FilterTitle>
                Product Category
            </FilterTitle>
            {
                [...new Set(data?.map((item)=> item.title))].map((item,ind)=> (
                    <FilterTypesContent key={ind}>
                        <FilterType 
                            checked={category.indexOf(item)+1 ? true : false} 
                            onChange={(e)=> filterCategory(e,item)} 
                            inputType='checkbox'
                        />
                        <InputLabel>{item}</InputLabel>
                    </FilterTypesContent>
                ))
            }
            <FilterTitle>
                Sort by
            </FilterTitle>
            <FilterTypesContent>
                <FilterType 
                    onChange={(e)=> handelFilterSort(e,'Latest')}  
                    name='filter' 
                    inputType='radio'
                    checked={filterSort === 'Latest' ? true : false}
                />
                <InputLabel name='filter'>Latest</InputLabel>
            </FilterTypesContent>
            <FilterTypesContent>
                <FilterType 
                    onChange={(e)=> handelFilterSort(e,'Highest')} 
                    name='filter' 
                    inputType='radio'
                    checked={filterSort === 'Highest' ? true : false}
                />
                <InputLabel name='filter'>Highest</InputLabel>
            </FilterTypesContent>
            <FilterTypesContent>
                <FilterType 
                    onChange={(e)=> handelFilterSort(e,'Lower')} 
                    name='filter' 
                    inputType='radio'
                    checked={filterSort === 'Lower' ? true : false}
                />
                <InputLabel name='filter'>Lower</InputLabel>
            </FilterTypesContent>
        </FilterContent>
    </FilterWrapper>
  )
}

export default memo(FilterProducts)

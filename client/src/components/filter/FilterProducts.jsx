
import React from 'react'
import { FilterContent, FilterTitle, FilterType, FilterTypesContent, FilterWrapper, InputLabel } from './filter.style'

function FilterProducts() {
  return (
    <FilterWrapper>
        <FilterContent>
            <FilterTitle>
                Product Category
            </FilterTitle>
            <FilterTypesContent>
                <FilterType inputType='checkbox'/>
                <InputLabel>computer</InputLabel>
            </FilterTypesContent>
            <FilterTypesContent>
                <FilterType inputType='checkbox'/>
                <InputLabel>te-shert</InputLabel>
            </FilterTypesContent>
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

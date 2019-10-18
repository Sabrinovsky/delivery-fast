import React from 'react'
import { render } from '@testing-library/react'
import { ProductForm } from './'
import '@testing-library/jest-dom/extend-expect'

describe('<ProductForm>',()=>{
  it('render without crashing',()=>{
    const subject  = render(<ProductForm />)
    expect(subject.queryByText('Cadastrar')).toBeVisible()
  })

})

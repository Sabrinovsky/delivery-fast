import React from 'react'
import { render } from '@testing-library/react'
import PageName from './'
import '@testing-library/jest-dom/extend-expect'

describe('<PageName>',()=>{

    let subject;

    beforeEach(() => {

        subject  = render(<PageName title="Teste" icon="star"/>);

    });

  it('title',()=>{
    expect(subject.queryByText('Teste')).toBeVisible();
  })

  it('icon', () => {
    expect(subject.container.querySelector('.fa-star'));
  });

})

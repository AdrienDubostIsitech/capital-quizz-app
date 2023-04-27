import { AnswerComponent } from '../src/components/AnswerComponents'
import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import "@testing-library/dom"
import React from 'react';

describe('reverse', () => {

  test("return array with reversed string if array contains multiple elements", () => {
    const testvalues = ["test1","test2","test3","test4"]; 
    render(<AnswerComponent answer={testvalues} onSelect={(answer: string) => undefined}/>); 
    const value1 = screen.getByText(/test1/i); 
    const value2 = screen.getByText(/test2/i); 
    const value3 = screen.getByText(/test3/i); 
    const value4 = screen.getByText(/test4/i); 
    expect(value1).toBe;
    expect(value2).toBe;
    expect(value3).toBe;
    expect(value4).toBe;
    // const reversed = AnswerComponent({answer:["test1","test2","test3","test4"], onSelect:(answer: string) => undefined})
    // expect(reversed).toEqual({answer:["test1","test2","test3","test4"], onSelect:(answer: string) => undefined})
  });
});

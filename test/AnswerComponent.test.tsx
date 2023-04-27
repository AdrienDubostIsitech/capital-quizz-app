import { AnswerComponent } from '../src/components/AnswerComponents'
import { render, screen } from '@testing-library/react'
import React from 'react';

describe('reverse', () => {

  test("return array with reversed string if array contains multiple elements", () => {
    const testvalues = ["test1", "test2", "test3", "test4"];
    render(<AnswerComponent answer={testvalues} onSelect={(answer: string) => undefined} />);
    const value1 = screen.getByText(testvalues[0]);
    const value2 = screen.getByText(testvalues[1]);
    const value3 = screen.getByText(testvalues[2]);
    const value4 = screen.getByText(testvalues[3]);
    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);
  });
});

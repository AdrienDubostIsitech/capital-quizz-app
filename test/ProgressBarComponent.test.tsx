import { ProgressBarComponent } from '../src/components/ProgressBarComponents'
import { render, screen } from '@testing-library/react'
import { expect } from 'chai';
import React from 'react';

describe('reverse', () => {
  test("return array with reversed string if array contains multiple elements", () => {
    const testNbQuestion = 10;
    const testCurrentQuestion = 2
    const testProgress = 20
    render(<ProgressBarComponent nbQuestion={testNbQuestion} currentQuestion={testCurrentQuestion} progress={testProgress}/>);
    const question = screen.getByText('Question '+testCurrentQuestion+' / '+testNbQuestion);
    // const progressBar = screen.getByTestId('progressBar');
    // console.log(progressBar);
    // expect(progressBar).toHaveStyle('width: '+testProgress+'%');
    console.log(question);
  });
});

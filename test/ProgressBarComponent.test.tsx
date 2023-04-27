import { ProgressBarComponent } from '../src/components/ProgressBarComponents'
import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import React from 'react';

describe('test progress', () => {
  test("test the number of question and the current question", () => {
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

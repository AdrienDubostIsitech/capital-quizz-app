import { describe} from "vitest";
import { render, screen } from '@testing-library/react'
import { QuestionComponent } from "../src/components/QuestionComponent";
import React from "react";



describe("Country", () => {
  test("return the name of the country in props", () => {
    const testvalue = "JeSuisUnPays"; 
    render(<QuestionComponent name={testvalue}/>); 
    const valueName = screen.getByText("Quel est la capitale de ce pays : " + testvalue + " ?"); 
    console.log(valueName); 
  })
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import StopWatch from './StopWatch';


describe("StopWatch component", ()=>{
    test('check seconds render', () => {
        render(<StopWatch hundredths={0} minutes={0} seconds={0} />);
      
        const seconds = screen.getByTestId('seconds');

        expect(seconds).toBeTruthy;
    });
    
    test('check minutes render', () => {
        const runFuncMock = jest.fn();
        render(<StopWatch hundredths={0} minutes={0} seconds={0} />);
      
        const minutes = screen.getByTestId('minutes');

        expect(minutes).toBeTruthy;
    });

    test('check hundredths render', () => {
        const runFuncMock = jest.fn();
        render(<StopWatch hundredths={0} minutes={0} seconds={0} />);
      
        const hundredths = screen.getByTestId('hundredths');

        expect(hundredths).toBeTruthy;
    });
  
})

//more robust tests in App.test.tsx
//since stopwatch component just for display


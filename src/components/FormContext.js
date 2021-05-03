import React, { useState, useEffect, createContext } from 'react';

export const FormContext = createContext({});

export const FormProvider = ({
    myValue, 
    children
}) => {

    const [myName, setMyValue] = useState(myValue);

    /**
     * New way with react hooks.
     */
    const useWindowWidth = () => {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () =>  setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                // removes it and avoids memory leaks.
                window.removeEventListener('resize', handleResize);
            }
        });
        return width;
    }

    const useChangeDocTitle = (title) => {
        useEffect(() => {
            document.title = title;
        });
    }

    const useFormValue = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        const handleChange = (event) => {
            setValue(event.target.value);
        }

        return {
            value,
            onChange: handleChange
        }
    }

    const formContext = {
        myName,
        useWindowWidth,
        useChangeDocTitle,
        useFormValue
    };

    return <FormContext.Provider value={formContext}>{children}</FormContext.Provider>
}

export const { FormConsumer } = FormContext;
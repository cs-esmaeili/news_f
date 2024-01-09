import React, { useEffect, useRef } from 'react';

function InputDatePicker({ icon, onChange, reset, length = 3 }) {

    let inputRefs = useRef(Array.from({ length }, () => React.createRef()));

    const focusNextInput = (index) => {
        const nextIndex = index + 1;
        if (nextIndex < length) {
            inputRefs.current[nextIndex].current.focus();
        }
    };

    const focusPrevInput = (index) => {
        const prevIndex = index - 1;
        if (prevIndex >= 0) {
            inputRefs.current[prevIndex].current.focus();
        }
    };

    const onChangedDates = () => {
        let time = "";
        inputRefs.current.forEach(element => {
            time += element.current.value + "-";
        });
        time = time.substring(0, time.length - 1);
        onChange(time);
    }

    useEffect(() => {
        if (reset == null) {
            inputRefs.current.forEach(element => {
                element.current.value = "";
            });
        }
    }, [reset]);


    return (
        <div className='flex items-center gap-1 bg-primary rounded-md min-w-0'>
            <div className='flex h-full items-center ml-1'>
                {icon}
            </div>
            <input
                className=' bg-transparent p-1 outline-none text-center min-w-0'
                ref={inputRefs.current[0]}
                placeholder='1379'
                onChange={onChangedDates}
                value={inputRefs.current[0].value}
                onKeyDown={(e) => {
                    if (e.key === 'Backspace' && e.currentTarget.value === '') {
                        focusNextInput(0);
                    } else if (e.key >= '0' && e.key <= '9' && e.currentTarget.value.length === 4) {
                        focusPrevInput(0);
                    }
                }}
                maxLength={4}
            />
            <span> / </span>
            <input
                className=' bg-transparent p-1 outline-none text-center min-w-0'
                ref={inputRefs.current[1]}
                value={inputRefs.current[0].value}
                placeholder='01'
                onChange={onChangedDates}
                onKeyDown={(e) => {
                    if (e.key === 'Backspace' && e.currentTarget.value === '') {
                        focusNextInput(1);
                    } else if (e.key >= '0' && e.key <= '9' && e.currentTarget.value.length === 2) {
                        focusPrevInput(1);
                    }
                }}
                maxLength={2}
            />
            <span> / </span>
            <input
                className=' bg-transparent p-1 outline-none text-center min-w-0'
                ref={inputRefs.current[2]}
                value={inputRefs.current[0].value}
                placeholder='11'
                onChange={onChangedDates}
                onKeyDown={(e) => {
                    if (e.key === 'Backspace' && e.currentTarget.value === '') {
                        focusNextInput(2);
                    } else if (e.key >= '0' && e.key <= '9' && e.currentTarget.value.length === 2) {
                        focusPrevInput(2);
                    }
                }}
                maxLength={2}
            />

        </div>
    );
}



export default InputDatePicker;
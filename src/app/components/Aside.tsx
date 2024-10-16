'use client';
import React, { useState } from 'react';

type PropsAside = {
    initialName: string;
    initialSurname: string;
    initialCountry: string;
    initialBirthday: string; 
    initialPassportNumber: string; 
    initialPhoneNumber: string; 
}

export const Aside: React.FC<PropsAside> = ({
    initialName,
    initialSurname,
    initialCountry,
    initialBirthday,
    initialPassportNumber,
    initialPhoneNumber,
}) => {
    const [name, setName] = useState(initialName);
    const [surname, setSurname] = useState(initialSurname);
    const [country, setCountry] = useState(initialCountry);
    const [birthday, setBirthday] = useState(initialBirthday);
    const [passportNumber, setPassportNumber] = useState(initialPassportNumber);
    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
    
    const [isOpen, setIsOpen] = useState(false);
    const [currentField, setCurrentField] = useState('');
    const [currentValue, setCurrentValue] = useState('');

    const handleEdit = (field: string, value: string) => {
        setCurrentField(field);
        setCurrentValue(value);
        setIsOpen(true);
    };

    const handleSave = () => {
        switch (currentField) {
            case 'name':
                setName(currentValue);
                break;
            case 'surname':
                setSurname(currentValue);
                break;
            case 'country':
                setCountry(currentValue);
                break;
            case 'birthday':
                setBirthday(currentValue);
                break;
            case 'passportNumber':
                setPassportNumber(currentValue);
                break;
            case 'phoneNumber':
                setPhoneNumber(currentValue);
                break;
            default:
                break;
        }
        setIsOpen(false);
    };

    return (
        <div>
            <div className='text-black bg-white flex flex-col w-96 gap-4 ml-16'>
                <div className='font-bold text-lg'>Informations</div>
                <div className='flex justify-between'>
                    <div className='flex justify-between' onClick={() => handleEdit('name', name)}>
                        <div>
                            <span className='font-bold'>Name: </span>{name}
                        </div>
                    </div>
                    <div className='flex' onClick={() => handleEdit('surname', surname)}>
                            <span className='font-bold'>Surname: </span>{surname}
                    </div>
                </div>

                <div onClick={() => handleEdit('country', country)}>
                    <span className='font-bold'>Country: </span>{country}
                </div>
                <div onClick={() => handleEdit('birthday', birthday)}>
                    <span className='font-bold'>Birthday: </span>{birthday}
                </div>
                <div onClick={() => handleEdit('passportNumber', passportNumber)}>
                    <span className='font-bold'>Passport number: </span> {passportNumber}
                </div>
                <div onClick={() => handleEdit('phoneNumber', phoneNumber.toString())}>
                    <span className='font-bold'>Phone number: </span>{phoneNumber}
                </div>
            </div>

            {isOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded'>
                        <h2 className='font-bold text-orange-300'>Edit {currentField}</h2>
                        <input
                            type='text'
                            value={currentValue}
                            onChange={(e) => setCurrentValue(e.target.value)}
                            className='border border-gray-300 rounded p-2 w-full'
                        />
                        <button onClick={handleSave} className='mt-2 bg-orange-400 text-white px-4 py-2 rounded'>
                            Save
                        </button>
                        <button onClick={() => setIsOpen(false)} className='mt-2 ml-2 bg-gray-500 text-white px-4 py-2 rounded'>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

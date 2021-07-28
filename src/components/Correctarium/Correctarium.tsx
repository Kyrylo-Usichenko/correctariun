import * as React from 'react';
import '../../styles/global.scss'
import {useDispatch} from "react-redux";
import {selectUserLanguage, updateProcessedText} from "../../redux/reducer";
import {useState} from "react";



export type CorrectariumPropsTypes = {
    textValue: string,
    totalAmount: number,
    date: string
}

const Correctarium = ({textValue, totalAmount, date}:CorrectariumPropsTypes) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    let onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
        dispatch(updateProcessedText(e.target.value))
    }
    let onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        setValue(e.target.value)
    }
    const onChangeLanguage = (e:React.ChangeEvent<HTMLSelectElement>):void => {
        dispatch(selectUserLanguage(e.target.value))
    }


    return (
        <div className='container'>
            <form className='form' action="">
                <div>
                    <h3 className='mediumTitle'>Замовити переклад або редагування</h3>
                    <fieldset className='selector'>
                        <select className='makeOrder' onChange={onSelectChange} required>
                            <option value="Послуга" hidden>Послуга</option>
                            <option value="Редагування">Редагування</option>
                            <option value="Переклад">Переклад</option>
                        </select>
                    </fieldset>

                    <div className='area'>
                    <textarea className='textArea' placeholder='Введіть текст' onChange={onTextChange}
                              value={textValue}/>
                    </div>
                    <div>
                        {
                            value === 'Переклад'
                                ?
                                null
                                :
                                <fieldset className='selector'>
                                    <select className='makeOrder' disabled={value === ''} onChange={onChangeLanguage}>
                                        <option value="" hidden>Мова</option>
                                        <option value="Українська">Українська</option>
                                        <option value="Російська">Російська</option>
                                        <option value="Англійська">Англійська</option>
                                        <option value="Англійська(носій)">Англійська(носій)</option>
                                    </select>
                                </fieldset>

                        }
                    </div>
                </div>
                <div className='submit'>{totalAmount ? (
                    <span>
                        <span className='number'>
                            {isNaN(totalAmount) ? 0 : Math.floor(totalAmount)}
                        </span>
                        <span className='currency'>
                            грн
                        </span>
                        <span className='number'>{isNaN(totalAmount) ? 0 :
                            (totalAmount - Math.floor(totalAmount))
                                .toFixed(2)
                                .split('.')
                                .reverse()
                                .shift()}
                        </span>
                        <span className='currency'>
                        копійок
                        </span>
                    </span>) : 'Введіть текст та дізнайтесь суму'}
                    {totalAmount ? (<h3>{date ? 'Термін здавання:' : null} {date}</h3>) : null}
                </div>
            </form>
        </div>
    );
};

export default Correctarium;

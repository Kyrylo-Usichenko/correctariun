import React, {useState} from 'react';
import '../../styles/global.scss'
import styles from './Correctarium.module.scss'
import {useDispatch} from "react-redux";
import {selectUserLanguage, updateProcessedText} from "../../redux/reducer";


const Correctarium = ({textValue, totalAmount, date}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    let onTextChange = (e) => {
        dispatch(updateProcessedText(e.target.value))
    }
    let onSelectChange = (e) => {
        setValue(e.target.value)
    }
    const onChangeLanguage = (e) => {
        dispatch(selectUserLanguage(e.target.value))
    }


    return (
        <div className='container'>
            <form className={styles.form} action="">
                <div>
                    <h3 className={styles.mediumTitle}>Замовити переклад або редагування</h3>
                    <fieldset className={styles.selector}>
                        <select className={styles.makeOrder} onChange={onSelectChange} required>
                            <option value="Послуга" hidden>Послуга</option>
                            <option value="Редагування">Редагування</option>
                            <option value="Переклад">Переклад</option>
                        </select>
                    </fieldset>

                    <div className={styles.area}>
                    <textarea className={styles.textArea} placeholder='Введіть текст' onChange={onTextChange}
                              value={textValue}/>
                    </div>
                    <div>
                        {
                            value === 'Переклад'
                                ?
                                null
                                :
                                <fieldset className={styles.selector}>
                                    <select className={styles.makeOrder} disabled={value === ''}
                                            onChange={onChangeLanguage}>
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
                <div className={styles.submit}>{totalAmount ? (
                    <span>
                        <span className={styles.number}>
                            {isNaN(totalAmount) ? 0 : Math.floor(totalAmount)}
                        </span>
                        <span className={styles.currency}>
                            грн
                        </span>
                        <span className={styles.number}>{isNaN(totalAmount) ? 0 :
                            (totalAmount - Math.floor(totalAmount))
                                .toFixed(2)
                                .split('.')
                                .reverse()
                                .shift()}
                        </span>
                        <span className={styles.currency}>
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

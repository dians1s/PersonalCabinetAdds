import React from "react";
import classes from './MyModal.module.scss';

interface MyModalProps {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
    children: any;
}

const MyModal: React.FC<MyModalProps> = ({modalActive, setModalActive, children}) => {

    const rootClasses = [classes.modal];
    const childrenClasses = [classes.modalContent];

    if (modalActive) { 
        rootClasses.push(classes.active);
        childrenClasses.push(classes.active);
        console.log(modalActive === true);
    }
    
    return(
        <div className={rootClasses.join(' ')}
        onClick={() => setModalActive(false)}>
            <div className={childrenClasses.join(' ')} onClick={e => e.stopPropagation()}>
                {children}
             </div>
        </div>
    )
}

export default MyModal;
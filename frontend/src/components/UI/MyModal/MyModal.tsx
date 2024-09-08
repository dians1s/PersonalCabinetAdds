import React from "react";
import classes from './MyModal.module.scss';

interface addNewAdProps {
    imageUrl: string;
    name: string;
    description: string;
    price: string;
}

interface MyModalProps {
    addNewAd: (ad: addNewAdProps) => void;
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
    children: any;
}

const MyModal: React.FC<MyModalProps> = ({addNewAd, modalActive, setModalActive, children}) => {

    

    const rootClasses = [classes.modal];
    const childrenClasses = [classes.modalContent];

    if (modalActive) { 
        rootClasses.push(classes.active);
        childrenClasses.push(classes.active);
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
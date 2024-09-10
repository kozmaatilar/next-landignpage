import React from 'react';

const AccordionHeader = ({ item, visibleContent, handleAccordionClick, handleArrowClick }) => {
    return (
        <div className="accordion-header flex items-center justify-between relative" onClick={() => handleAccordionClick(item.id)}>
            <h2 className="font_2xl text_grey font-bold ff_inter text-left">{item.title}</h2>
            <div className={`arrow ${visibleContent[item.id] ? 'accordion-up-arrow' : 'accordion-bottom-arrow'}`} onClick={(e) => handleArrowClick(e, item.id)}></div>
        </div>
    );
};

export default AccordionHeader;

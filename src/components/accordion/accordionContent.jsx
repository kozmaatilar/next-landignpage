import React from 'react';

const AccordionContent = ({ item, visibleContent }) => {
    return (
        <div className={`accordion-content font_lg fw-normal ff_inter text_grey text-left border_top ${visibleContent[item.id] ? 'fade-in' : 'fade-out'}`}>
            {item.content}
        </div>
    );
};

export default AccordionContent;
import React from 'react';
import AccordionHeader from './accordionHeader';
import AccordionContent from './accordionContent';

const AccordionItem = ({ item, activeAccordion, visibleContent, handleAccordionClick, handleArrowClick }) => {
    return (
        <div key={item.id} className={`accordion-item ${activeAccordion === item.id ? 'active' : ''}`} id={item.id}>
            <AccordionHeader
                item={item}
                visibleContent={visibleContent}
                handleAccordionClick={handleAccordionClick}
                handleArrowClick={handleArrowClick}
            />
            <AccordionContent item={item} visibleContent={visibleContent} />
        </div>
    );
};

export default AccordionItem;
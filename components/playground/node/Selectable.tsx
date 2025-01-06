import React, { ReactNode } from 'react';
import useSelectionStore from "@/store/selection"

// Define the type for the object passed to the wrapper
interface WrapperProps {
    children: ReactNode;  // The children elements to wrap
    id: string
}

const Selectable: React.FC<WrapperProps> = ({ children, id }) => {
    const {setSelectedString, selectedId} = useSelectionStore();

    // Function to handle the click and set the selection string
    const handleClick = () => {
        setSelectedString(selectedId === id ? "" : id);
    };

    return (
        <div id={id} onClick={handleClick}>
            {children}
        </div>
    );
};

export default Selectable;

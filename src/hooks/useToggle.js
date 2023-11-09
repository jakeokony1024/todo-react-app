import React, {useState} from 'react';

function useToggle (initalState = true) {
    const [visible, setVisible] = useState(initalState);

    function toggle() {
        setVisible(prevVisible => !prevVisible);
    }

    return [visible, toggle];
}

export default useToggle;
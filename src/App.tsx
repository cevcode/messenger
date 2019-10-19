import React from 'react';
import { Button } from './ui/Button/Button';
import { ButtonColorTypes, ButtonSizeTypes } from './helpers/enums';

const App: React.FC = () => {
    return (
        <div className="App">
            <Button color={ButtonColorTypes.blue} size={ButtonSizeTypes.l} onClick={() => alert('test')}>
                Test
            </Button>
        </div>
    );
};

export default App;

import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="w-full flex items-center justify-center "
            style={{
                height: "100vh",
            }}
        >
            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;
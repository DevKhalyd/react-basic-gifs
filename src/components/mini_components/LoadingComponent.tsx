import React from 'react'
import { useLoading, Oval } from '@agney/react-loading';

export const LoadingComponent = () => {

    const { indicatorEl } = useLoading({
        loading: true,
        indicator: <Oval />,

    });

    return (
        <div className="static-size">
            {indicatorEl} {/* renders only while loading */}
        </div>
    )
}

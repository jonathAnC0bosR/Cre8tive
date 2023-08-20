// Make a Loading animation component
// --------------------------------------------------------

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { XlviLoader } from 'react-awesome-loaders';

function AnimatedLoader() {
    const [loading, setLoading] = useState(true);

    return (
        <motion.div>
            <XlviLoader
                boxColors={['#FF0000', '#00FF00', '#0000FF']}
                desktopSize={'128px'}
                mobileSize={'100px'}
            />
        </motion.div>
    )
}

export default AnimatedLoader;
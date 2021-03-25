import React from 'react'

const seasonConfig = {
    summer: {
        txt: 'cevru',
        iconName: 'sun'
    },
    winter: {
        txt: 'ladno',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
if (month > 7 && month < 9) {
   return lat > 0 ? 'summer' : 'winter';
} else {
    return lat < 0 ? 'winter' : 'summer';
}
};

export default function Season(props) {
const season = getSeason ( props.Lat, new Date().getMonth() )
const {txt, iconName} = seasonConfig[season];
console.log([season])

return (
        <div>
            <i className={`${iconName} icon`} />
            {txt}
        </div>
    );
};

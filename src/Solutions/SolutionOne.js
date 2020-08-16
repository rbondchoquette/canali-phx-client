import React from 'react';
import './Solution.css';

function SolutionOne() {
    return (
        <div>
            <p className='SolutionHeader'>The City Must Rezone Canal Adjacent Parcels to Mixed Use</p>
            <p className='BodyText'>There's a good reason real estate lining the canals isn't used for bars, restuarants or shops: <span className='emphasis'>it's illegal!</span> The City of Phoenix uses its Zoning Ordinance to determine what land may be used for. City planners no doubt have many persuasive reasons to limit the use of certain parcels. 
            But, sometimes its best to let the community decide what it wants. Take the parcel of land right behind Mackenzie's bar on 7th Street and Minnezona. 
            It is zoned "R-3" meaning <span className='emphasis'>it can only be used for apartments and condos</span>. 
            Unless the City loosens its zoning laws, we'll never know if it would be better used for bite along the canal after beers. <br/><br/><span className='emphasis'>Vote below</span> if you think "upzoning" is a good idea.</p>
        </div>
    );
}

export default SolutionOne;

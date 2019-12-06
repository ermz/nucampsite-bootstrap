import React, {Component} from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    isCampsite(campsite) {
        if (campsite) {
            return(
                <div className="row" />
            );
        }
        return <div />;
    }

    render () {
        return(
            {isCampsite()}
        )
    }

}

export default CampsiteInfo;
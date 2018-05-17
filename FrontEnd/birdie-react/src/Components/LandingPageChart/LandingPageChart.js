import React, { Component } from 'react';

class LandingPageChart extends Component {	
    render() {							
        return (
            <div className="blackout">
                <div id="tvc_fullscreen_button_75aec48aa1dd9c06fbf642ac20ee0a6d"></div>
                <iframe
                    src="//tvc4.forexpros.com/init.php?family_prefix=tvc4&carrier=0b8fbcc0f550672e7243535814b47118&time=1525114153&domain_ID=1&lang_ID=1&timezone_ID=8&pair_ID=945629&interval=900&refresh=6&session=24x7&client=&user=guest&width=970&height=500&init_page=live-charts&m_pids=&watchlist=945629,997650,1010782,1031333,1024821,1054991,1054993,1055297,1010798,1036958,1062023,1056600,1036890,1010773,1057008,1056502,1010801,1010776,1010777,1024822,1036862,1061647,1031068&site=https://www.investing.com"
                    style={{width: 1080, height: 720, display: 'inline'}}>
                </iframe>
            </div>
        );
    }
}

export default LandingPageChart;
